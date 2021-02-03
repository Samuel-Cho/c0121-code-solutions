var $contactForm = document.querySelector('#contact-form');

function submitForm(event) {
  event.preventDefault();
  var messageData = {};
  messageData.name = $contactForm.elements.name.value;
  messageData.email = $contactForm.elements.email.value;
  messageData.message = $contactForm.elements.message.value;
  console.log('messageData:', messageData);
  $contactForm.reset();
}

$contactForm.addEventListener('submit', submitForm);
