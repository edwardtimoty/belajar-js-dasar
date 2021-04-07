// Popup Box ada 3 jenis yaitu : alert, prompt, confirm

// sintaks Alert : alert('Hello World');

// prompt akan mengembalikan nilai yg sama
// sintaks prompt('masukkan nama : ');

// confirm akan mengembalikan nilai boolean
//sintaks confirm('kamu yakin ?'); 

// var nama = prompt('Masukkan Nama : ');
// alert('Halo ' + nama);

// var tes = confirm('kamu yakin ?');
// if(tes === true) {
//     alert('user menekan OK');
// } else {
//     alert('user menekan cancel');
// }

alert('Selamat datang');
var lagi = true;

while( lagi === true ) {
    var nama = prompt('Masukkan Nama : ');
    alert('Halo ' + nama);

    lagi = confirm('Coba lagi ? ');
}

alert('Terimakasih');