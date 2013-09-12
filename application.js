var emptySnippetSection = '<section class="indSnippet"></section>'
var preTag = '<pre></pre>'

var saveSnippetCollection = function(snippetCollection) {
  localStorage.setItem('snippet', JSON.stringify(snippetCollection))
}

var getSnippetCollection = function() {
  if (localStorage.getItem('snippet')) {
  return JSON.parse(localStorage.getItem('snippet'))
  }
  else {
    return []
  }
}

var snippetCollection = getSnippetCollection()

var appendSnippetsToPage = function(snippetCollection) {
  for (var i=0; i < snippetCollection.length; i++) {
    appendSnippet(snippetCollection[i])
  }
}

var appendSnippet = function(formData) {
  var formattedFormData = $(preTag).append(formData)
  var completedSnippet = $(emptySnippetSection).append(formattedFormData)
  $('.snippets').append(completedSnippet)
}


$(document).ready(function() {

  $('.form').hide()

  appendSnippetsToPage(snippetCollection)

  $('#addSnippet').click(function(e) {
    e.preventDefault()
    $('.form').slideToggle()
  })

  $('form').submit(function(e){
    e.preventDefault()

    var formData = $('form textarea').val()

    if (!formData.match(/^\s+$/)) {
      $('.form').slideToggle()

      appendSnippet(formData)

      snippetCollection.push(formData)

      saveSnippetCollection(snippetCollection)
    // $.ajax
    }
  })

   $('#searchBox').keyup(function() {
    var searchText = $(this).val()

    for (var i=0; i < snippetCollection.length; i++) {
      if(!snippetCollection[i].match(searchText)) {
        $('.indSnippet:nth-child(' + (i + 1) + ')').hide()
      }
      else {
        $('.indSnippet:nth-child(' + (i + 1) + ')').show()
        console.log(i)
      }
    }
    console.log(searchText)

    // for each match in matchingSearches


   })


})
