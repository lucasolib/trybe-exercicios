const sum = (...numbers) => {
  const sumOfNumbers = numbers.reduce((soma, number) => {
    return soma + number;
  });
  return sumOfNumbers
};

console.log(sum(3, 4, 8, 102, 123, 504));