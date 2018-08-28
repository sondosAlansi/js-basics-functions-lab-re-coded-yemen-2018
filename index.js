// Code your solution in this file!
function distanceFromHqInBlocks(location){
  let hq=42;
   let distance;
  if(hq<location){
  distance=location-hq;
  }
  else{
    distance=hq-location;
  }
  return distance;
}
console.log(distanceFromHqInBlocks(43));
console.log(distanceFromHqInBlocks(50));
console.log(distanceFromHqInBlocks(34));



function distanceFromHqInFeet(location){
  distance=distanceFromHqInBlocks(location)*264;
  return distance;
}
console.log(distanceFromHqInFeet(43));
console.log(distanceFromHqInFeet(50));
console.log(distanceFromHqInFeet(34));

function distanceTravelledInFeet(start,end){
  distance=(end -start)*264;
  return distance;
}
console.log(distanceTravelledInFeet(43, 48));
