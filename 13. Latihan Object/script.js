// Membuat Object Angkot

function Angkot(supir, trayek, penumpang, kas) {
    this.supir = supir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    // method penumpang naik
    this.penumpangNaik = function(namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    // method penumpang turun
    this.penumpangTurun = function(namaPenumpang, bayar) {
        if(this.penumpang.length === 0) {
            alert('Angkot masih kosong !');
            return false;
        }
    }

    for (var i = 0; i < this.penumpang.length; i ++) {
        if (this.penumpang[i] == namaPenumpang) { 
            this.penumpang[i] = undefined;
            this.kas += bayar;
            return this.penumpang;
        }
    }
}
// instansiasi objek
var angkot1 = new Angkot('Budi', ['Pondok Labu', 'Pasar Jumat'],[], 0);
var angkot2 = new Angkot('Cecep', ['Pasar Jumat', 'Cirendeu'], [], 0);