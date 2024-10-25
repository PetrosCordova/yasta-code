const menuBtn = document.getElementById('menuBtn');
const sideBtn = document.getElementById('sideBtn');
const sidebar = document.getElementById('sidebar');
const content = document.getElementById('container-yasta');

function toggleSidebar(){
    sidebar.classList.toggle('active');
    content.classList.toggle('dimmed');
};
menuBtn.addEventListener('click', toggleSidebar);
sideBtn.addEventListener('click', toggleSidebar);

content.addEventListener('click', ()=> {
    if(sidebar.classList.contains('active')){
        toggleSidebar();
    }
});