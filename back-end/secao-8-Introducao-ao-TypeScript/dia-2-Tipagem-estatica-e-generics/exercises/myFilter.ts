type callBackFilter<T> = (value: T, index?: number, array?: Array<T>) => boolean;

function myFilter<T>(array: Array<T>, callBack: callBackFilter<T>):Array<T> {
  const newArray: Array<T> = [];
  for (let index = 0; index < array.length; index += 1) {
    const element = array[index];
    if (callBack(element, index, array)) {
      newArray.push(element);
    }
  } return newArray;
}