document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');
    const menuLinks = document.querySelectorAll('#menu ul.nav-pills a');

    function changeMenuActive() {
        const scrollPosition = window.scrollY;

        sections.forEach((section, index) => {
            const top = section.offsetTop - 50;

            if (index === sections.length - 1 && scrollPosition >= top) {
                menuLinks.forEach((link) => link.classList.remove('active'));
                menuLinks[menuLinks.length - 1].classList.add('active');
            } else if (scrollPosition >= top && scrollPosition < sections[index + 1].offsetTop - 50) {
                menuLinks.forEach((link) => link.classList.remove('active'));
                menuLinks[index].classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', changeMenuActive);
});