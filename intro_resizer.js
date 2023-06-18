// Resize introduciton text boxes to maintain proportion
window.addEventListener('resize', function() {
    var sourceElement = document.getElementById('tagline');
    var targetElementOne = document.getElementById('introduction_1');
    var targetElementTwo = document.getElementById('introduction_2');
    
    var sourceWidth = sourceElement.offsetWidth;
    targetElementOne.style.maxWidth = sourceWidth + 'px';
    targetElementTwo.style.maxWidth = sourceWidth + 'px';
  });