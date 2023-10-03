// Code your solution in this file!
function distanceFromHqInBlocks(street){
    return Math.abs(street-42)
}

function distanceFromHqInFeet(street){
    return 264 * distanceFromHqInBlocks(street)
}

function distanceTravelledInFeet(street1, street2){
    return Math.abs ((street1-street2)*264)
}

function calculatesFarePrice(street1, street2){
    const distanceInFeet = Math.abs((street1-street2)*264);
   if (distanceInFeet <400) return 0;
   else if (distanceInFeet <2000) return (distanceInFeet - 400)* 0.02;
   else if (distanceInFeet <2500) return 25;
   else if (distanceInFeet >2500) return "cannot travel that far";
   



}
