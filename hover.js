// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("hover-video");

    if (video) {
        // Play the video when the mouse enters
        video.addEventListener("mouseenter", () => {
            video.play();
        });

        // Pause and reset the video when the mouse leaves
        video.addEventListener("mouseleave", () => {
            video.pause();
            video.currentTime = 0;
        });
    }
});
