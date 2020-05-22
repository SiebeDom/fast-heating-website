$('#imageModal').on('show.bs.modal', function (event) {
    // Button that triggered the modal
    var button = $(event.relatedTarget) 
    // Extract info from data-* attributes
    var title = button.data('title') 
    var image = button.data('image') 
    var infoText = button.data('info') 
    var horizontal = button.data('horizontal') 
    // Set the modal title with JQuery
    var modal = $(this)
    modal.find('.modal-title').text(title)
    // If the Button supplied an info text show the modal footer and text
    if (infoText == null) {
      modal.find('.modal-footer').hide();
    } else {
      modal.find('.modal-footer').show();
      $('#modal-text').text(infoText)
    }
    // If it is a horizontal image limit the width to 50
    if (horizontal == null) {
      $('#modal-image').attr('class', 'd-block w-50 mx-auto');
    } else {
      $('#modal-image').attr('class', 'img-fluid d-block mx-auto');
    }
    // Set the modal image
    $('#modal-image').attr('src', image);
  })