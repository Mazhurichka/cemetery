$(function () {
  let dataModal = $("[data-modal]");
  let closeModal = $("#modal-close");
  let modal = $("#modal");

  dataModal.on("click", function () {
    let dataModalID = $(this).attr("data-modal");

    $(dataModalID).addClass("modal-show");
  });

  closeModal.on("click", function () {
    modal.removeClass("modal-show");
  });

  $(window).on("click", function (e) {
    if ($(e.target).is(".modal")) {
      modal.removeClass("modal-show");
    }
  });
});
