import { Shipment } from './Shipment';
import { ShipperContext } from '../shippers/ShipperContext';

export class Oversized extends Shipment {
  protected getPrice(): string {
    const context = new ShipperContext(this.getShipperByCode(this.getFromZipCode()));
    return context.execute(this.getWeight(), 'oversized');
  }
}