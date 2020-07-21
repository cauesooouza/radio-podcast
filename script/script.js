var radioFrequency = document.querySelector('#radioFrequency');
var radioRange = document.querySelector('#radioRange');
var radioPodcast = document.querySelector('.radioPodcast');

function start() {
  //adiciona um ouvidor de evento ao mudar o input range
  radioRange.addEventListener('input', handleRangeValueChange);
}

function handleRangeValueChange(event) {
  //  pega o valor alterado do input range(sintonia) 
  //  e mostra no input text(display)
  let currentFrequency = event.target.value;
  radioFrequency.value = currentFrequency;

  // busca pelo podcast
  findPodcastFrom(currentFrequency);
}

function findPodcastFrom(frequency) {

  var foundPodcast = null;

  for (var i = 0; i < realPodscast.length; i++) {
    var currentPodcast = realPodscast[i];

    if (currentPodcast.id === frequency) {
      foundPodcast = currentPodcast;
      break;
    }
  }
  if (foundPodcast) {
    renderPodcast(foundPodcast);
  }
  else {
    radioPodcast.innerHTML = '<p>Nenhum podcast encontrado!</p>';
  }
}

function renderPodcast(podcast) {
  radioPodcast.innerHTML = '';

  var img = document.createElement('img');
  img.src = './img/' + podcast.img;

  var title = document.createElement('h2');
  title.textContent = podcast.title;

  var description = document.createElement('p');
  description.textContent = podcast.description;

  radioPodcast.appendChild(title);
  radioPodcast.appendChild(img);
  radioPodcast.appendChild(description);
}

start();