class Vehicle {
  #fuel
  static totalVehicles = 0;
  constructor(name, fuel = 0) {
    this.name = name;
    this.#fuel = fuel;
  }

  get fuel() {
    return this.#fuel;
  }

  set fuel(value) {
    if (value < 0) {
      alert('К сожалению, вы не можете налить отрицательное числo!');
      return;
    }
    if (value < 100) {
      alert('К сожалению, вы не можете налить больше 100!');
      return;
    }
  }

  drive(num = 10) {
    return this.#fuel -= num;
  }

  refuel(num = 10) {
    return this.#fuel += num;
  }

  getInfo() {
    return {
      name: this.name,
      fuel: this.#fuel
    };
  }
}

class Truck extends Vehicle {
  constructor(name, fuel, cargoWeight) {
    super(name, fuel);
    this.cargoWeight = cargoWeight;
  }

  drive(num = 20) {
    return this.fuel -= num;
  }

  refuel(num = 20) {
    return this.fuel += num;
  }
}

const fleet = [];

const form = document.getElementById('form');
form.addEventListener('submit', addVehicle);

function addVehicle(event) {
  event.preventDefault();

  const inputCarName = document.getElementById('car-name');
  const carSelector = document.getElementById('selector-car');
  const inputGas = document.getElementById('gas');
  console.log(inputCarName.value);

  const selectorCar = document.getElementById('selector-car');

  console.log(selectorCar.value);
  if (selectorCar.value === 'car') {
    fleet.push(new Vehicle(inputCarName.value, inputGas.value));
  } else {
    fleet.push(new Truck(inputCarName.value, inputGas.value));
  }

  renderFleet();
}

function removeVehicle(index) {
  fleet = fleet.filter((index, i) => i !== index);
  return fleet;
}

function driveVehicle (index) {
  fleet[index].drive();

}

function refuelVehicle (index) {
  fleet[index].refuel();
}


function renderFleet () {
  itemList = document.getElementById('item-list');
  itemList.innerHtml = " ";

  fleet.forEach(item => renderCart(item));

  list.prepend(...)

}


