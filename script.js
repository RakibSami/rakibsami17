// Hover sound setup
const hoverSound = document.getElementById('hoverSound');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        hoverSound.currentTime = 0;        
        hoverSound.play().catch(error => {
           
            console.log("Hover sound error:", error);
        });
    });

    
});