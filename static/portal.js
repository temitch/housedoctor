const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    console.log("menuToggle clicked");
    navLinks.classList.toggle('active');
});

function toggleInspectionCategory(button) { // expand contract inspection categy
    // console.log('Toggle button clicked');
    const parent = button.parentElement;
    const next = button.nextElementSibling;
    // console.log(button.classList);
    const submenu = next;
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', !isExpanded);
    // console.log(button.classList);
    if (isExpanded) {
        button.classList.remove('calc_open');
    } else { button.classList.add('calc_open') }
    // console.log(button.classList);
    submenu.hidden = isExpanded;
}

function updateBoxes(btn) {
    console.log(btn.id);
    navLinks.classList.remove('active');
}