// Erzeugt die PWA-Icons (Sternen-Netz-Motiv) als PNG, ohne externe Abhängigkeiten.
const zlib = require('zlib');
const fs = require('fs');

function crc32(buf){
  let c = ~0;
  for(let i=0;i<buf.length;i++){
    c ^= buf[i];
    for(let k=0;k<8;k++) c = (c>>>1) ^ (0xEDB88320 & -(c&1));
  }
  return (~c)>>>0;
}
function chunk(type, data){
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length,0);
  const t = Buffer.from(type,'ascii');
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([t,data])),0);
  return Buffer.concat([len,t,data,crc]);
}
function png(S, rgba){
  const sig = Buffer.from([137,80,78,71,13,10,26,10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(S,0); ihdr.writeUInt32BE(S,4);
  ihdr[8]=8; ihdr[9]=6; // 8-bit, RGBA
  const stride = S*4;
  const raw = Buffer.alloc((stride+1)*S);
  for(let y=0;y<S;y++){ raw[y*(stride+1)]=0; rgba.copy(raw, y*(stride+1)+1, y*stride, y*stride+stride); }
  const idat = zlib.deflateSync(raw,{level:9});
  return Buffer.concat([sig, chunk('IHDR',ihdr), chunk('IDAT',idat), chunk('IEND',Buffer.alloc(0))]);
}
function distSeg(px,py,ax,ay,bx,by){
  const dx=bx-ax, dy=by-ay, l2=dx*dx+dy*dy;
  let t = l2 ? ((px-ax)*dx+(py-ay)*dy)/l2 : 0; t=Math.max(0,Math.min(1,t));
  return Math.hypot(px-(ax+t*dx), py-(ay+t*dy));
}
function render(S){
  const buf = Buffer.alloc(S*S*4);
  const cx=S/2, cy=S/2;
  const palette=[[79,140,255],[176,124,255],[61,220,151],[255,179,64],[255,111,174],[90,209,230]];
  const sats=[]; const N=6;
  for(let i=0;i<N;i++){
    const a=i/N*Math.PI*2 + 0.4, r=S*0.30;
    sats.push({x:cx+Math.cos(a)*r, y:cy+Math.sin(a)*r, col:palette[i%palette.length]});
  }
  for(let y=0;y<S;y++) for(let x=0;x<S;x++){
    let r=2,g=3,b=10;                                   // Hintergrund #02030a
    const d=Math.hypot(x-cx,y-cy);
    const glow=Math.exp(-Math.pow(d/(S*0.20),2));       // zentraler blauer Schein
    r+=79*glow*0.9; g+=140*glow*0.9; b+=255*glow*0.9;
    for(const s of sats){                               // feine Fäden
      const ld=distSeg(x,y,cx,cy,s.x,s.y), lw=S*0.006;
      if(ld<lw){ const k=(1-ld/lw)*0.5; r+=s.col[0]*k; g+=s.col[1]*k; b+=s.col[2]*k; }
    }
    for(const s of sats){                               // Satelliten-Sterne
      const sd=Math.hypot(x-s.x,y-s.y);
      const sg=Math.exp(-Math.pow(sd/(S*0.05),2));
      r+=s.col[0]*sg; g+=s.col[1]*sg; b+=s.col[2]*sg;
      if(sd<S*0.016){ r=255;g=255;b=255; }
    }
    if(d<S*0.05){ r=255;g=255;b=255; }                  // weißer Kern
    const o=(y*S+x)*4;
    buf[o]=Math.min(255,r|0); buf[o+1]=Math.min(255,g|0); buf[o+2]=Math.min(255,b|0); buf[o+3]=255;
  }
  return buf;
}
for(const [name,S] of [['icon-192.png',192],['icon-512.png',512],['apple-touch-icon.png',180]]){
  fs.writeFileSync(name, png(S, render(S)));
  console.log('geschrieben:', name);
}
