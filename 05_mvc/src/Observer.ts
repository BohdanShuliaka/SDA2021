
interface IObserver {
    update(news:string):void
}

export class Observer implements IObserver {
    constructor() {}
    update(payload: any) {
        console.log(payload, `observer triggered`)
    }
}
