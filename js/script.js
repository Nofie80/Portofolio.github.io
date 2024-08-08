const nav = documen.getElementById('nav');

window.addEventListener('scroll', function() {
    scrollposition = windows.scollY;

    if ( scrollposition >=60 ) {
        nav.classList.add('nav-dark')
    } else if ( scrollposition<=60 ) {
        nav.classList.remove('nav-dark')
    }
})