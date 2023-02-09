class Student {
  matricula: string;
  name: string;
  prova1: number;
  prova2: number;
  prova3: number;
  prova4: number;
  trabalho1: number;
  trabalho2: number;

  constructor(m: string, n: string, p1: number, p2: number, p3: number, p4, number, t1: number, t2: number) {
    this.matricula = m;
    this.name = n;
    this.prova1 = p1;
    this.prova2 = p2;
    this.prova3 = p3;
    this.prova4 = p4;
    this.trabalho1 = t1;
    this.trabalho2 = t2;
  }

  somaDasNotas() {
    const sum = this.prova1 + this.prova2 + this.prova3 + this.prova4 + this.trabalho1 + this.trabalho2;
    return sum;
  }

  mediaEstudante() {
    const sum = this.somaDasNotas();
    return sum / 6;
  }
}
