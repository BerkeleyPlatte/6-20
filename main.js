var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

let integersB = integers
  .sort((curr, next) => curr - next)
  .reverse()
  .filter(num => num < 20)
  .map(num => num * 1.5 - 1)
  .reduce((curr, next) => curr + next);

  console.log(integersB)

//   NOTE:
//   .sort((curr, next) => curr - next).reverse()
//   =
//   sort((curr, next), => next - curr)