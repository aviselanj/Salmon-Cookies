"use strict";
const locationContainerElem = document.getElementById("location-container");

const Seattle = {
  city: "Seattle",
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  custPerHour: [],
  cookiePerHour: [],
  cookiePerDay: 0,
  storeHours:  ['6am', '7am','8am','9am', '10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm',"8pm"],
  getDailyStats: function(){
    const randomNum = getRandomInt(0, this.storeHours.length);
    const randomCookiePerHr = this.storeHours[randomNum];
    this.cookiePerHour = randomCookiePerHr;
  },
  render: function(){
    const eachCityContainerElem = document.createElement("div");

    const nameElm = document.createElement("p");
    nameElm.textContent = `City: ${this.city}`;
    eachCityContainerElem.appendChild(nameElm);

    const minCust = document.createElement("p");
    minCust.textContent = `Min / Cust: ${this.minCust}`;
    eachCityContainerElem.appendChild(minCust);

    const maxCust = document.createElement("p");
    maxCust.textContent = `Max / Cust: ${this.maxCust}`;
    eachCityContainerElem.appendChild(minCust);

    const avgCookie = document.createElement("p");
    avgCookie.textContent = `Average Cookie Sales: ${this.avgCookie}`;
    eachCityContainerElem.appendChild(avgCookie);

    const storeHours = document.createElement("p");
    storeHours.textContent = `Store Hours: ${this.storeHours}`;
    eachCityContainerElem.appendChild(storeHours);

    locationContainerElem.appendChild(eachCityContainerElem);
  }
};

const Tokyo = {
  city: "Tokyo",
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  getDailyCookies: function () {
    const randomNumber = getRandomInt(0, this.storeHours.length);

    const randomStoreHours = this.storeHours[randomNumber];

    this.dailyInterest = randomStoreHours;
  },
  render: function(){
    const eachCityContainerElem = document.createElement("div");

    const nameElm = document.createElement("p");
    nameElm.textContent = `City: ${this.city}`;
    eachCityContainerElem.appendChild(nameElm);

    const minCust = document.createElement("p");
    minCust.textContent = `Min / Cust: ${this.minCust}`;
    eachCityContainerElem.appendChild(minCust);

    const maxCust = document.createElement("p");
    maxCust.textContent = `Max / Cust: ${this.maxCust}`;
    eachCityContainerElem.appendChild(minCust);

    const avgCookie = document.createElement("p");
    avgCookie.textContent = `Average Cookie Sales: ${this.avgCookie}`;
    eachCityContainerElem.appendChild(avgCookie);

    const storeHours = document.createElement("p");
    storeHours.textContent = `Store Hours: ${this.storeHours}`;
    eachCityContainerElem.appendChild(storeHours);

    locationContainerElem.appendChild(eachCityContainerElem);
  }

};
const Dubai = {
  city: "Dubai",
  minCust: 11,
  maxCust: 38,
  avgCookie: 3.7
};
const Paris = {
  city: "Paris",
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3
};
const Lima = {
  city: "Lima",
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6
};





Location.prototype.printSumary = function(){
  console.log(`${this.city}`);
};

function getRandomInt(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
const cities = [Seattle, Tokyo, Dubai, Paris, Lima];

for(let i = 0; i < cities.length; i++){
  cities[i].getDailyCookies();
  cities[i].render();
}
