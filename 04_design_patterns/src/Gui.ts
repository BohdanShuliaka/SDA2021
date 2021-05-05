import { Shipment } from './shipments/Shipment'
import {GuiInterface, IShipment} from "./models";

export class Gui implements GuiInterface {
    state: IShipment;
    listener;

    constructor(state: IShipment) {
        this.state = state;
    }

    onEvent(eventType: string, callback: (state: IShipment) => void) {
        this.listener = {[eventType]: callback }
    }

    trigger(eventType: string, state: IShipment) {
        this.listener[eventType](state)
    }
}
