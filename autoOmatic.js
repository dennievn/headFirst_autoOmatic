// in reference to project name in Head First JS


function makeCar(){ //generating function for calling
	var carMakes = ["Tesla", "Audi", "Subaru", "BMW", "Toyota"];
	var carModels = ["Model X", "A4", "Legacy", "M6", "Corolla"];
	var modelYears = ["2015", "1998", "2004", "2016", "2001"];
	var makeColors = ["Red", "Black", "Blue", "Green", "Purple"];
	var convertible = [true, false];
	
	//for combining random values from arrays
	var rand1 = Math.floor(Math.random() * carMakes.length);
	var rand2 = Math.floor(Math.random() * carModels.length);
	var rand3 = Math.floor(Math.random() * modelYears.length);
	var rand4 = Math.floor(Math.random() * makeColors.length);
	var rand5 = Math.floor(Math.random() * 5) + 1; //for # of passengers
	var rand6 = Math.floor(Math.random() * 2); //convertible or nah
	
	//generating new car object, with property values from above arrays
	var car = {
		make: carMakes[rand1],
		model: carModels[rand2],
		year: modelYears[rand3],
		color: makeColors[rand4],
		passengers: rand5,
		convertible: convertible[rand6],
		mileage: 0
	};
		return car;
}
//calling makeCar..
function displayCar(car){
	console.log("Your new car is a " + car.year + " " + car.make + " " + car.model);
}
//..assigning values to carToSell 
var carToSell = makeCar();
//passing the car object returned from makeCar to function displayCar
displayCar(carToSell);
