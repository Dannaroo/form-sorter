
//Sort divs alphabetically
$('#alphBnt').on('click', function () {
  var alphabeticallyOrderedDivs = $('.box').sort(function(a, b) {
  			return String.prototype.localeCompare.call($(a).text().toLowerCase(), $(b).text().toLowerCase());
  		});

  var container = $(".bin");
  container.detach().empty().append(alphabeticallyOrderedDivs);
  $('body').append(container);

});


//https://stackoverflow.com/questions/43645828/sort-divs-based-on-values-of-child-elements
//sort divs numerically
$('#numBnt').on('click', function () {
  $('.bin').each(function(){
    $(this).html(
      $(this).find('.box').sort(function(a, b) {
        let dsa = parseInt($(a).find('h5').eq(0).text()),
            dsb = parseInt($(b).find('h5').eq(0).text());
        return (dsa > dsb ? 1 : (dsa < dsb) ? -1 : 0);
      })
    );
  });
});

//Search form
const search = document.getElementById('search');
const submitButton = document.querySelector('.submit');
const list = document.querySelectorAll('.bin h1');
const clearButton = document.querySelector('#clear');

//OFF-PAGE search. sort divs on end-page searching from start page.
if (resultsSearch) {
  for (i = 0; i < list.length; i += 1) {
    let title = list[i].innerHTML;
    if ( title.toLowerCase().includes(resultsSearch.toLowerCase()) ) {
      list[i].parentNode.style.display="block";
    } else {
      list[i].parentNode.style.display="none";
    }
  }
  search.value = resultsSearch;
};

//ON-PAGE search on click 'submit', sort through the divs
submitButton.addEventListener('click', () => {
  for (i = 0; i < list.length; i += 1) {
    let title = list[i].innerHTML;
    if ( title.toLowerCase().includes(search.value.toLowerCase()) ) {
      list[i].parentNode.style.display="block";
    } else {
      list[i].parentNode.style.display="none";
    }
  }
  search.value = "";
});

//clear search results with #clear button
clearButton.addEventListener('click', () => {
  for (i = 0; i < list.length; i += 1) {
    if (list[i].parentNode.style.display="none") {
      list[i].parentNode.style.display="block";
    }
  }
});
