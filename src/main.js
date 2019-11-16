import $ from 'jquery';
import { SolarAge };

$(document).ready(function() {
  $("form#intake").submit(function(event) {
    event.preventDefault()
    let age = $("#age").val();
    let planet = $("input:radio[name=planet]:checked").val();
    let output = solarAge(age, planet)
    console.log(age);
    console.log(planet);
  })
})
