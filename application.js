$(document).ready(function() {

  $('form').submit(function(e){
    e.preventDefault()
    var formData = $('form').serializeArray()
    console.log(formData)
    // $.ajax
  })

})
