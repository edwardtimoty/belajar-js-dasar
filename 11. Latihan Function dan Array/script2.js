// penumpang angkot 
const penAng = [];
// penumpang naik angkot 
let tamPen = function(namPen) {
  // jika angkot kosong
  if (penAng.length == 0) {
    penAng.unshift(namPen);
    return;
  } else {
    // cek semua nama di angkot
    for (let i=0; i<penAng.length; i++) {
      // jika nama sama
      if (penAng[i] == namPen) {
        console.log([i]);
        console.log('sudah ada penumpang dengan nama ' + namPen + ' dikursi ' + [(i+1)]);
        return;
      }
      // jika ada kursi yang kosong
      else if (penAng[i] == undefined) {
        penAng[i] = namPen;
        return;
      }
      // jika tidak ada kursi diantara
      else if (i == penAng.length-1) {
        penAng.push(namPen);
        return;
      }
    }
  }
};

// penumpang turun
let turunIn = function(nama) {
  if (penAng.length === 0) {
    console.log('angkot masih kosong');
    return;
  }
  else {
    for(let i=0; i<=penAng.length; i++) {
      if (penAng[i] !== nama ) {
          console.log('tidak ada ' + nama + ' di angkot');
        return;
      }
      else if (penAng[i] == nama) {
        penAng[i] = undefined;
        return;
      }
    }
  }
};


console.log(penAng);
