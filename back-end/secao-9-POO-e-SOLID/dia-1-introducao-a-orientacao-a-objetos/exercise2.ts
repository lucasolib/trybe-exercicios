class Client {
  name: string;

  constructor(n: string) {
    this.name = n;
  }
}

class Item {
  name: string;
  price: number;

  constructor(n: string, p: number) {
    this.name = n;
    this.price = p;
  }
}

class Sale {
  client: Client;
  item: Item[];
  paymentMethod: string;
  discont: number;

  constructor(c: Client, i: Item[], p: string, d: number) {
    this.client = c;
    this.item = i;
    this.paymentMethod = p;
    this.discont = d;
  }

  calculateTotal(): number {
    return this.item
      .reduce((previousValue, item) => {
        const total = previousValue + item.price;

        return total;
      }, 0);
  }

  calculateTotalWithDiscount(): number {
    return this.calculateTotal() * (1 - this.discont);
  }

}
