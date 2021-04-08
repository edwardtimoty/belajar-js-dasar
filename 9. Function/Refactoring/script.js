// refactoring = sebuah proses mengubah kode agar menjadi lebih 'baik' 
// tanpa mengubah fungsionalitasnya
// manfaat refactoring : Readability (mudah dibaca), DRY (Don't Repeat Yourself), Testability (agar lebih mudah pas di tes), Performance(meningkatkan performansi dari program), Maintainability(dapat dengan mudah dikelola / dikembangkan)

function jumlahVolumeDuaKubus(a,b) {
    return  a * a * a + b * b * b;
}

alert(jumlahVolumeDuaKubus(8,3));