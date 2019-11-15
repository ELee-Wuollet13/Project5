import $ from 'jquery';
// import 'solarAge';

$(document).ready(function() {
  $("form#intake").submit(function(event) {
    let age = ("#age").val();
    console.log(age);

    event.preventDefault()
  })
})
