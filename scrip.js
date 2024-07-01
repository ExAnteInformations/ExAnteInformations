document.getElementById('menu-icon').addEventListener('click', function() {
    const menu = document.getElementById('vertical-menu');
    if (menu.classList.contains('show')) {
        menu.classList.remove('fade-in');
        menu.classList.add('fade-out');
        setTimeout(() => {
            menu.classList.remove('show');
            menu.classList.remove('fade-out');
        }, 300); // Duration of fade-out
    } else {
        menu.classList.add('show');
        menu.classList.add('fade-in');
    }
});

window.onload = function() {
    setTimeout(function() {
        document.getElementById('overlay').classList.add('fade-out');
        setTimeout(function() {
            document.getElementById('overlay').style.display = 'none';
        }, 1000); // Ensure the overlay is completely hidden and non-interactive
    }, 1500);
}
