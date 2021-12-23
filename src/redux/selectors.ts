import {useSelector} from "react-redux";
import {IGlobalState} from "./state";
import {CurrencyState} from "./currencyReducer";


export const selectCurrent =(state:IGlobalState) => state.currency