type Slices =  4 | 6 | 8;

export default interface Pizza {
  flavor: string;
  slices: Slices;
}

const calabresa: Pizza = {
  flavor: 'Calabresa',
  slices: 8
}

const marguerita: Pizza = {
  flavor: 'Marguerita',
  slices: 6
}

const nutella: Pizza = {
  flavor: 'Nutella',
  slices: 4
}