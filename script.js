const links = document.querySelectorAll('.nav-link');

links.forEach(link => {
    if (link.href === window.location.href) {
        setTimeout(() => {
            link.classList.add("active");
        }, 50); // small delay forces animation
    }
})
