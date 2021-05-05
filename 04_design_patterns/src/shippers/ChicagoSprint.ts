import { ShipperStrategy } from './ShipperStrategy';

export class ChicagoSprintShipperStrategy extends ShipperStrategy {
  private static letterPrice: number = 0.42;
  private static packagePrice: number = 0.20;

  public getCost(weight: number, type: string) {
    if (type === 'letter') {
      return this.getLetterCost(weight);
    }

    if (type === 'package') {
      return this.getPackageCost(weight);
    }

    return this.getOversizedCost(weight);
  }

  private getLetterCost(weight: number): string {
    return (weight * ChicagoSprintShipperStrategy.letterPrice).toFixed(2);
  }

  private getPackageCost(weight: number): string {
    return (weight * ChicagoSprintShipperStrategy.packagePrice).toFixed(2);
  }

  private getOversizedCost(weight: number): string {
    return '0';
  }
}