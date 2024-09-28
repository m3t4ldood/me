document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.sound-btn');
  const sound = document.getElementById('sound');

  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const soundName = button.dataset.sound;
      const soundPath = `sounds/${soundName}.wav`; // Path to your sound files
      sound.src = soundPath;
      sound.play();
    });
  });
});
