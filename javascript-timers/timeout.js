var $h1 = document.querySelector('h1');

function changeHeading() {
  $h1.textContent = 'Hello There';
}

setTimeout(changeHeading, 2 * 1000);
