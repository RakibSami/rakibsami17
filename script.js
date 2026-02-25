const hoverSound = document.getElementById('hoverSound');
const buttons = document.querySelectorAll('.btn');


function unlockAudio() {
    hoverSound.play().then(() => {
        hoverSound.pause();
        hoverSound.currentTime = 0;
    }).catch(() => {});
    
    document.removeEventListener('click', unlockAudio);
    document.removeEventListener('keydown', unlockAudio);
}


document.addEventListener('click', unlockAudio);
document.addEventListener('keydown', unlockAudio);


buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        hoverSound.currentTime = 0;
        hoverSound.play().catch(() => {});
    });
});
