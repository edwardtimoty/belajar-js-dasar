// sintaks IF
// if (kondisi) {
// aksi1
// } else {
// aksi2
// }
var noAngkot  = 1;
    jmlAngkot = 10;
    angkotBeroperasi = 6;

for( noAngkot; noAngkot<= jmlAngkot; noAngkot++ ) {
    if(noAngkot <= 6){
        console.log('Angkot No. ' + noAngkot +  ' beroperasi dengan baik');
    } else {
        console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi');
    }
}