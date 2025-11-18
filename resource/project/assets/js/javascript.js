document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    let nama = document.getElementById('nama').value.trim();
    let email = document.getElementById('email').value.trim();
    let pesan = document.getElementById('pesan').value.trim();

    if(!nama || !email || !pesan){
        alert('Semua field harus diisi')
        return
    }

    let data = JSON.parse(localStorage.getItem('formKontak')) || [];
    data.push({nama, email, pesan});
    localStorage.setItem('formKontak', JSON.stringify(data));

    alert('Data berhasil disimpan')
    this.reset();
});