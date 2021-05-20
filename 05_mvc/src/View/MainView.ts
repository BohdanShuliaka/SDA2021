// @ts-ignore
import MainViewTmp from "./main.handlebars";
import {ViewStrategy} from "./ViewStrategy";
import {ViewChangeSubject} from "../Subject";
import {SliderView} from "./SliderView";
import {InputView} from "./InputView";

export class MainView {
    viewMode = 'input';
    selectedMode: any;

    constructor() {
        document.body.innerHTML = '';
        const payload = {
            name: 'Currency exchange rates'
        };
        document.body.appendChild(this.getTemplate(payload))
        this.selectedMode = this.selectView();
    }

    selectView() {
        return new ViewStrategy(this.viewMode);
    }

    getTemplate(tmpData: { name: string }) {
        const appView = document.createElement('div');
        appView.classList.add('app')
        appView.innerHTML = MainViewTmp(tmpData);

        return appView;
    }

    listenEvents(subject: ViewChangeSubject) {
        const inputViewRadio = <HTMLInputElement>document.querySelector('#inputView');
        const sliderViewRadio = <HTMLInputElement>document.querySelector('#sliderView');
        const handler = (event: Event) => {
            this.viewMode = (<HTMLInputElement>event.target).value
            this.selectedMode = this.selectView();
            subject.notify()
        }

        inputViewRadio.addEventListener('change', handler);
        sliderViewRadio.addEventListener('change', handler);
    }
}
