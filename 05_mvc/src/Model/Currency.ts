export enum CurrencyCode {
    CanadianDollar = "CAD",
    AustralianDollar = "AUD",
    SwissFranc = "CHF",
    BritishPound = "GBP",
    UnitedStatesDollar = "USD",
    Euro = "EUR"
}

export interface Currency {
    name: string;
    code: CurrencyCode;
    rate: number;
    quantity: number | null,
}

export enum OperationTypes {
    Direct = "direct",
    Reversed = "reversed",
}
