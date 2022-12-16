$(document).ready(function() {
  $(".course__button").click(function() {
    $(this).each(function() {
      Swal.fire(
        'Selamat, kelas berhasil dibuka!',
        'Klik ok untuk memulai belajar.',
        'success'
      ).then((result) => {
        if (result.isConfirmed) {
          $(".modal__close").modal("hide");
        }
      });
    })
  });
  var date = new Date();
  var year = date.getFullYear();
  $("#date").html(year);
});
