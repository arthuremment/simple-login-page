const show_hide_pass = document.getElementById('show-hide-pass')
const hide_pass = document.getElementById('hide-pass')

hide_pass.style.visibility="hidden";

show_hide_pass.addEventListener("click", ()=> {
    hide_pass.style.visibility="visible";
    show_hide_pass.style.visibility="hidden";
    
})

hide_pass.addEventListener("click", ()=> {
    hide_pass.style.visibility="hidden";
    show_hide_pass.style.visibility="visible";
})