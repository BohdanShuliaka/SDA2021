import { ShipperStrategy } from './ShipperStrategy';

export class PacificParcelShipperStrategy extends ShipperStrategy {
  private static letterPrice: number = 0.51;
  private static packagePrice: number = 0.19;

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
    return (weight * PacificParcelShipperStrategy.letterPrice).toFixed(2);
  }

  private getPackageCost(weight: number): string {
    return (weight * PacificParcelShipperStrategy.packagePrice).toFixed(2);
  }

  private getOversizedCost(weight: number): string {
    return (weight * (0.02 + PacificParcelShipperStrategy.packagePrice)).toFixed(2);
  }
}