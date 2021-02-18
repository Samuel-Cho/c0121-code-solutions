var imgList = [
  'images/001.png',
  'images/004.png',
  'images/007.png',
  'images/025.png',
  'images/039.png'
];

var dotIndex = 0;

var $chevronContainer = document.querySelector('.chevron-container');
var $dotContainer = document.querySelector('.dot-container');
var $faCircle = document.querySelectorAll('.fa-circle');
var $picture = document.querySelector('.picture');

var intervalID = null;
intervalID = setInterval(rotateCarousel, 3000);

$chevronContainer.addEventListener('click', function (event) {
  if (event.target.matches('i')) {
    clearInterval(intervalID);
    if (event.target.className === 'fas fa-chevron-right') {
      if (dotIndex === 4) {
        dotIndex = 0;
        $picture.setAttribute('src', imgList[dotIndex]);
        $faCircle[4].className = 'far fa-circle';
        $faCircle[0].className = 'fas fa-circle';
      } else {
        dotIndex++;
        $picture.setAttribute('src', imgList[dotIndex]);
        $faCircle[dotIndex].className = 'fas fa-circle';
        $faCircle[dotIndex - 1].className = 'far fa-circle';
      }
    } else if (event.target.className === 'fas fa-chevron-left') {
      if (dotIndex === 0) {
        dotIndex = 4;
        $picture.setAttribute('src', imgList[dotIndex]);
        $faCircle[0].className = 'far fa-circle';
        $faCircle[4].className = 'fas fa-circle';
      } else {
        dotIndex--;
        $picture.setAttribute('src', imgList[dotIndex]);
        $faCircle[dotIndex].className = 'fas fa-circle';
        $faCircle[dotIndex + 1].className = 'far fa-circle';
      }
    }
    intervalID = setInterval(rotateCarousel, 3000);
  }
});

$dotContainer.addEventListener('click', function (event) {
  if (event.target.matches('i')) {
    clearInterval(intervalID);
    for (var i in $faCircle) {
      if ($faCircle[i] === event.target) {
        event.target.className = 'fas fa-circle';
        dotIndex = Number(i);
        $picture.setAttribute('src', imgList[dotIndex]);
      } else {
        $faCircle[i].className = 'far fa-circle';
      }
    }
    intervalID = setInterval(rotateCarousel, 3000);
  }
});

function rotateCarousel() {
  if (dotIndex === 4) {
    dotIndex = 0;
    $picture.setAttribute('src', imgList[dotIndex]);
    $faCircle[4].className = 'far fa-circle';
    $faCircle[0].className = 'fas fa-circle';
  } else {
    dotIndex++;
    $picture.setAttribute('src', imgList[dotIndex]);
    $faCircle[dotIndex].className = 'fas fa-circle';
    $faCircle[dotIndex - 1].className = 'far fa-circle';
  }
}
