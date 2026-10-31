'use strict';
const papers = window.PORTFOLIO.papers;
const profile = window.PROFILE || {photo:''};
const {projects, media:projectMedia, videos:projectVideos} = window.PROJECT_CATALOGUE;
const escapeHTML = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let activeMedia = null;

function heading(text){return `<div class="section-heading"><h2>${text}</h2></div>`}
function selectedPaperHTML(p){
 return `<article class="selected-paper" id="selected-${p.id}"><a class="paper-figure" href="${p.pdf}" target="_blank" rel="noopener" aria-label="Read PDF: ${escapeHTML(p.title)}"><img src="assets/${p.id}-figure.png" alt="Figure from ${escapeHTML(p.title)}" width="640" height="320" loading="lazy" decoding="async"></a><div class="paper-description"><h3><button class="title-button" data-paper="${p.id}">${escapeHTML(p.title)}</button></h3><p class="paper-meta">Unpublished manuscript · ${p.year}</p><p class="paper-summary">${escapeHTML(p.display_summary)}</p><div class="paper-links"><a href="${p.pdf}" target="_blank" rel="noopener">[PDF]</a><button data-paper="${p.id}">[Research note]</button></div></div></article>`;
}
function caseStudyHTML(p){
 return p.caseStudy.map(s=>`<section class="case-study-section"><h4>${escapeHTML(s.heading)}</h4>${(s.paragraphs||[]).map(text=>`<p>${escapeHTML(text)}</p>`).join('')}${s.bullets?`<ul>${s.bullets.map(text=>`<li>${escapeHTML(text)}</li>`).join('')}</ul>`:''}</section>`).join('');
}
function mediaType(m){
 const kind=(m.kind||'').toLowerCase();
 if(/photograph|documentary frame|practice.*frame/.test(kind))return 'photo';
 if(/solidworks|cad/.test(kind))return 'cad';
 if(/screenshot|implementation/.test(kind))return 'screen';
 return 'figure';
}
// Project-specific ordering keeps photographs, simulations and diagrams together.
// Stable asset names allow homepage previews to retain their original selections.
const GALLERY_GROUPS = {
 "b1k": [{"title":"Simulation scenes","images":["b1k-organizing_art_supplies-action.webp","honey-kitchen.webp","rose-grasp.webp","storage-navigation.webp","dish-scene.webp","b1k-installing_a_modem-action.webp","rose-placement.webp","honey-counter.webp","b1k-organizing_art_supplies-final.webp","b1k-installing_a_modem-scene.webp"]},{"title":"Perception & environment","images":["behavior-perception.webp","behavior-map.webp"]},{"title":"Evaluation & analysis","images":["behavior-matched.webp","behavior-training.webp","paired-analysis.webp","task-planning.webp","pose-report.webp"]}],
 "policy-inference": [{"title":"Benchmark results","images":["policy-benchmark.webp","backend-selection.webp","precision-tradeoff.webp","native-action-replay.webp","held-input-comparison.webp"]}],
 "observation-alignment": [{"title":"Camera timing","images":["camera-update-age.webp","camera-cadence.webp","camera-interval-tails.webp","camera-temporal-variation.webp","camera-save-association.webp"]},{"title":"Image–joint alignment","images":["pairing-improvement.webp","image-joint-pairing.webp","pairing-budgets.webp"]}],
 "deployment": [{"title":"Robot hardware","images":["arm-bench.webp"]},{"title":"Motion & feedback","images":["arm-paths.webp","arm-joint-tracking.webp","arm-motion-english.webp","arm-drive-english.webp","arm-x-fk-profile.webp"]}],
 "platform2025": [{"title":"Prototype photograph","images":["land-air-prototype-original.svg"]},{"title":"CAD design","images":["uav-055.webp","uav-052.webp","platform-assembly-view.webp","platform-rear-connector.webp","platform-frame-plate.webp","platform-wheel-rim.webp","platform-exploded-mechanism.webp","platform-integrated-model.webp"]},{"title":"Simulation","images":["uav-068.webp"]},{"title":"System design","images":["platform-control-architecture.webp"]}],
 "biomechanics": [{"title":"Motion capture","images":["opensim-008.webp","opensim-marker-view.webp"]},{"title":"OpenSim model","images":["opensim-020.webp","opensim-013.webp","opensim-joint-controls.webp","opensim-scale-tool-settings.webp"]},{"title":"Analysis results","images":["opensim-028.webp","opensim-027.webp","biomechanics-height-association.webp","biomechanics-free-leg-association.webp","biomechanics-angular-velocity.webp"]}],
 "learning": [{"title":"Learning · workflow","images":["ppo-pipeline.webp"]},{"title":"Learning · results","images":["ppo-results.webp","ppo-training.webp"]},{"title":"Coursework · robot simulations","images":["robot-sim-038.webp","robot-sim-007.webp","robot-sim-040.webp","kr5-placement.webp","kr5-side-view.webp","coordinated-arm-course-simulation.webp"]},{"title":"Coursework · models & workspace","images":["sawyer-ellipsoid.webp","sawyer-kinematic-chain.webp","scara-workspace-english.png","scara-workspace-volume.webp"]},{"title":"Coursework · trajectories","images":["robot-joint-profiles-english.svg","robot-end-effector-path.webp","robot-placement-joint-profiles.webp","scara-grasper-path.webp","scara-velocity-comparison.webp"]},{"title":"Coursework · implementation","images":["scara-simulink-model.webp"]}],
 "navigation": [{"title":"Prototype & track tests","images":["car-048.webp","car-061.webp","car-062.webp","mobile-track.webp","mobile-line-test.webp"]},{"title":"System & control diagrams","images":["mobile-architecture.webp","vehicle-control-flow.webp"]},{"title":"Circuit examples","images":["car-053.webp","vehicle-line-sensor-circuit.webp","vehicle-obstacle-sensor-circuit.webp"]},{"title":"Test results","images":["vehicle-pid-results.webp"]}],
 "thermoelectric": [{"title":"Vehicle assembly","images":["vehicle-assembly.webp"]},{"title":"Cam steering","images":["cam-profile-design.webp","steering-cam.webp","steering-adjustment.webp"]},{"title":"Energy & drive","images":["thermoelectric-module.webp","transmission-gear.webp"]}],
 "butterfly": [{"title":"Prototype photographs","images":["butterfly-026.webp","butterfly-004.webp","butterfly-012.webp","butterfly-018.webp","butterfly-wing-view.webp","butterfly-drive-view.webp","butterfly-battery-pack.webp"]},{"title":"Electronics & control","images":["butterfly-charger-schematic.webp","butterfly-servo-signals.webp"]},{"title":"Wing analysis","images":["butterfly-011.webp"]}],
 "aloha": [{"title":"Practice photographs","images":["aloha-hardware-clear.webp","aloha-xiongyule-practice.webp","aloha-workstation.webp","aloha-workbench.webp","bimanual-team-workstation.webp","bimanual-setup-session.webp"]}],
};
function galleryGroups(id){
 const media=projectMedia[id]||[], selected=new Set();
 const groups=(GALLERY_GROUPS[id]||[]).map(g=>{
  const indices=g.images.map(name=>media.findIndex(m=>m.src.split('/').pop()===name))
   .filter(i=>i>=0&&!selected.has(i)&&selected.add(i));
  return {title:g.title,indices};
 }).filter(g=>g.indices.length);
 const remaining=media.map((_,i)=>i).filter(i=>!selected.has(i));
 if(remaining.length)groups.push({title:'Additional materials',indices:remaining});
 return groups;
}
function galleryOrder(id){return galleryGroups(id).flatMap(group=>group.indices)}
function galleryHTML(p){
 const media=projectMedia[p.id]||[], groups=galleryGroups(p.id);
 return `<div class="project-gallery-groups">${groups.map(group=>`<section class="gallery-section" aria-label="${escapeHTML(group.title)}">${groups.length>1?`<h4>${escapeHTML(group.title)}</h4>`:''}<div class="project-gallery">${group.indices.map(i=>`<figure>${mediaButton(p,media[i],i)}</figure>`).join('')}</div></section>`).join('')}</div>`;
}
function mediaButton(p,m,i,priority=false){
 const position=galleryOrder(p.id).indexOf(i)+1;
 return `<button class="project-image-button" data-image-state="loading" data-media-type="${mediaType(m)}" data-project-media="${p.id}" data-media-index="${i}" aria-label="View image ${position}: ${escapeHTML(m.caption)}" aria-haspopup="dialog"><img src="${escapeHTML(m.thumb)}" data-thumbnail="${escapeHTML(m.thumb)}" data-full-image="${escapeHTML(m.src)}" alt="${escapeHTML(m.caption)}" width="${m.width}" height="${m.height}" loading="${priority?'eager':'lazy'}"${priority?' fetchpriority="high"':''} decoding="async"></button>`;
}
function projectHTML(p){
 const media=projectMedia[p.id]||[], cover=media[0], videos=projectVideos[p.id]||[];
 const preview=media.length>1?`<div class="project-preview-strip" aria-label="Project image previews">${media.slice(1,4).map((m,i)=>mediaButton(p,m,i+1)).join('')}</div>`:'';
 const metrics=p.metrics?`<dl class="project-metrics">${p.metrics.map(m=>`<div><dt>${escapeHTML(m.value)}</dt><dd>${escapeHTML(m.label)}</dd></div>`).join('')}</dl>`:'';
 return `<article class="project-item" id="project-${p.id}"><div class="project-layout"><figure class="project-cover">${mediaButton(p,cover,0,p===projects[0])}${preview}</figure><div class="project-copy"><div class="project-heading"><h3>${escapeHTML(p.name)}</h3><span class="date">${escapeHTML(p.date)}</span></div><p class="project-affiliation">${escapeHTML(p.org)} · ${escapeHTML(p.context)}</p><p class="project-summary">${escapeHTML(p.summary)}</p><p class="project-contribution"><strong>My work:</strong> ${escapeHTML(p.contribution)}</p><p class="project-result"><strong>Result:</strong> ${escapeHTML(p.result)}</p><details><summary>Contributions, results & images (${media.length})</summary><div class="project-details">${metrics}${caseStudyHTML(p)}<p class="methods">${p.steps.map(escapeHTML).join(' · ')}</p>${p.id==='b1k'?'<p class="source-link"><a href="https://behavior.stanford.edu/challenge/evaluation.html" target="_blank" rel="noopener">BEHAVIOR evaluation and score definition ↗</a></p>':''}</div>${galleryHTML(p)}${videos.length?`<div class="project-videos">${videos.map(v=>`<figure><video controls playsinline preload="none" poster="${v.poster}" aria-label="${v.title}"><source src="${v.src}" type="video/mp4">Your browser does not support embedded video.</video><figcaption>${v.title}</figcaption></figure>`).join('')}</div>`:''}</details></div></div></article>`;
}
function openProjectMedia(id,index=0,previewSrc=null){
 const media=projectMedia[id], project=projects.find(p=>p.id===id);if(!media||!project)return;
 index=(Number(index)+media.length)%media.length;activeMedia={id,index};
 const item=media[index],dialog=document.getElementById('paper-dialog'),position=galleryOrder(id).indexOf(index)+1;
 dialog.innerHTML=`<div class="dialog-body media-dialog"><button class="close-dialog" data-close aria-label="Close project image">×</button><p class="eyebrow">${escapeHTML(item.kind)} · ${position} / ${media.length}</p><h2 id="dialog-title">${escapeHTML(project.name)}</h2><figure class="media-figure"><img src="${escapeHTML(previewSrc||item.thumb)}" alt="${escapeHTML(item.caption)}" width="${item.width}" height="${item.height}"><figcaption>${escapeHTML(item.caption)}</figcaption></figure><div class="media-navigation"><button class="button outline" data-media-step="-1" aria-label="Previous project image">← Previous</button><a href="${escapeHTML(item.src)}" target="_blank" rel="noopener">Open image ↗</a><button class="button outline" data-media-step="1" aria-label="Next project image">Next →</button></div></div>`;
 const displayed=dialog.querySelector('.media-figure img');
 if(item.src!==item.thumb){const full=new Image();full.onload=()=>{if(displayed.isConnected&&activeMedia?.id===id&&activeMedia?.index===index)displayed.src=item.src};full.src=item.src}
 if(!dialog.open){dialog.showModal();document.body.style.overflow='hidden'}else dialog.querySelector('[data-media-step="1"]').focus({preventScroll:true});
}
function stepProjectMedia(step){
 if(!activeMedia)return;
 const {id,index}=activeMedia,order=galleryOrder(id),position=order.indexOf(index);
 openProjectMedia(id,order[(position+step+order.length)%order.length]);
}
function educationHTML(){
 return `<article class="experience-item"><div class="date">SEP 2023 — JUL 2027<br>(Expected)</div><div><h3>Beijing Jiaotong University</h3><div class="role">Bachelor of Engineering in Mechatronics Engineering</div><p>Beijing, China · GPA 3.67/4.0 (88.2/100)</p><p>Relevant coursework: Artificial Intelligence; Robotics and Flexible Automation; Control Theory; Embedded Systems; Signals and Systems; Intelligent Mechatronic System Design.</p></div></article>`;
}
function experienceHTML(){
 const items=[
 ['AUG 2026 — PRESENT','Anyverse Technology Co., Ltd.','Software Engineer Intern — Embodied AI','C++ motion control and trajectory planning for a 7-DoF arm; PyTorch/TensorRT policy inference; more than 30 C++/Python SDK interfaces; camera–joint pairing; automated BEHAVIOR task execution and feedback-driven iteration.'],
 ['JAN — MAR 2026','Chongqing Xingshijie Co., Ltd.','Human Biomechanics & Embodied Simulation Intern','OpenSim musculoskeletal models, human-motion data processing, and joint-force, load and kinematic analysis for human-motion understanding and embodied simulation.'],
 ['JUL — AUG 2024','Csoft','Robot Learning and Manipulation Intern','ROS/Ubuntu ALOHA bimanual teleoperation, joint-state feedback, calibration, demonstration execution and hardware–software synchronisation debugging.']];
 return items.map(x=>`<article class="experience-item"><div class="date">${x[0]}</div><div><h3>${x[1]}</h3><div class="role">${x[2]}</div><p>${x[3]}</p></div></article>`).join('');
}
function render(){
 document.documentElement.lang='en';document.title='Xiongyule Zhou | Robotics & Learning';
 document.getElementById('site').innerHTML=`
 <header class="header"><div class="page-width header-inner"><nav aria-label="Main navigation"><a href="#projects">Projects</a><a href="#selected">Research</a><a href="#education">Education</a><a href="#experience">Experience</a><a href="#awards">Honors</a></nav></div></header>
 <main id="main" class="page-width"><section id="about" class="profile"><div class="profile-copy"><h1>Xiongyule Zhou</h1><p class="profile-role">Mechatronics Engineering · Beijing Jiaotong University<br>B.Eng., expected 2027 <span class="profile-credentials">GPA 3.67/4.0 · IELTS 7.5</span></p><p class="profile-intro">I work on <strong>robot learning, visual manipulation and reliable robot systems</strong>. Currently, I am an embodied AI software engineering intern at <a href="#experience">Anyverse Technology</a>, developing robot control, policy inference and task-automation workflows.</p><div class="profile-links"><a href="assets/Xiongyule_Zhou_CV.pdf" target="_blank" rel="noopener">Curriculum vitae</a><span>/</span><a href="mailto:jensenzhou47@gmail.com">Email</a><span>/</span><a href="#selected">Selected research</a></div></div><figure class="profile-photo"><img src="${escapeHTML(profile.photo||'assets/portrait-placeholder.svg')}" alt="Portrait of Xiongyule Zhou" width="240" height="300" fetchpriority="high" decoding="async"></figure></section>
 <section id="projects" class="academic-section projects-first">${heading('Selected engineering projects')}<p class="section-intro">Robot learning, manipulation and control — from implementation to measured results.</p><div id="internship-projects" class="projects-list">${projects.map(projectHTML).join('')}</div></section>
 <section id="selected" class="academic-section">${heading('Selected research manuscripts')}<div class="selected-list">${papers.map(selectedPaperHTML).join('')}</div><details class="manuscript-status"><summary>Manuscript status</summary><p>These are unpublished retrospective studies. Original PDFs are unchanged; author metadata remains pending final confirmation.</p></details></section>
 <section id="education" class="academic-section">${heading('Education')}<div class="timeline">${educationHTML()}</div></section>
 <section id="experience" class="academic-section">${heading('Experience')}<div class="timeline">${experienceHTML()}</div></section>
 <section id="awards" class="academic-section">${heading('Honors & awards')}${awardRows()}</section>
 <section id="skills" class="academic-section supplementary"><div>${heading('Methods & tools')}<p><strong>Programming:</strong> Python · C / C++ · MATLAB</p><p><strong>Robotics:</strong> ROS / ROS 2 · STM32 · PID · FK / IK</p><p><strong>Learning & perception:</strong> PyTorch · TensorRT · OpenCV · DINOv2</p><p><strong>Simulation:</strong> Isaac Sim / Lab · MuJoCo · Simulink · OpenSim · SolidWorks</p></div><div>${heading('Beyond research')}<p>I captain the School of Mechanical Engineering basketball team and helped lead the team to a top-four university finish. I also worked on campus photography and video production as a deputy director at the University Arts Center.</p></div></section>
 <footer id="contact"><p><a href="mailto:jensenzhou47@gmail.com">jensenzhou47@gmail.com</a><span> · </span><a href="assets/Xiongyule_Zhou_CV.pdf" target="_blank" rel="noopener">CV</a><span> · </span><a href="#about">Back to top</a></p><p>© 2026 Xiongyule Zhou · Updated October 2026</p></footer></main>`;
}
function awardRows(){
 const awards=[
 {year:2026,order:1,date:'2025–26<br>2024–25',name:'Academic Excellence Scholarship',detail:'Beijing Jiaotong University'},
 {year:2026,order:2,date:'2025–26<br>2024–25',name:'Scholarship for Outstanding Social Work',detail:'Beijing Jiaotong University'},
 {year:2025,order:1,date:'2025',name:'Mechanical Innovation Competition · Third Prize',detail:'Provincial-level competition · Beijing Jiaotong University'},
 {year:2025,order:2,date:'2025',name:'Campus Vocabulary Competition',detail:'Beijing Jiaotong University'},
 {year:2025,order:3,date:'MAR 2025',name:'Second Prize, Beijing College Students Engineering Practice and Innovation Competition',detail:'Thermoelectric vehicle event'},
 {year:2024,order:1,date:'2023–24',name:'Sports Activity Scholarship',detail:'Beijing Jiaotong University'}
 ];
 return awards.sort((a,b)=>b.year-a.year||a.order-b.order).map(a=>`<article class="award-row"><span class="date">${a.date}</span><div><h3>${a.name}</h3><p>${a.detail}${a.certificate?` <a href="${a.certificate}" target="_blank" rel="noopener">[Certificate]</a>`:''}</p></div></article>`).join('');
}

