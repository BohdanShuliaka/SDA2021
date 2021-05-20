import {Observer} from "./Observer";

interface ISubject {
    subscribe(observer: Observer):void
    unsubscribe(observer: Observer):void
    notify(news:String):void
}

export class CurrencySubject implements ISubject {
    private observers:Observer[] = [];
    subscribe(observer:Observer) {
        this.observers.push(observer)
    }
    unsubscribe(observer:Observer) {
        this.observers = this.observers.filter((element)=>{
            return observer === element
        })
    }
    notify(payload: any) {
        this.observers.forEach(observer => {
            observer.update(payload);
        })
    }
}

export class ViewChangeSubject implements ISubject {
    private observers:Observer[] = [];
    subscribe(observer:Observer) {
        this.observers.push(observer)
    }
    unsubscribe(observer:Observer) {
        this.observers = this.observers.filter((element)=>{
            return observer === element
        })
    }
    notify(payload?: any) {
        this.observers.forEach(observer => {
            observer.update(payload);
        })
    }
}
