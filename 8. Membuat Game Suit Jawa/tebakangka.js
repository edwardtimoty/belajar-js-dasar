var x = true;
while(x) {
  
  var nyawa = 3
  var jawaban = Math.floor(Math.random()*10);
  var hasil = undefined;
  
  for(nyawa; nyawa > 0; nyawa--) {
    
    var pilihan = parseInt(prompt('Tebak angka dari 0 - 10 \nKesempatan menebak : '+nyawa));
    
    if(pilihan > 10) {
    alert('Hanya bisa menebak dari 0 - 10')
    
    }else if(pilihan < jawaban) {
      hasil = (pilihan+1 === jawaban)? 'Masih rendah, Sedikit lagi' : 'Terlalu rendah';
      alert(hasil);
    
    }else if(pilihan > jawaban) {
      hasil = (pilihan-1 === jawaban)? 'Masih tinggi, Sedikit lagi' : 'Terlalu tinggi';
      alert(hasil);
   
    }else if(pilihan === jawaban) {
      hasil = 'BENAR';
      alert(hasil);
      
      nyawa = -1;
    
    }else {
      alert('Tebakan tidak sesuai');
    } 
   
  }
alert('Jawabannya adalah : '+jawaban);
  
if(hasil != 'BENAR') {
  alert('Kesempatan menebak sudah habis')
}
  
x = confirm('Main lagi?');
}
alert('Terima kasih... ');