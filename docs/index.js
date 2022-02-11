const dropdownContent = document.getElementById('dropdown__content');

const dropdownBtn = document.getElementById('dropdown__btn');

const floatBtn = document.getElementById('float-btn')

const scrollFunction = ()=>{
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        floatBtn.style.display = "flex";
      } else {
        floatBtn.style.display = "none";
      }
}
function toTop() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
  }

floatBtn.addEventListener('click',toTop)


window.onscroll = () => scrollFunction();

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