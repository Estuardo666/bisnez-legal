import fs from 'fs';
import * as M from './extract-section.mjs';

const cls = process.argv[2];
const name = process.argv[3] || cls;
const frag = M.sliceByClass(cls);
if(!frag){ console.error('not found'); process.exit(1); }
const classes = M.classesIn(frag).filter(c=>c!=='framer-text');
const rules = M.rulesFor(classes).filter(r=>{
  const sel = r.replace(/^@media[^{]*\{\s*/,'').split('{')[0];
  return !/framer-text/.test(sel) && /\.framer-/.test(sel);
});

// readable DOM outline
let out=[], depth=0;
const tagRe=/<(\/?)([a-zA-Z][\w-]*)((?:"[^"]*"|'[^']*'|[^>"'])*?)(\/?)>|([^<]+)/g;
const voids=new Set(['img','br','hr','input','source','meta','link','path','circle','use','stop','rect','line','polygon','ellipse']);
let m;
while((m=tagRe.exec(frag))){
  if(m[5]!==undefined){ const t=m[5].replace(/\s+/g,' ').trim(); if(t) out.push('  '.repeat(depth)+'» '+t.slice(0,300)); continue; }
  const closing=m[1]==='/', tag=m[2].toLowerCase(), attrs=m[3]||'', self=m[4]==='/'||voids.has(tag);
  if(closing){ depth=Math.max(0,depth-1); continue; }
  const cl=(attrs.match(/class="([^"]*)"/)||[,''])[1].split(/\s+/).filter(c=>/^framer-/.test(c)&&c!=='framer-text').join(' ');
  const fn=(attrs.match(/data-framer-name="([^"]*)"/)||[])[1];
  const src=(attrs.match(/\ssrc="([^"]*)"/)||[])[1];
  const srcset=(attrs.match(/srcset="([^"]*)"/)||[])[1];
  const alt=(attrs.match(/alt="([^"]*)"/)||[])[1];
  const href=(attrs.match(/href="([^"]*)"/)||[])[1];
  const style=(attrs.match(/style="([^"]*)"/)||[])[1];
  let line='  '.repeat(depth)+'<'+tag+(fn?` name="${fn}"`:'')+(cl?` .${cl.split(' ').join('.')}`:'');
  if(href) line+=` href="${href}"`;
  if(src) line+=` src="${src}"`;
  if(alt) line+=` alt="${alt}"`;
  if(style) line+=` style="${style.slice(0,400)}"`;
  line+='>';
  out.push(line);
  if(!self) depth++;
  if(tag==='svg'){ // capture full svg markup
    const s=frag.indexOf('<svg', m.index); const e=frag.indexOf('</svg>', s);
    if(s>=0&&e>s) out.push('  '.repeat(depth)+'  [SVG] '+frag.slice(s,e+6).replace(/\s+/g,' '));
  }
}

fs.writeFileSync(`raw/${name}.dom.txt`, out.join('\n'));
fs.writeFileSync(`raw/${name}.css.txt`, rules.join('\n'));
console.log(name, '| frag', frag.length, '| classes', classes.length, '| rules', rules.length, '| domlines', out.length);
