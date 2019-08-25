const dollarsInput = process.argv[2];

const popBottles = (assetInfo) => {

  if (assetInfo.dollars === undefined) {
    return 0;
  }

  //convert full bottles into emptyBottles and caps
  assetInfo.emptyBottles += assetInfo.fullBottles;
  assetInfo.bottleCaps += assetInfo.fullBottles;
  assetInfo.totalFullBottles += assetInfo.fullBottles;
  assetInfo.fullBottles = 0;

  //base case
  if (assetInfo.dollars < 2 && assetInfo.emptyBottles < 2 && assetInfo.bottleCaps < 4) return assetInfo;

  //I feel like theres a way to do these without a tempValue but idk
  let tempValue = 0;

  //Trade dollars for full bottles
  tempValue = Math.floor(assetInfo.dollars / 2);
  assetInfo.dollars -= tempValue * 2;
  assetInfo.fullBottles += tempValue;

  //Trade emptyBottles for full bottles
  tempValue = Math.floor(assetInfo.emptyBottles / 2);
  assetInfo.emptyBottles -= tempValue * 2;
  assetInfo.boughtWithEmptyBottles += tempValue;
  assetInfo.fullBottles += tempValue;

  //Trade caps for full bottles
  tempValue = Math.floor(assetInfo.bottleCaps / 4);
  assetInfo.bottleCaps -= tempValue * 4;
  assetInfo.boughtWithCaps += tempValue;
  assetInfo.fullBottles += tempValue;

  
  return popBottles(assetInfo);
};

const finalResults = popBottles({
  dollars: dollarsInput,
  totalFullBottles: 0,
  fullBottles: 0,
  boughtWithEmptyBottles: 0,
  boughtWithCaps: 0,
  emptyBottles: 0,
  bottleCaps: 0
});


console.log('TOTAL BOTTLES:', finalResults.totalFullBottles);
console.log('REMAINING EMPTY BOTTLES:', finalResults.emptyBottles);
console.log('REMAINING CAPS:', finalResults.bottleCaps);
console.log('TOTAL EARNED FROM:');
console.log('  BOTTLES:', finalResults.boughtWithEmptyBottles);
console.log('  CAPS:', finalResults.boughtWithCaps);