import $ from 'jquery'
import { SolarAge } from "../src/back.js";



$(document).ready(function() {
  $("form#intake").submit(function(event) {
    event.preventDefault()
    let age = $("#age").val();
    let planet = $("input:radio[name=planet]:checked").val();
    let output = new SolarAge(age, planet)

     $("#output").html("<h3> Your age on another world </h3><br><p>You are " + output.age + " here on earth. But on " + output.planet + " you are " + output.localAge + ".");
    console.log(age);
    console.log(planet);
    console.log(output);
  })
})
