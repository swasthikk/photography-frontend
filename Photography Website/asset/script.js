document.addEventListener('DOMContentLoaded', function () {
    const check = document.getElementById('check');
    const sidebarMenu = document.querySelector('.sidebar_menu');
    const btnTwo = document.querySelector('.btn_two label');

    check.addEventListener('change', function () {
        if (this.checked) {
            sidebarMenu.style.transform = 'translateX(0)';
        } else {
            sidebarMenu.style.transform = 'translateX(-300px)';
        }
    });

    btnTwo.addEventListener('click', function () {
        check.checked = false;
        sidebarMenu.style.transform = 'translateX(-300px)';
    });

    // Smooth scroll for menu items
    document.querySelectorAll('.menu a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
            check.checked = false;
            sidebarMenu.style.transform = 'translateX(-300px)';
        });
    });
});
