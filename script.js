
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
if(menuBtn && nav){
  menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));
}
document.querySelectorAll('.nav-links a').forEach(link=>{
  link.addEventListener('click',()=>nav?.classList.remove('open'));
});
document.addEventListener("DOMContentLoaded", () => {
  const videos = document.querySelectorAll(".scroll-video");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const video = entry.target;
      if (entry.isIntersecting) {
        if (video.dataset.src && !video.src) {
          video.src = video.dataset.src;
          video.load();
        }
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, { threshold: 0.5 });
  videos.forEach((video) => observer.observe(video));
});
