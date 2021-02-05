var $span = document.querySelectorAll('span');
var i = 0;

function keyPress(event) {
  if (i < $span.length) {
    if ($span[i].textContent === event.key) {
      $span[i].className = 'correct';
      i++;
      if (i < $span.length) {
        $span[i].className = 'default position';
      }
    } else {
      $span[i].className = 'incorrect position';
    }
  }
}

document.addEventListener('keydown', keyPress);
