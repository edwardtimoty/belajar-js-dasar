var tanya = true;
while (tanya) {
    // Menangkap pilihan player
    var p = prompt('Silahkan pilih : gajah, semut, orang');

    // Menangkap pilihan komputer
    // mengenerate bilangan random
    var comp = Math.random();

    if (comp < 0.34) {
        comp = 'gajah';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'orang';
    } else {
        comp = 'semut';
    }
    console.log(comp);


    var hasil = '';
    // menentukan rules
    if (p == comp) {
        hasil = 'SERI';
    } else if (p == 'gajah') {
        // if (comp == 'orang') {
        //     hasil = 'MENANG';
        // } else {
        //     hasil = 'KALAH';
        // }

        // menggunakan operator ternary
        hasil = (comp == 'orang') ? 'MENANG' : 'KALAH'; // 1baris ini sama dengan 5 baris if else diatas
    } else if (p == 'orang') {
        hasil = (comp == 'gajah') ? 'KALAH' : 'MENANG';
    } else if (p == 'semut') {
        hasil = (comp == 'orang') ? 'KALAH' : 'MENANG';
    } else {
        hasil = 'Pilihan yang anda masukkan salah !';
    }

    // tampilkan hasilnya
    alert('Kamu memilih ' + p + ' dan Komputer memilih ' + comp + '\nMaka hasilnya :  Kamu ' + hasil);

    tanya = confirm('Ulangi lagi ? ');

}

alert('Terimakasih sudah bermain');