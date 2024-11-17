/* Menu / sidebar toggle - all pages */

function toggleSidebar() {
const menuIcon = document.getElementById('menu_icon');
const sidebar = document.querySelector('.nav_sidebar');

if (sidebar.style.display === 'flex') {
    sidebar.style.display = 'none';
    menuIcon.innerHTML = '<path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>';
} else {
    sidebar.style.display = 'flex';
    menuIcon.innerHTML = '<path d="M120-240v-80h520v80H120Zm664-40L584-480l200-200 56 56-144 144 144 144-56 56ZM120-440v-80h400v80H120Zm0-200v-80h520v80H120Z"/>';
}
}

function hideSidebar(){
    const sidebar = document.querySelector('.nav_sidebar')
    sidebar.style.display = 'none'
}

