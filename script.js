function showForm() {
  const formContainer = document.getElementById('formContainer');
  formContainer.style.display = 'block';
  formContainer.scrollIntoView({ behavior: 'smooth' });
}

function changeImage(src) {
  document.querySelector('.main-image').src = src;
}

document.getElementById('orderForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Get form data
  const name = document.getElementById('name').value;
  const address = document.getElementById('address').value;
  const cellphone = document.getElementById('cellphone').value;
  const proofImage = document.getElementById('proofImage').files[0];

  // Validate form data
  if (!name || !address || !cellphone || !proofImage) {
    alert('Please fill out all fields and upload the payment proof.');
    return;
  }

  // Create WhatsApp message
  const message = `New Order:\nName: ${name}\nAddress: ${address}\nCellphone: ${cellphone}`;
  const whatsappLink = `https://wa.me/923342610774?text=${encodeURIComponent(message)}`;

  // Open WhatsApp
  window.open(whatsappLink, '_blank');

  // Reset form
  document.getElementById('orderForm').reset();
  alert('Order submitted successfully! Please send the payment proof image on WhatsApp.');
});