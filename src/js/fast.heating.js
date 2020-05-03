$('#imageModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var title = button.data('title') // Extract info from data-* attributes
    var image = button.data('image') // Extract info from data-* attributes
    var infoText = button.data('info') // Extract info from data-* attributes
    var horizontal = button.data('horizontal') // Extract info from data-* attributes
    // Update the modal's content with JQuery
    var modal = $(this)
    modal.find('.modal-title').text(title)
    if (infoText == null) {
      modal.find('.modal-footer').hide();
    } else {
      modal.find('.modal-footer').show();
    }
    if (horizontal == null) {
      $('#modal-image').attr('class', 'd-block w-50 mx-auto');
    } else {
      $('#modal-image').attr('class', 'img-fluid d-block mx-auto');
    }
    $('#modal-text').text(infoText)
    $('#modal-image').attr('src', image);
  })