//var demo = 'Mày xấu vc soi gương lại đi'; khai bao var
Swal.fire({
    title: 'Mày có thấy Phạm Thật đẹp try không?',
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: 'Có',
    denyButtonText: `Đéo`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire('Chọn Đúng Rồi Đó Thằng Lồn!', '', 'success')
    } else if (result.isDenied) {
      Swal.fire('Chọn Sai Rồi, Chọn Lại Đi Thằng Ngu!', 'F5 chọn lại hộ bố', 'error')
    }
  })
  
console.log(ok); // in ra console trong dev tool

// toán tử 
var a = 10 
var b = 20 
var c = a + b; 
console.log(c);
// a++ ; ++a
//
// ++a làm 2 việc
// việc 1 : +1 cho a, a = a + 1
// việc 2 : trả về a sau khi được +1
// a++ làm 3 việc
// việc 1 : copy lại của biến đó => vẫn bằng chính nó
// việc 2 : cộng 1 của chính nó => a = a + 1
// việc 3 : trả về của việc 1

// toán tử gán 
// a = a + 2 <=> a += 2