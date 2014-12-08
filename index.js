(function($) {

  $().ready(function() {
    $('#calculate-button').click(function() {
      var saveData = $('#save-data-entry')[0].value
      var c = new Calculator(saveData);
      $('#output')[0].innerText = JSON.stringify(c.data);
    });
  });

})($)