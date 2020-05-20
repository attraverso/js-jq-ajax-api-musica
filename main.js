$(document).ready(function() {/*DNT*/

var source = $('#cd-template').html();
var template = Handlebars.compile(source);

$.ajax({
  'url': 'https://flynn.boolean.careers/exercises/api/array/music',
  'method': 'get',
  'success': function(data) {
    var cdArray = data.response;
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

});/*DNT - closing doc.ready*/
