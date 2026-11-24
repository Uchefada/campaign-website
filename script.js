
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
if(menuBtn && nav){
  menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));
}
document.querySelectorAll('.nav-links a').forEach(link=>{
  link.addEventListener('click',()=>nav?.classList.remove('open'));
});
