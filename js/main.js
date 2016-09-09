jQuery(document).ready(function($) {

  $('#myCarousel').carousel({
    interval: 5000
  });

  //Handles the carousel thumbnails
  $('[id^=carousel-selector-]').click(function() {
    var id_selector = $(this).attr("id");
    try {
      var id = /-(\d+)$/.exec(id_selector)[1];
      console.log(id_selector, id);
      jQuery('#myCarousel').carousel(parseInt(id));
    } catch (e) {
      console.log('Regex failed!', e);
    }
  });
  // When the carousel slides, auto update the text
  $('#myCarousel').on('slid.bs.carousel', function(e) {
    var id = $('.item.active').data('slide-number');
    $('#carousel-text').html($('#slide-content-' + id).html());
  });
  $('.little-anya').mouseover(function() {
    $(this).find('img').attr('src', '/img/anya_old.jpg')
  }).mouseout(function() {
    $(this).find('img').attr('src', '/img/anya_child.jpg')
  })

  $('.shrey').mouseover(function() {
    $(this).find('img').attr('src', '/img/shrey_old.jpg')
  }).mouseout(function() {
    $(this).find('img').attr('src', '/img/shrey_child.jpg')
  });

  $(function() {
      $('form').submit(function() {
        var personName = $('.person-name').val();
        alert("Thanks " + personName+ "! We will be in touch soon :)");
        return true;
      });
  });
});
