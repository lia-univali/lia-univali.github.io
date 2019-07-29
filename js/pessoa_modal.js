$('.biomodal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('bio') // Extract info from data-* attributes
    var nome = button.data('nome') // Extract info from data-* attributes
    var modal = $(this)
    modal.find('.modal-title').html(nome)
    modal.find('.bio-content').html(recipient)
})
