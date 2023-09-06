"use strict";

// create separate JS object literals for each shop location

const storeHours = ['6am', '7am','8am','9am', '10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
const numOfCust = Math.random() * storeHours.length;


function Location(city, minCust, maxCust, avgCookie){
  this.city = city;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
}

Location.prototype.printSumary = function(){
  console.log(`${this.city}`);
};
const Seattle = new Location("Seattle","23","65","6.3");
console.log(Seattle);
