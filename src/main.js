import $ from 'jquery'
import { SolarAge } from "../src/back.js";



$(document).ready(function() {
  $("form#intake").submit(function(event) {
    event.preventDefault()
    let age = $("#age").val();
    let planet = $("input:radio[name=planet]:checked").val();
    let output = SolarAge(age, planet)

    console.log(age);
    console.log(planet);
    console.log(output);
  })
})
