
const baselineBtn = document.getElementsByClassName('btn__snackbar--baseline')[0]
const leadingBtn = document.getElementsByClassName('btn__snackbar--leading')[0]

const snackbarOutput = document.getElementsByClassName('snackbar__output')[0]

const baselineOutput = document.getElementsByClassName('snackbar__baseline')[0]
const leadingOutput = document.getElementsByClassName('snackbar__leading')[0]


function addShowClass(className){
    className.classList.add("show")

    setTimeout(()=>{
        className.classList.remove("show")
    }, 5000)
}

baselineBtn.addEventListener('click',()=>addShowClass(baselineOutput))
leadingBtn.addEventListener('click',()=>addShowClass(leadingOutput))
