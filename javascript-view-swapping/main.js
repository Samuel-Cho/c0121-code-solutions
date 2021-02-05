var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

function clickTab(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tab.length; i++) {
      if ($tab[i] === event.target) {
        $tab[i].className = 'tab active';
      } else {
        $tab[i].className = 'tab';
      }
    }

    var targetDataView = event.target.getAttribute('data-view');
    for (var j = 0; j < $view.length; j++) {
      if (targetDataView === $view[j].getAttribute('data-view')) {
        $view[j].className = 'view';
      } else {
        $view[j].className = 'view hidden';
      }
    }
  }
}

$tabContainer.addEventListener('click', clickTab);
