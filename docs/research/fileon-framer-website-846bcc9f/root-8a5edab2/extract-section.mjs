import fs from 'fs';
const html = fs.readFileSync('page.html','utf8');
const css  = fs.readFileSync('all-css.txt','utf8');

// --- slice a section's HTML by its unique framer class ---
export function sliceByClass(cls){
  const idx = html.indexOf(`class="framer-${cls}"`) >= 0 ? html.indexOf(`class="framer-${cls}"`) : html.indexOf(`framer-${cls}`);
  if(idx<0) return null;
  // walk back to opening <
  let start = html.lastIndexOf('<', idx);
  // forward balance of tags
  let i = start, depth = 0, out = '';
  const tagRe = /<(\/?)([a-zA-Z][\w-]*)([^>]*?)(\/?)>/g;
  tagRe.lastIndex = start;
  let m;
  const voids = new Set(['img','br','hr','input','source','meta','link','path','circle','use','stop','rect','line','polygon','ellipse']);
  while((m = tagRe.exec(html))){
    const closing = m[1]==='/', tag = m[2].toLowerCase(), self = m[4]==='/' || voids.has(tag);
    if(!closing && !self) depth++;
    else if(closing) depth--;
    if(depth===0){ return html.slice(start, m.index+m[0].length); }
    if(m.index-start > 900000) break;
  }
  return null;
}

export function classesIn(frag){
  const set = new Set();
  for(const m of frag.matchAll(/class="([^"]*)"/g))
    for(const c of m[1].split(/\s+/)) if(/^framer-/.test(c)) set.add(c);
  return [...set];
}

export function rulesFor(classes){
  const want = new Set(classes);
  const out = [];
  // naive rule scan honoring @media blocks
  const re = /@media([^{]+)\{|([^{}@]+)\{([^{}]*)\}|\}/g;
  let media = null, depth = 0, m;
  while((m = re.exec(css))){
    if(m[0].startsWith('@media')){ media = m[1].trim(); depth = 1; continue; }
    if(m[0] === '}'){ if(depth===1){ media=null; depth=0; } continue; }
    if(m[2]){
      const sel = m[2].trim();
      const hit = [...sel.matchAll(/\.(framer-[\w-]+)/g)].some(x=>want.has(x[1]));
      if(hit) out.push((media?`@media ${media} { `:'') + sel + '{' + m[3].trim() + '}' + (media?' }':''));
    }
  }
  return out;
}
