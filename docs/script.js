// this is where our interactivity goes

document.addEventListener('DOMContentLoaded', function() {

    const navItems = document.querySelectorAll('header nav ul li a');

    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(nav => nav.classList.remove('current'));
            this.classList.add('current');
        });
    });

});

document.querySelector('.content-box').scrollTop = 0;
