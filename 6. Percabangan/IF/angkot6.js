// var angka = prompt('Masukkan Angka : ');
// if(angka % 2 === 0 ) {
//     alert(angka + ' adalah bilangan GENAP');
// } else if (angka % 2 === 1) {
//     alert(angka + ' adalah bilangan GANJIL');
// } else {
//     alert('Yang anda masukkan bukan angka');
// }

var noAngkot  = 1;
    jmlAngkot = 10;
    angkotBeroperasi = 6;

for( noAngkot; noAngkot<= jmlAngkot; noAngkot++ ) {
    if(noAngkot <= 6 && noAngkot !==5){
        console.log('Angkot No. ' + noAngkot +  ' beroperasi dengan baik');
    } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
        console.log('Angkot No. ' + noAngkot + ' sedang lembur');
    } else {
        console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi')
    }
}