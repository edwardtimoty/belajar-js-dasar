// sintaks IF
// if (kondisi) {
// aksi1
// } else if(kondisi2) {
// aksi2
// } else {
// aksi default
// }

var angka = prompt('Masukkan Angka : ');
if(angka % 2 === 0 ) {
    alert(angka + ' adalah bilangan GENAP');
} else if (angka % 2 === 1) {
    alert(angka + ' adalah bilangan GANJIL');
} else {
    alert('Yang anda masukkan bukan angka');
}