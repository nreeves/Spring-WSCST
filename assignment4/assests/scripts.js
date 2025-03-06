document.getElementById('reserveTableButton').addEventListener('click', function () {
    const reserveTableModal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
    reserveTableModal.show();
});

document.getElementById('loginLink').addEventListener('click', function () {
    const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
    loginModal.show();
});