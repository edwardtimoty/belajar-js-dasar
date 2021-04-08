// expression : function indetifier opt (ParameterList opt) { FunctionBody }
// harus didefinisikan terlebih dahulu sebelum dipanggil, lebih powerfull (sebagai closure, sebagai argumen untuk function lain), IIFE (Immediately Invoked Function Expression)
// contoh :
var tampilPesan = function (nama) {
                    alert('halo ' + nama );
                  }