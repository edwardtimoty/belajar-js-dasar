// menentukan nilai awal
var noAngkot = 1;
var jmlAngkot = 10;
var angkotBeroperasi = 6;
// cek kondisi apakah bernilai false / true
while(noAngkot <= angkotBeroperasi) {
    // kalo bernilai true maka lakukan aksi dibawah ini
    console.log('Angkot No. ' + noAngkot +  ' beroperasi dengan baik');
    // increment nilai di tiap akhir perulangan
    noAngkot++;
}
// value dari noAngkot diatas sudah otomatis menjadi 7 karena di looping di while diatas
for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
    console.log('Angkot No.  ' + noAngkot + ' sedang tidak beroperasi');
}