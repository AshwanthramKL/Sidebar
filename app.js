// Selecting elements

var sidebarToggle = document.querySelector('.sidebar-toggle');
var sidebar = document.querySelector('.sidebar');
var closeBtn = document.querySelector('.close-btn');

sidebarToggle.addEventListener('click', showSidebar);

closeBtn.addEventListener('click', showSidebar);

function showSidebar(){
    sidebar.classList.toggle('show-sidebar');
}

