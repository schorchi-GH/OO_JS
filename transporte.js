function Veiculo(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
}

Veiculo.prototype.displayInfo = function() {
    console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`);
};

function Carro(marca, modelo, ano, portas) {
    Veiculo.call(this, marca, modelo, ano); // Chamada equivalente ao `super`
    this.portas = portas;
}

Carro.prototype = Object.create(Veiculo.prototype);
Carro.prototype.constructor = Carro;

Carro.prototype.displayInfo = function() {
    Veiculo.prototype.displayInfo.call(this); // Chamada equivalente ao `super.displayInfo()`
    console.log(`Portas: ${this.portas}`);
};

function Moto(marca, modelo, ano, cilindradas) {
    Veiculo.call(this, marca, modelo, ano); // Chamada equivalente ao `super`
    this.cilindradas = cilindradas;
}

Moto.prototype = Object.create(Veiculo.prototype);
Moto.prototype.constructor = Moto;

Moto.prototype.displayInfo = function() {
    Veiculo.prototype.displayInfo.call(this); // Chamada equivalente ao `super.displayInfo()`
    console.log(`Cilindradas: ${this.cilindradas}`);
};

const carro1 = new Carro('Toyota', 'Corolla', 2020, 4);
const moto1 = new Moto('Honda', 'CB500', 2021, 500);
const carro2 = new Carro('Volkswagen', 'Golf', 2019, 4);

carro1.displayInfo();
moto1.displayInfo();
carro2.displayInfo();
