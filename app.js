// const elements = document.getElementsByClassName("box");
// const main = document.getElementsByClassName("bin")[0];
// const children = main.children;
// const basin = document.getElementsByClassName("basin")[0];
// console.log(elements);
// console.log(main);
// console.log(children);

// Sort the .box divs into alphabetical order.
// elements = elements.sort();

// Loop through .bin and append sorted .box divs to .basin
// for (let i = 0; i < children.length; i += 1 ) {
//
//   basin.appendChild(elements[i].cloneNode(true));
//   console.log(elements[i]);
//   console.log(i);
// }
// ////////////////////////////////////////////

//
// var $divs = $("div.box");
//
// $('#alphBnt').on('click', function () {
//     var alphabeticallyOrderedDivs = $divs.sort(function (a, b) {
//         return $(a).find("h1").text() > $(b).find("h1").text();
//     });
//
//     alphabeticallyOrderedDivs.each(function (i, item) {
//         $(".basin").append(item);
//         console.log("1")
//     });
// });

// console.log("hi");
// $("#aphaOrder .box").sort(function (a, b) {
//     if ( ($(a).attr("data-site").toLowerCase() > $(b).attr("data-site").toLowerCase()) )  {
//         return 1;
//         console.log("1");
//     } else if ( ($(a).attr("data-site").toLowerCase() == $(b).attr("data-site").toLowerCase()) ){
//         return 0;
//         console.log("0");
//     } else {
//         return -1;
//         console.log("-1");
//     }
// }).each(function () {
//     var elem = $(this);
//     elem.remove();
//     $(elem).appendTo("#aphaOrder");
//     console.log("a");
// });
// console.log("bye");

 $('#alphBnt').on('click', function () {
  var alphabeticallyOrderedDivs = $('.box').sort(function(a, b) {
  			return String.prototype.localeCompare.call($(a).text().toLowerCase(), $(b).text().toLowerCase());
  		});

  var container = $(".bin");
  container.detach().empty().append(alphabeticallyOrderedDivs);
  $('body').append(container);

});
