// Object = kumpulan nilai yang memiliki nama

// Membuat Object

// 1. Object Literal
// cara 1 :
// var mhs = {
//     //nama = key (properti), "Edward" = nilai (value); 
//     nama : "Edward", 
//     umur : 22,
//     alamat : "Jalan Karang Tengah Raya Lebak Bulus"
// };

// cara 2 :
// var obj = {a : 10, nama : 'A'};
// obj.halo = function() {
// 	console.log(this);
// 	console.log('halo');
// }
// obj.halo();
// this mengembalikan object yang bersangkutan


// 2. Function Declaration
// cara 1 :
// function buatObjectMahasiswa(nama, npm, jurusan) {
//     var mhs = {};
//     mhs.nama = nama;
//     mhs.npm = npm;
//     mhs.jurusan = jurusan;
//     return mhs;
// }
// var mhs2 = buatObjectMahasiswa('Edward', '10416045', 'Sistem Informasi');

// cara 2 :
// function halo () {
//  console.log(this);
// 	console.log('Halo');
// }
// halo(); == this.halo();
// this mengembalikan object global

// 3. Constructor
// nama Function awal huruf besar,
// klo di constructor variabel dan return sudah dibuatkan otomatis
// wajib menggunakan keyword new saat memanggilnya klo tidak pake itu sama saja dengan function declaration

// cara 1 :
// function Mahasiswa(nama, npm, jurusan) {
//     // var this = {};
//     this.nama = nama;
//     this.npm = npm;
//     this.jurusan = jurusan;
//     // return this;
// }

// var mhs3 = new Mahasiswa('Edward', '1046045', 'Sistem Informasi');

// cara 2 :
// function Halo() {
// 	console.log(this);
// 	console.log('Hai');
// }

// new Halo();
// this mengembalikan object yang baru dibuat


// properti = variabel yang ada didalam objek
// method = function yang ada didalam objek


// this = sebuah keyword spesial yang secara otomatis didedifinisikan pada setiap function
// this == window / object global
