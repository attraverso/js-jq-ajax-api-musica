$(document).ready(function() {/*DNT*/

var source = $('#cd-template').html();
var template = Handlebars.compile(source);

$.ajax({
  'url': 'https://flynn.boolean.careers/exercises/api/array/music',
  'method': 'get',
  'success': function(data) {
    var cdArray = data.response;
    console.log(cdArray);
    for (var i = 0; i < cdArray.length; i++) {
      var currentObject = cdArray[i];
      var html = template(currentObject);
      $('.cds-container').append(html);
    }
  },
  'error': function() {
    alert('There was an issue with your request.')
  },
})

$('option[value=jazz]').click(function() {
  $('.cd').hide();
  $('.cd[data-genre=Jazz]').show();
});

$('option[value=pop]').click(function() {
  $('.cd').hide();
  $('.cd[data-genre=Pop]').show();
});

$('option[value=metal]').click(function() {
  $('.cd').hide();
  $('.cd[data-genre=Metal]').show();
});

$('option[value=rock]').click(function() {
  $('.cd').hide();
  $('.cd[data-genre=Rock]').show();
});

$('option[value=all]').click(function() {
  $('.cd').show();
});

});/*DNT - closing doc.ready*/
