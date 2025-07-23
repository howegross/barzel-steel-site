/*
 * Simple script to add a darkened background to the header when the user scrolls
 * down the page. This subtle change enhances readability and provides a
 * visual cue that the user has moved away from the top of the hero section.
 */

window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});