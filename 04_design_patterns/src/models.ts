export interface IShipment {
    shipmentId: number,
    toAddress: string,
    fromAddress: string,
    toZipCode: string,
    fromZipCode : string,
    weight : number,
    marks: string[],
    cost?: number,
}

export interface GuiInterface {
    state: IShipment
    onEvent: (eventType, callback) => void
    trigger: (eventType: string, state: IShipment) => void
}
