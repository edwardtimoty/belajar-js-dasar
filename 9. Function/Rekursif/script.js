// rekursif = sebuah fungsi yang memanggil dirinya sendiri
// semua looping bisa dibuat rekursif, tapi tidak sebaliknya
// base case = kondisi akhir dari rekursif yang menghasilkan nilai

function cetakAngka(n) {
    // Base Case
    if (n === 0) {
        return;
    }
    // Akhir Base Case
    console.log(n);
    cetakAngka(n-1);
}
cetakAngka(10);