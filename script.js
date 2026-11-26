
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
        video.play().catch(() => {});
      } else {
        video.pause();
        video.muted = true; // Re-mutes when scrolled away so sound doesn't overlap
      }
    });
  }, { threshold: 0.5 });

  videos.forEach((video) => {
    observer.observe(video);

    // Tap anywhere on the video to unmute/mute
    video.style.cursor = "pointer";
    video.addEventListener("click", () => {
      // Mute any other playing video first
      videos.forEach((v) => { if (v !== video) v.muted = true; });
      video.muted = !video.muted;
      video.play().catch(() => {});
    });
  });
});
