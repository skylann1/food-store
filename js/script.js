// toggle class aktive
const navBarNav = document.querySelector('.navbar-nav');
// // ketika humbergur menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navBarNav.classList.toggle('active');
// };


// klick di luar sidebar 
const hamburger = document.querySelector('#hamburger-menu')

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navBarNav.contains(e.target)) {
       navBarNav.classList.remove('active');
  }
});
}

alert("maap beberapa fitur belum di learn! \nmassage by shlnmzq")