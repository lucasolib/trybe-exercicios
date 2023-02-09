class _Date {
  day: number;
  month: number;
  year: number;
  
  constructor(d: number, m: number, y: number) {

    const dateStr = `${y}-${m}-${d}`;
    if (new Date(dateStr).getDate() !== d) {
      this.day = 1;
      this.month = 1;
      this.year = 1900;
    } else {
      this.day = d;
      this.month = m;
      this.year = y;
    }
  };
  
  getMonthName(): string {
    const months = [
      'janeiro',
      'fevereiro',
      'março',
      'abril',
      'maio',
      'junho',
      'julho',
      'agosto',
      'setembro',
      'outubro',
      'novembro',
      'dezembro',
    ];
    return months[this.month - 1];
  };

  isLeapYear(): boolean {
    return this.year % 4 === 0;
  }

  compare(date: _Date): number {
    const currentDateStr = `${this.year}-${this.month}-${this.day}`;

    const dateStr = `${date.year}-${date.month}-${date.day}`;

    if (new Date(currentDateStr) > new Date(dateStr)) return 1;
    if (new Date(currentDateStr) < new Date(dateStr)) return -1;

    return 0;
  }

  format(formatting: string): string {
    const conditions: boolean[] = [
      (!formatting.match(/a{2,4}/g)),
      (!formatting.match(/m{2}/g) && !formatting.match(/M{1}/g)),
      (!formatting.match(/d{2}/g)),
    ];

    if (conditions.every((cond) => cond)) {
      throw new Error(`O formato passado é inválido: ${formatting}`);
    }

    const day = this.day > 9 ? this.day.toString() : `0${this.day.toString()}`;
    const month = this.month > 9 
      ? this.month.toString() 
      : `0${this.month.toString()}`;
    const year = this.year.toString();

    const dateFormatting = formatting
      .replace('dd', day).replace('mm', month)
      .replace('M', this.getMonthName()).replace('aaaa', year)
      .replace('aa', year.substr(-2));

    return dateFormatting;
  }

  private static validateDate(day: number, month: number, year: number)
    : boolean {
    const dateStr = `${year}-${month}-${day}`;

    if (new Date(dateStr).getDate() !== day) return false;

    return true;
  }
}