$(document).ready(function() {
$("#CustomModal").modal();
});

const customModal = document.getElementById('customModal')
const customInput = document.getElementById('customInput')

customModal.addEventListener('shown.bs.modal', () => {
customInput.focus()
})
