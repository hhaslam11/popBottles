const dollars = process.argv[2];

const popBottles = (dollars, fullBottles = 0, emptyBottles = 0, bottleCaps = 0) => {

  if (dollars === undefined) {
    console.log();
    console.log();
    console.log();
    console.log();
    return 0;
  }
  //convert full bottles into emptyBottles and caps
  emptyBottles += fullBottles;
  bottleCaps += fullBottles;
  fullBottles = 0;

  //base case
  if (dollars < 2 && emptyBottles < 2 && bottleCaps < 4) return 0;

  //I feel like theres a way to do these without a tempValue but idk
  let tempValue = 0;

  //Trade dollars for full bottles
  tempValue = Math.floor(dollars / 2);
  dollars -= tempValue * 2;
  fullBottles += tempValue;

  //Trade emptyBottles for full bottles
  tempValue = Math.floor(emptyBottles / 2);
  emptyBottles -= tempValue * 2;
  fullBottles += tempValue;

  //Trade caps for full bottles
  tempValue = Math.floor(bottleCaps / 4);
  bottleCaps -= tempValue * 4;
  fullBottles += tempValue;

  return fullBottles + popBottles(dollars, fullBottles, emptyBottles, bottleCaps);
};

console.log(popBottles(dollars));