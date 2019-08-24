const dollarsInput = process.argv[2];

const popBottles = (assetInfo) => {

  if (assetInfo.dollars === undefined) {
    console.log();
    console.log();
    console.log();
    console.log();
    return 0;
  }

  //convert full bottles into emptyBottles and caps
  assetInfo.emptyBottles += assetInfo.fullBottles;
  assetInfo.bottleCaps += assetInfo.fullBottles;
  assetInfo.fullBottles = 0;

  //base case
  if (assetInfo.dollars < 2 && assetInfo.emptyBottles < 2 && assetInfo.bottleCaps < 4) return 0;

  //I feel like theres a way to do these without a tempValue but idk
  let tempValue = 0;

  //Trade dollars for full bottles
  tempValue = Math.floor(assetInfo.dollars / 2);
  assetInfo.dollars -= tempValue * 2;
  assetInfo.fullBottles += tempValue;

  //Trade emptyBottles for full bottles
  tempValue = Math.floor(assetInfo.emptyBottles / 2);
  assetInfo.emptyBottles -= tempValue * 2;
  assetInfo.fullBottles += tempValue;

  //Trade caps for full bottles
  tempValue = Math.floor(assetInfo.bottleCaps / 4);
  assetInfo.bottleCaps -= tempValue * 4;
  assetInfo.fullBottles += tempValue;

  return assetInfo.fullBottles + popBottles(assetInfo);
};

console.log(popBottles({
  dollars: dollarsInput,
  fullBottles: 0,
  obtainedWithEmptyBottles: 0,
  obtainedWithCaps: 0,
  emptyBottles: 0,
  bottleCaps: 0
}));