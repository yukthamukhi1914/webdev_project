document.querySelector('form').addEventListener('submit', function(e) {
    const location = document.getElementById('location').value;
    const quantity = document.getElementById('quantity').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if (!location || !quantity || !name || !email || !phone) {
        alert('Please fill in all fields');
        e.preventDefault();
    }
});
