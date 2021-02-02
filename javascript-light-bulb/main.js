var $lightBulb = document.querySelector('.light-bulb');
var $lightRoom = document.querySelector('.light-on');

function lightSwitch(event) {
  if ($lightBulb.className === 'light-bulb bulb-on') {
    $lightBulb.className = 'light-bulb bulb-off';
    $lightRoom.className = 'light-off';
  } else if ($lightBulb.className === 'light-bulb bulb-off') {
    $lightBulb.className = 'light-bulb bulb-on';
    $lightRoom.className = 'light-on';
  }
}

$lightBulb.addEventListener('click', lightSwitch);
