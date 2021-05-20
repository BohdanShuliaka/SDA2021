// @ts-ignore
import "./View/styles.css";
import {CurrencyController} from "./Controller/CurrencyController";
import {CurrencyModel} from "./Model/CurrencyModel";
import {MainView} from "./View/MainView";

// run app --> npm run webpack --> open dist/index.html
const app = new CurrencyController(new MainView(), new CurrencyModel);
