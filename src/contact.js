const Contact = () => {
  const formCol = document.createElement('div');
  formCol.classList.add('form-col');

  const formTitle = document.createElement('h2');
  formTitle.textContent = 'Reservation & Enquiries';

  const formBox = document.createElement('form');
  formBox.classList.add('form-box');

  const fullname = document.createElement('input');
  fullname.classList.add('form-input');
  fullname.setAttribute('type', 'text');
  fullname.setAttribute('placeholder', 'What are your Full Names?');

  const contact = document.createElement('input');
  contact.classList.add('form-input');
  contact.setAttribute('type', 'text');
  contact.setAttribute('placeholder', 'How to get intouch with you?');

  const message = document.createElement('textarea');
  message.classList.add('form-textarea');
  message.setAttribute('cols', '30');
  message.setAttribute('rows', '10');
  message.setAttribute('placeholder', 'Enquire anything about our establishment and make your reservations here');

  const submitBtn = document.createElement('input');
  submitBtn.classList.add('form-submit');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.setAttribute('value', 'Submit');

  formBox.appendChild(fullname);
  formBox.appendChild(contact);
  formBox.appendChild(message);
  formBox.appendChild(submitBtn);

  formCol.appendChild(formTitle);
  formCol.appendChild(formBox);

  return formCol;
};

export default Contact;