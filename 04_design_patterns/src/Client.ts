import { Shipment } from './shipments/Shipment'
import { Gui } from './Gui'
import { Letter } from './shipments/Letter';
import { Package } from './shipments/Package';
import { Oversized } from './shipments/Oversized';
import { IShipment } from './models';
import {ShipmentMarksDecorator} from "./shipments/ShipmentDecorator";

export class Client {
    gui: Gui;

    constructor(gui: Gui) {
        this.gui = gui;
        gui.onEvent('ship', this.onShip);
        gui.trigger('ship', this.gui.state)
    }

    onShip(shipment: IShipment) {
        console.log('onShip')
        const shipmentInstance = Client.getShipment(shipment);
        const shipmentMarks = new ShipmentMarksDecorator(shipmentInstance, shipment.marks);
        console.log(shipmentMarks.ship())
    }

    private static getShipment(state: IShipment) {
        if (state.weight <= 15) {
          return new Letter(state);
        }

        if (state.weight <= 160) {
          return new Package(state);
        }
        return new Oversized(state);
      }
}
