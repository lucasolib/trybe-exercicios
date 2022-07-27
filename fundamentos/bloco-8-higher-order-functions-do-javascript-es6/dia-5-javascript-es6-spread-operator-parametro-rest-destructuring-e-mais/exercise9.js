
const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};

const monthsOfTheYear = (object) => {
  const { spring, summer, autumn, winter} = object;
  return [...spring, ...summer, ...autumn, ...winter];
};

console.log(monthsOfTheYear(yearSeasons));