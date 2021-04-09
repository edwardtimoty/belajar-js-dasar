// Manipulasi Array
// ===============================
// 1. Menambah isi array
// var arr = [];
// arr[0] = "Q";
// arr[1] = "W";
// arr[2] = "E";

// console.log(arr);
// ===============================
// 2. Menghapus isi array
// var arr = ["A", "B", "C"];
// arr[1] = undefined;

// console.log(arr);
// ===============================
// 3. Menampilkan isi array
// var arr = ["A", "B", "C"];
// length (mengetahui jumlah elemen pada array)
// for (var i = 0; i < arr.length; i++) {
//     console.log('Orang ke-' + (i+1) + ' ' + arr[i]);
// }
// ===============================
// Method pada Array :
// var arr = ['A', 'B', 'C', 'D'];
// 1. Join (menggabungkan seluruh isi array dan mengubah isi array menjadi string)
// console.log(arr.join()); // didalam () join adalah separator, bisa diubah

// 2. Push (untuk mendorong / menambah elemen array di akhir array)
// arr.push('D'); // bisa menambah beberapa elemen
// console.log(arr.join());

// 3. Pop (kebalikan dari push / menghilangkan elemen dari sebuah array di akhir)
// arr.pop(); // menghapus satu per satu
// console.log(arr.join());

// 4. Unshift (menambahkan elemen array di awal)
// arr.unshift('Z');
// console.log(arr.join());

// 5. Shift (menghilangkan elemen array di awal)
// arr.shift();
// console.log(arr.join());

// 6. Slice (mengambil beberapa bagian pada array untuk menjadi array yg baru)
// slice(awal,akhir);
// var arr2 = arr.slice(1,3);
// console.log(arr.join());
// console.log(arr2.join());

// 7. Splice (menyambung / menambal bisa menyisipkan di tengah2)
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)
// arr.splice(2, 0, 'Z');
// arr.splice(1, 2, 'Z', 'X');
// console.log(arr.join());

// 8. Foreach (tidak mengembalikan nilai array)
// var angka = [1,2,3,4,5,6,7,8];
// var nama = ['A', 'B', 'C'];
// for(var i = 0; i < angka.length; i++) {
//     console.log(angka[i]);
// }

// untuk setiap elemen yang ada pada elemen angka lakukan fungsi e (kita ga perlu nentuin looping berapa kali dan increment)
// function(e) = fungsi penanganan event(pada event, objek yg dibuat)
//  e = penanganan objek (objek yg dibuat dapat diakses)
// sebuah parameter untuk fungsi
// angka.forEach(function(e) {
//     console.log(e);
// })

// e = elemen (value) , i = index
// nama.forEach(function (e, i) {
//     console.log('Orang ke-' + (i+1) + ' adalah : ' + e);
// })

// 9. Map (mengembalikan nilai array)
// var angka = [1,2,3,4,5];
// var angka2 = angka.map(function(e){
//     return e * 2; //seluruh elemen akan dikalikan dua dan disimpan di variabel angka2 sebagai array
// });
// console.log(angka2.join());

// 10. Sort (mengurutkan nilai / elemen)
// var angka = [1,3,7,5,9];
// angka.sort();
// console.log(angka.join());

// var angka = [1,10,2,20,5,9];
// // untuk membuat urutan array benar
// angka.sort(function(a,b){
//     // a-b itu untuk ascending(mengurut menaik), sedangkan b-a untuk descending (menurun)
//     return a-b; 
// })

// 11. Filter (mencari banyak nilai & mengembalikan banyak nilai)
// var angka = [1,10,2,20,5,9];
// var angka2 = angka.filter(function(e){
//     return e > 5;
// });
// console.log(angka2.join());

// 12. Find (mencari satu nilai & mengembalikan satu nilai)
// var angka = [1,10,2,20,5,9];
// var angka2 = angka.find(function(e){
    // return e > 5; //mulai mencari dari index pertama jadi karena 10 index ke 1 maka yg muncul 10 
// });
// console.log(angka2);