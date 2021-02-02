var numTimesClicked = 0;
var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

function buttonClicked(event) {
  numTimesClicked++;
  $clickCount.textContent = 'Clicks: ' + numTimesClicked;
  if (numTimesClicked >= 4 && numTimesClicked < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (numTimesClicked >= 7 && numTimesClicked < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (numTimesClicked >= 10 && numTimesClicked < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (numTimesClicked >= 13 && numTimesClicked < 16) {
    $hotButton.className = 'hot-button hot';
  } else if (numTimesClicked >= 16) {
    $hotButton.className = 'hot-button nuclear';
  }
}

$hotButton.addEventListener('click', buttonClicked);
