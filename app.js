const navLinks = document.getElementsByClassName('navigation__link');
const naviToggleIcon = document.getElementById('navi-toggle');

const listener = function(e) {
    if(e.target.className === 'navigation__link'){
        naviToggleIcon.checked = false;
        document.removeEventListener('click', listener);
    }
}

naviToggleIcon.addEventListener('click', function(){
    if(this.checked){        
        document.addEventListener('click', listener);
        naviToggleIcon.checked = true;
    }
});