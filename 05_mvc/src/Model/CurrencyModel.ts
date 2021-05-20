import {DEFAULT_CURRENCY_RATES} from "./Rates";
import {Currency, OperationTypes} from "./Currency";
import {CurrencyState} from "./State";

export class CurrencyModel {
    rates = DEFAULT_CURRENCY_RATES;
    currencyPairsState: CurrencyState[] = [];

    constructor() {
        this.getPairs();
        this.calculateValues();
    }

    getPairs() {
        this.currencyPairsState = this.rates.reduce((acc, curr, idx, arr): CurrencyState[] => {
            const nextElToPair = arr[idx+1];
            const pair = nextElToPair ? {
                initialCurr: {
                    ...arr[0],
                    quantity: Number(100.00)
                },
                pairedCurr: {
                    ...nextElToPair,
                    quantity: null
                },
            } : null;

            return pair ? [ ...acc, pair ] : acc;
        }, [] as CurrencyState[]).filter(pair => pair);
    }

    calculateValues(operationType?: string) {
        this.currencyPairsState = this.currencyPairsState.reduce((acc: CurrencyState[], curr: { initialCurr: Currency; pairedCurr: Currency; }): CurrencyState[] => {
            let {  initialCurr, pairedCurr } = curr;

            if(operationType === OperationTypes.Reversed) {
                initialCurr = {
                    ...initialCurr,
                    quantity: Number(((pairedCurr.quantity as number) * (1 / pairedCurr.rate)).toFixed(2)),
                }
            } else {
                pairedCurr = {
                    ...pairedCurr,
                    quantity: Number(((initialCurr.quantity as number) * pairedCurr.rate).toFixed(2)),
                }
            }

            return [ ...acc, { initialCurr, pairedCurr }]
        }, [])
    }

    updateState({ newValue, type }: { newValue: number, type: string }) {
        const currType = type.split('-')[0];
        const operationType = type.split('-')[1];
        const changedCurrIdx = this.currencyPairsState.findIndex(item => item.pairedCurr.code === currType);
        const changedCurr = this.currencyPairsState.slice(changedCurrIdx)[0];
        let newCurrPayload;
        if(operationType === OperationTypes.Direct) {
            newCurrPayload = {
                ...changedCurr,
                initialCurr: {
                    ...changedCurr.initialCurr,
                    quantity: Number(newValue.toFixed(2))
                }
            };
        } else {
            newCurrPayload = {
                ...changedCurr,
                pairedCurr: {
                    ...changedCurr.pairedCurr,
                    quantity: Number(newValue.toFixed(2))
                }
            };
        }

        this.currencyPairsState.splice(changedCurrIdx, 1, newCurrPayload);
        this.calculateValues(operationType);
    }
}
