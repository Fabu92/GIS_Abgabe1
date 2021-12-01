"use strict";
const interpretEingabe = document.getElementById("interpretEingabe");
const priceEingabe = document.getElementById("priceEingabe");
const eingabeButton = document.getElementById("eingabeButton");
const ausgabe = document.getElementById("ausgabe");
eingabeButton.addEventListener("click", eingabeBestätigen);
class EinEvent {
    interpret;
    price;
    constructor(interpret, price) {
        this.interpret = interpret;
        this.price = price;
    }
}
let events = [];
ladArray();
arrayAusgeben(events);
function eingabeBestätigen() {
    let interpetValue = interpretEingabe.value;
    let priceValue = Number(priceEingabe.value);
    let event = new EinEvent(interpetValue, priceValue);
    events.push(event);
    const reiheErstellen = document.createElement("tr");
    const interpretErstellen = document.createElement("td");
    interpretErstellen.textContent = interpetValue;
    const priceErstellen = document.createElement("td");
    priceErstellen.textContent = String(priceValue);
    const löschButton = document.createElement("button");
    löschButton.textContent = "Event Löschen";
    löschButton.addEventListener("click", eventLöschen);
    ausgabe.appendChild(reiheErstellen);
    reiheErstellen.appendChild(interpretErstellen);
    reiheErstellen.appendChild(priceErstellen);
    reiheErstellen.appendChild(löschButton);
    function eventLöschen() {
        reiheErstellen.removeChild(interpretErstellen);
        reiheErstellen.removeChild(priceErstellen);
        reiheErstellen.removeChild(löschButton);
    }
    speicherArray();
}
function speicherArray() {
    let arrayString = JSON.stringify(events);
    localStorage.setItem("event", arrayString);
}
function ladArray() {
    let stringFromLocalStorage = localStorage.getItem("event");
    let arrayIGotStorgae = JSON.parse(stringFromLocalStorage);
    for (let event of arrayIGotStorgae) {
        events[events.length] = event;
    }
}
function arrayAusgeben(events) {
    for (let event of events) {
        let interpetValue = event.interpret;
        let priceValue = event.price;
        const reiheErstellen = document.createElement("tr");
        const interpretErstellen = document.createElement("td");
        interpretErstellen.textContent = interpetValue;
        const priceErstellen = document.createElement("td");
        priceErstellen.textContent = String(priceValue);
        const löschButton = document.createElement("button");
        löschButton.textContent = "Event Löschen";
        löschButton.addEventListener("click", function () {
            eventLöschen(reiheErstellen, event);
        });
        ausgabe.appendChild(reiheErstellen);
        reiheErstellen.appendChild(interpretErstellen);
        reiheErstellen.appendChild(priceErstellen);
        reiheErstellen.appendChild(löschButton);
    }
}
function eventLöschen(löschElement, event) {
    ausgabe.removeChild(löschElement);
    events.splice(events.indexOf(event) - 1, 1);
    speicherArray();
}
//# sourceMappingURL=script.js.map