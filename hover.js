
const video = document.getElementById('hover-video');

video.addEventListener('mouseover', () => {
    video.play(); // Play the video on hover
});

video.addEventListener('mouseout', () => {
    video.pause(); // Pause the video when the mouse leaves
    video.currentTime = 0; // Reset to the start for a seamless loop
});
