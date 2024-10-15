// Reproduz som ao pressionar uma tecla do teclado
document.body.addEventListener('keyup', (event) => {
  playSound(event.code.toLocaleLowerCase());
});

// Reproduz som ao clicar no botão
document.querySelector('.composer button').addEventListener('click', () => {
  let song = document.querySelector('#input').value;

  if (song !== '') {
    let songArray = song.split('');
    playComposition(songArray);
  }
});

// Reproduz som ao clicar em uma tecla (div) com o mouse
document.querySelectorAll('.key').forEach((key) => {
  key.addEventListener('click', () => {
    let keyCode = key.getAttribute('data-key');
    playSound(keyCode);
  });
});

// Função que toca o som correspondente à tecla pressionada ou clicada
function playSound(sound) {
  let audioElement = document.querySelector(`#s_${sound}`);
  let keyElement = document.querySelector(`div[data-key="${sound}"]`);

  if (audioElement) {
    audioElement.currentTime = 0;
    audioElement.play();
  }

  if (keyElement) {
    keyElement.classList.add('active');

    setTimeout(() => {
      keyElement.classList.remove('active');
    }, 100);
  }
}

// Função que toca uma composição (sequência de sons)
function playComposition(songArray) {
  let wait = 0;

  for (let songItem of songArray) {
    setTimeout(() => {
      playSound(`key${songItem}`);
    }, wait);

    wait += 250;
  }
}
