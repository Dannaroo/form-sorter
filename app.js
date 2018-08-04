
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
const resultsSearch = location.search.substr(location.search.indexOf("=")+1);
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

//Put contents of bin into an object.
const box = document.querySelectorAll('.box')
const product = [];
for (let i = 0; i < list.length; i += 1) {
  const name = box[i].querySelector('h1').innerHTML;
  let cost = box[i].querySelector('h5').innerHTML;
  cost = parseInt(cost);
    product[i] = {
        title : name,
        smallPrice : cost,
        mediumPrice : cost * 2,
        largePrice : cost * 4

    };
}
console.log(product);
console.log(product[4]);

//Make checkboxes operational
const sizeForm = document.querySelector('#sizeForm');
const checkboxes = sizeForm.querySelectorAll('input');

sizeForm.addEventListener('click', (event) => {
  for (i = 0; i < checkboxes.length; i += 1) {
    if(event.target === checkboxes[i]) {
      for (i = 0; i < checkboxes.length; i += 1) {
          checkboxes[i].setAttribute("checked", false);
      }
      event.target.checked = true;
      event.target.setAttribute("checked", true);
    }
  }
});

const bin = document.querySelector('.bin');
const priceCalc = document.querySelectorAll('.priceCalc');
const small = document.querySelector('#small');
const medium = document.querySelector('#medium');
const large = document.querySelector('#large');

//cycle through the list and append the correct price that is selected while removing click me button
bin.addEventListener('click', (event) => {
  for (let i = 0; i < product.length; i += 1) {
    if(event.target === priceCalc[i]) {
    const title = event.target.parentNode.firstElementChild.innerHTML;
    if (title === product[i].title) {
      let span = document.createElement('span');
      if (document.querySelector('[checked=true]') === large) {
        span.innerHTML = "Price: $" + product[i].largePrice + ".00";
      } else if (document.querySelector('[checked=true]') === medium) {
        span.innerHTML = "Price: $" + product[i].mediumPrice + ".00";
      } else {
        span.innerHTML = "Price: $" + product[i].smallPrice + ".00";
      }
      event.target.parentNode.appendChild(span);
      event.target.parentNode.removeChild(event.target);
      return;
    }
  }
}
});

//add functionality to clear prices and allow selection of new ones.
const clearPrice = document.querySelector('#clearPrice');

// clearPrice.addEventListener('click', (event) => {
//
//   let priceCalc = document.querySelectorAll('.priceCalc');
//   let newPriceCalc = document.createElement('button');
//   newPriceCalc.classList.add('priceCalc');
//   newPriceCalc.innerHTML = "Click Me";
//   for (let i = 0; i < box.length; i += 1) {
//     const span = box[i].querySelector('span');
//     const oldPriceCalc = box[i].querySelector('.priceCalc');
//     if(span) {
//       box[i].removeChild(span);
//     }
//     if(!oldPriceCalc) {
//       box[i].appendChild(newPriceCalc);
//     }
//   }
// });
