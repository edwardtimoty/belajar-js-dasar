// sintaks SWITCH
// switch(ekspresi) {
// case "nilai 1":
// aksi1
// [break;]
// case "nilai 2":
// aksi2
// [break;]
// default:
// aksi default
// [break;]
// }

// parseInt = mengkonversi string menjadi integer
// var angka = parseInt(prompt('Masukkan Angka : '));

// switch(angka) {
//     case 1:
//         alert('Anda memasukkan angka 1');
//         break;
//     case 2:
//         alert('Anda memasukkan angka 2');
//         break;
//     case 3:
//         alert('Anda memasukkan angka 3');
//     default:
//         alert('Angka yang anda masukkan salah');
// }

var item = prompt('Masukkan nama makanan / minuman : \n (contoh: nasi, daging, susu, indomie, softdrink)');

switch(item) {
    case 'nasi':
        alert('makanan SEHAT');
        break;
    case 'daging':
        alert('makanan SEHAT');
        break;
    case 'susu':
        alert('minuman SEHAT');
        break;
    case 'indomie':
        alert('makanan TIDAK SEHAT');
        break;
    case 'softdrink':
        alert('minuman TIDAK SEHAT');
        break;
    default:
        alert('Anda memasukkan nama makanan / minuman yang salah');
        break;
}