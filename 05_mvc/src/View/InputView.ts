// @ts-ignore
import InputViewTmp from "./InputView.handlebars";
import {CurrencySubject} from "../Subject";
import {CurrencyState} from "../Model/State";

export class InputView {
    getTemplate(payload: { values: CurrencyState[] }) {
        const inputView = document.createElement('div');
        inputView.classList.add('inputWrapper')
        inputView.innerHTML = InputViewTmp(payload);

        return inputView;
    }

    renderView(state: CurrencyState[]) {
        const wrapper = <HTMLDivElement>document.querySelector('.main-content');
        wrapper.innerHTML = '';
        const payload = {
            values: state
        };
        wrapper.appendChild(this.getTemplate(payload))
    }

    listenEvents(subject: CurrencySubject) {
        const inputsList = document.querySelectorAll('.curr-base-rate-input');
        inputsList.forEach(selectElement => {
            selectElement.addEventListener('change', (event: Event) => {
                const newValue = Number((<HTMLInputElement>event.target).value);
                const type = (<HTMLInputElement>event.target).classList[1];
                subject.notify({ newValue, type })
            });
        })
    }
}
