var five = require("../");
var board = new five.Board();

board.on("ready", function() {
  var thermometer = new five.Thermometer({
    controller: "TH02"
  });

  thermometer.on("change", function() {
    console.log("Thermometer");
    console.log("  celsius           : ", this.celsius);
    console.log("  fahrenheit        : ", this.fahrenheit);
    console.log("  kelvin            : ", this.kelvin);
    console.log("--------------------------------------");
  });
});
