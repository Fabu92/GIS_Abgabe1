const interpretEingabe: HTMLInputElement = <HTMLInputElement> document.getElementById("interpretEingabe");
const priceEingabe: HTMLInputElement = <HTMLInputElement> document.getElementById("priceEingabe");
const eingabeButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("eingabeButton");
const ausgabe: HTMLDivElement = <HTMLDivElement> document.getElementById("ausgabe");
eingabeButton.addEventListener("click", eingabeBestätigen);

class EinEvent {
    interpret: string;
    price: number;
    constructor(interpret: string, price: number) {
        this.interpret = interpret;
        this.price = price;
    }
}

let events: EinEvent [] = [];
ladArray();
arrayAusgeben(events);

function eingabeBestätigen (): void {
    let interpetValue: string = interpretEingabe.value;
    let priceValue: number = Number(priceEingabe.value);

    let event: EinEvent = new EinEvent(interpetValue, priceValue);
    events.push(event);

    const reiheErstellen: HTMLTableRowElement = document.createElement("tr");
    const interpretErstellen: HTMLTableCellElement = document.createElement("td");
    interpretErstellen.textContent = interpetValue;
    const priceErstellen: HTMLTableCellElement = document.createElement("td");
    priceErstellen.textContent = String(priceValue);
    const löschButton: HTMLButtonElement = document.createElement("button");
    löschButton.textContent = "Event Löschen";
    löschButton.addEventListener("click", eventLöschen);

    ausgabe.appendChild(reiheErstellen);
    reiheErstellen.appendChild(interpretErstellen);
    reiheErstellen.appendChild(priceErstellen);
    reiheErstellen.appendChild(löschButton);
    function eventLöschen(): void {
        reiheErstellen.removeChild(interpretErstellen);
        reiheErstellen.removeChild(priceErstellen);
        reiheErstellen.removeChild(löschButton);
    }
    speicherArray();
}

function speicherArray(): void {
    let arrayString: string = JSON.stringify(events);
    localStorage.setItem("event", arrayString);
}

function ladArray(): void {
    let stringFromLocalStorage: string = localStorage.getItem("event");
    let arrayIGotStorgae: EinEvent [] = JSON.parse(stringFromLocalStorage);
    for (let event of arrayIGotStorgae) {
        events[events.length] = event;
    }
}

function arrayAusgeben(events: Array<EinEvent>): void {
    for (let event of events) {
    let interpetValue: string = event.interpret;
    let priceValue: number = event.price;

    const reiheErstellen: HTMLTableRowElement = document.createElement("tr");
    const interpretErstellen: HTMLTableCellElement = document.createElement("td");
    interpretErstellen.textContent = interpetValue;
    const priceErstellen: HTMLTableCellElement = document.createElement("td");
    priceErstellen.textContent = String(priceValue);
    const löschButton: HTMLButtonElement = document.createElement("button");
    löschButton.textContent = "Event Löschen";
    löschButton.addEventListener("click", function (): void {
        eventLöschen(reiheErstellen, event);
    });

    ausgabe.appendChild(reiheErstellen);
    reiheErstellen.appendChild(interpretErstellen);
    reiheErstellen.appendChild(priceErstellen);
    reiheErstellen.appendChild(löschButton);

}
}
function eventLöschen(löschElement: HTMLDivElement, event: EinEvent): void {
    ausgabe.removeChild(löschElement);
    events.splice(events.indexOf(event) - 1, 1);
    speicherArray();
}