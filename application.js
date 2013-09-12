var emptySnippetSection = '<section class="indSnippet"></section>'
var preTag = '<pre></pre>'


$(document).ready(function() {

  $('form').submit(function(e){
    e.preventDefault()

    var formData = $('form textarea').val()
    var formattedFormData = $(preTag).append(formData)
    var completedSnippet = $(emptySnippetSection).append(formattedFormData)

    $('.snippets').append(completedSnippet)
    // $.ajax
  })

})
