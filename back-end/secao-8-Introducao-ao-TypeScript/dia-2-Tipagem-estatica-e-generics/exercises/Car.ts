export default class Car {
  brand: string;
  color: string;
  doors: number;

  constructor(brand: string, color: string, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  honk(): void {
    console.log('O carro buzinou');
  }

  turnOn(): void {
    console.log('O carro ligou');
  }

  turnOff(): void {
    console.log('O carro desligou');
  }

  speedUp(): void {
    console.log('O carro acelerou');
  }

  speedDown(): void {
    console.log('O carro freiou');
  }

  stop(): void {
    console.log('O carro parou');
  }

  turn(direcao: string): void {
    console.log(`O carro virou para a ${direcao}`);
  }
};