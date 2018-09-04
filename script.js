const accBtn = $('#accordion-code-btn');
accBtn.on('click', displayAccCode)
const flexBtn = $('#flex-cards-code-btn');
flexBtn.on('click', displayFlexCardCode)
const mobileBtn = $('#mobile-code-btn');
mobileBtn.on('click', displayMobileCode)

function displayAccCode() {
  $('#accordion-codepen').toggleClass('show-accordion-code')
}


function displayFlexCardCode() {
  $('#flex-cards-codepen').toggleClass('show-flex-code')
}

function displayMobileCode() {
  $('#mobile-codepen').toggleClass('show-mobile-code')
}