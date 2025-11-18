const nama = document.getElementById("nama")
const email = document.getElementById("email")
const pesan = document.getElementById("pesan")
const form = document.getElementById("form")
const error = document.getElementById("error")

form.addEventListener('submit', (e) =>{
    let msessages = []
    if (nama.value === '' || nama.value == null){
        msessages.push("Nama diisi woi")
    }

    if(msessages.length > 0){
        e.preventDefault()
        error.innerText = msessages.join(' , ')
    }
})