//Create array of classes contained by the main nav element
const mainNavClasses = document.getElementById('main_nav').classList;

//Create object of toggle button elements
const toggleBtns = document.querySelectorAll("#nav_menu_btn, #nav_close_btn");
console.log(toggleBtns);

//For each element in the toggle buttons object add a click event listener to invoke the class checking function
toggleBtns.forEach(element => element.addEventListener('click', toggleMobileNavClasses));

//Function that checks existent classes of the mobile and adds/removes accordingly
function toggleMobileNavClasses() {    
    if (mainNavClasses.contains("is-hidden")) {
        mainNavClasses.remove("is-hidden");
    } else {
        mainNavClasses.add("is-hidden");
    }
    if (mainNavClasses.contains("is-open")) {
        mainNavClasses.remove("is-open");
    } else {
        mainNavClasses.add("is-open");
    }    
};
