document.addEventListener('DOMContentLoaded', function() {
    // Login Modal
    const loginLink = document.getElementById('loginLink');
    const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
    
    if (loginLink) {
        loginLink.addEventListener('click', function(event) {
            event.preventDefault();
            loginModal.show();
        });
    }

    // Reserve Table Modal
    const reserveTableButton = document.getElementById('reserveTableButton');
    if (reserveTableButton) {
        const reserveTableModal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
        
        reserveTableButton.addEventListener('click', function() {
            reserveTableModal.show();
        });
    }
});
