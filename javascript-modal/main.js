var $openModalButton = document.querySelector('.open-modal-button');
var $modalButton = document.querySelector('.modal-button');
var $hiddenModal = document.querySelector('.hidden-modal');

function openModal(event) {
  if ($hiddenModal.className === 'hidden-modal close') {
    $hiddenModal.className = 'hidden-modal open';
  } else {
    $hiddenModal.className = 'hidden-modal close';
  }
}

$openModalButton.addEventListener('click', openModal);
$modalButton.addEventListener('click', openModal);
