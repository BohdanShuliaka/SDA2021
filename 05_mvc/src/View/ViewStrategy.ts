import {SliderView} from './SliderView'
import {InputView} from './InputView'

export class ViewStrategy {
    constructor(viewType?: string) {
        switch (viewType) {
            case 'input':
                return new InputView();
            case 'slider':
                return new SliderView();
            default:
                return new InputView();
        }
    }
}
