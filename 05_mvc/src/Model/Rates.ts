import { Currency, CurrencyCode } from './Currency';

export const DEFAULT_CURRENCY_RATES: Currency[] = [
    {
        "name": "Euro",
        "code": CurrencyCode.Euro,
        "rate": 1,
        "quantity": null,
    },
    {
        "name": "US Dollar",
        "code": CurrencyCode.UnitedStatesDollar,
        "rate": 1.19967,
        "quantity": null,
    },
    {
        "name": "British Pound",
        "code": CurrencyCode.BritishPound,
        "rate": 0.896902,
        "quantity": null,
    },
    {
        "name": "Swiss Francs",
        "code": CurrencyCode.SwissFranc,
        "rate": 1.09822,
        "quantity": null,
    },
    {
        "name": "Australian Dollar",
        "code": CurrencyCode.AustralianDollar,
        "rate": 1.62609,
        "quantity": null,
    },
    {
        "name": "Canadian Dollar",
        "code": CurrencyCode.CanadianDollar,
        "rate": 1.5515,
        "quantity": null,
    }
];
