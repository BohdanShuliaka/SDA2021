// @ts-ignore
import SliderViewTmp from "./SliderView.handlebars";
import {CurrencySubject} from "../Subject";
import {CurrencyState} from "../Model/State";

export class SliderView {
    getTemplate(payload: { values: CurrencyState[] }) {
        const sliderView = document.createElement('div');
        sliderView.classList.add('inputWrapper');
        sliderView.innerHTML = SliderViewTmp(payload);

        return sliderView;
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
        const baseCurrList = document.querySelectorAll('.curr-base-rate-input');
        const pairedCurrList = document.querySelectorAll('.curr-paired-rate-input');

        baseCurrList.forEach(selectElement => {
            selectElement.addEventListener('change', (event: Event) => {
                const newValue = Number((<HTMLInputElement>event.target).value);
                const type = (<HTMLInputElement>event.target).classList[1];
                subject.notify({ newValue, type })
            });
        })

        pairedCurrList.forEach(selectElement => {
            selectElement.addEventListener('change', (event: Event) => {
                const newValue = Number((<HTMLInputElement>event.target).value);
                const type = (<HTMLInputElement>event.target).classList[1];
                subject.notify({ newValue, type })
            });
        })
    }
}
