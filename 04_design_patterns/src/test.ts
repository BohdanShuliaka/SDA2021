import { Client } from "./Client";
import { Gui } from "./Gui";

// Compile Run this file to test

const mock = {
    shipmentId: 1,
    toAddress: 'Lviv',
    fromAddress: 'London',
    toZipCode: '44333',
    fromZipCode: '39333',
    weight: 3000,
    marks: ['Fragile', 'Do Not Leave', 'Return Receipt Requested'],
}
const mock2 = {
    shipmentId: 2,
    toAddress: 'Lviv',
    fromAddress: 'Krakow',
    toZipCode: '23443',
    fromZipCode: '39333',
    weight: 5,
    marks: ['Fragile'],
}

const gui = new Gui(mock);
const client = new Client(gui);

const gui2 = new Gui(mock2);
const client2 = new Client(gui2);
