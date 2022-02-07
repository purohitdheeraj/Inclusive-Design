const dropdownContent = document.getElementById('dropdown__content');

const dropdownBtn = document.getElementById('dropdown__btn');



dropdownBtn.addEventListener('click',function(e){
    dropdownContent.classList.toggle("show")

    window.onclick = function(e){
        if( !e.target.matches(".dropdown__btn")){
            if(dropdownContent.classList.contains("show")){
                dropdownContent.classList.remove("show")
            }
        }
    }
})