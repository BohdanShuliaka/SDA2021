import { ShipperStrategy } from './ShipperStrategy';

export class AirEastShipperStrategy extends ShipperStrategy {
  private static letterPrice: number = 0.39;
  private static packagePrice: number = 0.25;

  public getCost(weight: number, type: string) {
    if (type === 'letter') {
      return AirEastShipperStrategy.getLetterCost(weight);
    }

    if (type === 'package') {
      return AirEastShipperStrategy.getPackageCost(weight);
    }

    return AirEastShipperStrategy.getOversizedCost(weight);
  }

  private static getLetterCost(weight: number): string {
    return (weight * AirEastShipperStrategy.letterPrice).toFixed(2);
  }

  private static getPackageCost(weight: number): string {
    return (weight * AirEastShipperStrategy.packagePrice).toFixed(2);
  }

  private static getOversizedCost(weight: number): string {
    return (10 + (weight * AirEastShipperStrategy.packagePrice)).toFixed(2);
  }
}
