import { IShipment } from '../models'
import { PacificParcelShipperStrategy } from '../shippers/PacificParcel';
import { ChicagoSprintShipperStrategy } from '../shippers/ChicagoSprint';
import { AirEastShipperStrategy } from '../shippers/AirEast';
import { ShipperStrategy } from '../shippers/ShipperStrategy';

let shipmentId = 1;

export abstract class Shipment {
    protected abstract getPrice(): string;
    state: IShipment;

    constructor(state: IShipment) {
        this.state = state;
    }

    ship(): string {
        return `${this.state.shipmentId}, from ${this.state.fromAddress} ${this.state.fromZipCode} to ${this.state.toAddress} ${this.state.toZipCode}. Price: ${this.getPrice()}`;
    }

    getShipmentId() {
        return shipmentId++;
    }

    protected getShipperByCode(fromZipCode?: string): ShipperStrategy {
        if (!fromZipCode) {
          return new AirEastShipperStrategy();
        }
        switch (fromZipCode.charAt(0)) {
            case '4':
            case '5':
            case '6':
                return new ChicagoSprintShipperStrategy();
            case '7':
            case '8':
            case '9':
                return new PacificParcelShipperStrategy();
            default:
                return new AirEastShipperStrategy()
        }
      }

      protected getWeight() {
        return this.state.weight;
      }

      protected getFromZipCode() {
        return this.state.fromZipCode;
      }
}
