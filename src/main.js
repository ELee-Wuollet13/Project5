import $ from 'jquery';

$(document).ready(function() {
  $("form#intake").submit(function(event) {
    let age = ("#age").val();
    console.log(age);
    
    event.preventDefault()
  })
})
