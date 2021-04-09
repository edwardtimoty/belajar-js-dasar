// deklarasi penumpang untuk menampung array
var penumpang = [];

// membuat  function tambahPenumpang
var tambahPenumpang = function(namaPenumpang, penumpang) {
    // jika angkot kosong
    if( penumpang.length == 0 ) {
        penumpang.push(namaPenumpang);
        return penumpang;
    } else { 
        for( var i = 0; i < penumpang.length; i++ ) {
            if( penumpang[i] == namaPenumpang ) {
            console.log(namaPenumpang + ' sudah ada di dalam angkot.');
            return penumpang;
            }
        }
       
        for( var i = 0; i < penumpang.length; i++ ) { 
            if( penumpang[i] == undefined ) {
            penumpang[i] = namaPenumpang;
            return penumpang;
            }
         
            else if ( i == penumpang.length - 1 ) {
            penumpang.push(namaPenumpang);
            return penumpang;
            } 
        }
    }
}
// ====================================================================================

var hapusPenumpang = function(namaPenumpang,penumpang) {
    if(penumpang.length == 0) {
        console.log('Angkotnya masih kosong !');
        return penumpang;
    } else {
        for(var i = 0; i < penumpang.length; i++) {
            if(penumpang[i] == namaPenumpang) {
                penumpang[i] = undefined;
                return penumpang;
            } else if (i == penumpang.length - 1) {
                console.log(namaPenumpang + ' tidak ada didalam Angkot !');
                return penumpang;
            }
        }
    }
}








