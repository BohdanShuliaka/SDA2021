import {CurrencySubject, ViewChangeSubject} from "../Subject";
import {Observer} from "../Observer";
import {MainView} from "../View/MainView";
import {CurrencyModel} from "../Model/CurrencyModel";

export class CurrencyController extends Observer {
    view: MainView;
    model: CurrencyModel;
    currencyChangeSubject = new CurrencySubject();
    viewChangeSubject = new ViewChangeSubject();

    constructor(view: MainView, model: CurrencyModel) {
        super();
        this.view = view;
        this.model = model;
        this.init()
    }

    init() {
        this.currencyChangeSubject.subscribe(this);
        this.viewChangeSubject.subscribe(this);
        this.view.listenEvents(this.viewChangeSubject);
        this.renderView();
    }

    renderView() {
        this.view.selectedMode.renderView(this.model.currencyPairsState);
        this.view.selectedMode.listenEvents(this.currencyChangeSubject);
    }

    update(payload?: { newValue: number, type: string }) {
        if(payload) {
            this.model.updateState(payload);
        }
        this.renderView();
    }
}