function openPaper(id){
 activeMedia=null;const p=papers.find(x=>x.id===id);if(!p)return;
 const dialog=document.getElementById('paper-dialog');
 dialog.innerHTML=`<div class="dialog-body"><button class="close-dialog" data-close aria-label="Close research note">×</button><div class="eyebrow">${p.id.toUpperCase()} / ${p.type==='review'?'Critical review':'Empirical / methods'} / ${p.pages} PAGES</div><h2 id="dialog-title">${escapeHTML(p.title)}</h2><div class="dialog-status">Unpublished manuscript · 2026</div>${[['Research question & approach',p.summary],['Evidence & contribution',p.finding],['Interpretation & limitations',p.limit]].map(([h,b])=>`<section class="dialog-part"><h3>${h}</h3><p>${escapeHTML(b)}</p></section>`).join('')}<div class="dialog-actions"><a class="button" href="${p.pdf}" target="_blank" rel="noopener">Read PDF ↗</a>${p.tables?`<a class="button outline" href="${p.tables}" target="_blank" rel="noopener">Main Tables I–III ↗</a>`:''}<button class="button outline" data-reference="${p.id}">Copy reference</button></div><p class="author-note">The supplied manuscript retains author metadata pending final confirmation. The PDF is provided unchanged.</p></div>`;
 if(!dialog.open)dialog.showModal();document.body.style.overflow='hidden';
}
function toast(message){const e=document.getElementById('toast');e.textContent=message;e.classList.add('show');setTimeout(()=>e.classList.remove('show'),2500)}
async function copyReference(id){
 const p=papers.find(x=>x.id===id),reference=`${p.title}. (2026). Unpublished research manuscript. ${new URL(p.pdf,location.href).href}`;
 try{await navigator.clipboard.writeText(reference);toast('Reference copied')}catch{const input=document.createElement('textarea');input.value=reference;input.style.position='fixed';input.style.opacity='0';document.getElementById('paper-dialog').append(input);input.select();const ok=document.execCommand('copy');input.remove();toast(ok?'Reference copied':'Copy is unavailable in this browser')}
}
function retryProjectImage(img,manual=false){
 const button=img.closest('.project-image-button');if(!button)return;
 const previous=manual?0:Number(img.dataset.attempts||0);
 if(previous>=2){button.dataset.imageState='error';return}
 const attempt=previous+1;img.dataset.attempts=String(attempt);button.dataset.imageState='loading';
 const source=attempt===2?img.dataset.fullImage:img.dataset.thumbnail;
 const url=new URL(source,document.baseURI);url.searchParams.set('image_retry',String(attempt));
 setTimeout(()=>{if(img.isConnected&&img.dataset.attempts===String(attempt))img.src=url.href},attempt*400);
}
document.addEventListener('load',e=>{
 const img=e.target;if(!(img instanceof HTMLImageElement))return;
 const button=img.closest('.project-image-button');if(button){button.dataset.imageState='ready';delete img.dataset.attempts}
},true);
document.addEventListener('error',e=>{
 const img=e.target;if(img instanceof HTMLImageElement&&img.matches('.project-image-button img'))retryProjectImage(img);
},true);
document.addEventListener('click',e=>{
 const b=e.target.closest('[data-paper],[data-close],[data-reference],[data-project-media],[data-media-step]');if(!b)return;
 if(b.dataset.projectMedia&&b.dataset.imageState==='error'){retryProjectImage(b.querySelector('img'),true);return}
 if(b.dataset.projectMedia)openProjectMedia(b.dataset.projectMedia,b.dataset.mediaIndex,b.querySelector('img')?.currentSrc||null);
 if(b.dataset.mediaStep&&activeMedia)stepProjectMedia(Number(b.dataset.mediaStep));
 if(b.dataset.paper)openPaper(b.dataset.paper);
 if(b.hasAttribute('data-close'))document.getElementById('paper-dialog').close();
 if(b.dataset.reference)copyReference(b.dataset.reference);
});
const dialog=document.getElementById('paper-dialog');
dialog.addEventListener('close',()=>{document.body.style.overflow='';activeMedia=null});
dialog.addEventListener('keydown',e=>{if(activeMedia&&(e.key==='ArrowLeft'||e.key==='ArrowRight')){e.preventDefault();stepProjectMedia(e.key==='ArrowRight'?1:-1)}});
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
document.addEventListener('toggle',e=>{if(!e.target.matches?.('details'))return;if(e.target.open)e.target.querySelectorAll('.project-gallery img').forEach(img=>{img.loading='eager'});else e.target.querySelectorAll('video').forEach(v=>v.pause())},true);
render();
const coverImages=document.querySelectorAll('.project-cover img');
if('IntersectionObserver' in window){
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.loading='eager';observer.unobserve(entry.target)}}),{rootMargin:'1800px 0px'});
 coverImages.forEach(img=>observer.observe(img));
}else coverImages.forEach(img=>{img.loading='eager'});
document.querySelectorAll('.project-image-button img').forEach(img=>{if(img.complete&&img.naturalWidth>0)img.closest('.project-image-button').dataset.imageState='ready'});
