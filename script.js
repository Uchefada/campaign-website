
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
      const badge = video.parentElement.querySelector(".sound-badge");
      if (entry.isIntersecting) {
        video.play().catch(() => {});
      } else {
        video.pause();
        video.muted = true;
        if (badge) badge.textContent = "🔇 Tap for sound";
      }
    });
  }, { threshold: 0.5 });

  videos.forEach((video) => {
    observer.observe(video);

    // Create a clean floating sound badge inside .video-frame
    const frame = video.parentElement;
    frame.style.position = "relative";

    const badge = document.createElement("button");
    badge.type = "button";
    badge.className = "sound-badge";
    badge.textContent = "🔇 Tap for sound";
    badge.style.cssText = "position:absolute;bottom:12px;right:12px;z-index:10;background:rgba(0,0,0,0.72);color:#fff;border:none;border-radius:999px;padding:6px 12px;font-size:12px;font-weight:600;cursor:pointer;";
    frame.appendChild(badge);

    const toggleSound = (e) => {
      e.stopPropagation();
      videos.forEach((v) => {
        if (v !== video) {
          v.muted = true;
          const b = v.parentElement.querySelector(".sound-badge");
          if (b) b.textContent = "🔇 Tap for sound";
        }
      });
      video.muted = !video.muted;
      badge.textContent = video.muted ? "🔇 Tap for sound" : "🔊 Sound on";
      video.play().catch(() => {});
    };

    badge.addEventListener("click", toggleSound);
    video.addEventListener("click", toggleSound);
  });
});
