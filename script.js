document.addEventListener('DOMContentLoaded', () => {
    const instruction = document.querySelector('.breathe-instruction');
    const circle = document.querySelector('.breathing-circle');
  
    const breatheInTime = 4000;
    const holdTime = 4000;
    const breatheOutTime = 4000;
  
    function breatheAnimation() {
      instruction.textContent = 'Breathe In...';
      circle.style.transform = 'scale(1.3)';
      setTimeout(() => {
        instruction.textContent = 'Hold...';
        circle.style.transform = 'scale(1.3)';
        setTimeout(() => {
          instruction.textContent = 'Breathe Out...';
          circle.style.transform = 'scale(0.8)';
        }, holdTime);
      }, breatheInTime);
    }
  
    setInterval(breatheAnimation, breatheInTime + holdTime + breatheOutTime);
    breatheAnimation(); // Initial run
  });
  