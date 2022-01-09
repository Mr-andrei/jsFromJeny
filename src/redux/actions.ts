export enum ACTIONS_TYPE {
    CHANGE_CURRENCY_FIELD_TYPE = 'CurrencyExchange/CHANGE_CURRENCY_FIELD_TYPE',
    CHANGE_CHANGE_ACTION = 'CurrencyExchange/CHANGE_CHANGE_ACTION',
    CHANGE_CURRENT_CURRENCY = 'CurrencyExchange/CHANGE_CURRENT_CURRENCY',
}


export type ChangeCurrencyFieldType = {
    type: "CHANGE_CURRENCY_FIELD_TYPE"
    payload: {
        amountOfBYN: string
        amountOfCurrency: string
    }
};


export const ChangeCurrencyFieldAC = (amountOfBYN: string, amountOfCurrency: string): ChangeCurrencyFieldType => {
    return {
        type: "CHANGE_CURRENCY_FIELD_TYPE",
        payload: {
            amountOfBYN,
            amountOfCurrency,
        },
    }

};

export type ChangeAction = {
    type: "CHANGE_CHANGE_ACTION"
    payload: {
        isBuying: boolean
        amountOfBYN: string
        amountOfCurrency: string
    }
};


export const ChangeActionAC = (isBuying: boolean): ChangeAction => {
    return{
        type:"CHANGE_CHANGE_ACTION",
        payload:{
            isBuying,
            amountOfBYN:"",
            amountOfCurrency:"",
        }
    }
};

export type ChangeCurrentCurrencyType = {
    type: "CHANGE_CURRENT_CURRENCY"
    payload: {
        currentCurrency: string
        amountOfBYN: string
        amountOfCurrency: string
    }
};


export const ChangeCurrentCurrencyAC = (currentCurrency: string): ChangeCurrentCurrencyType => {
    return{
        type:"CHANGE_CURRENT_CURRENCY",
        payload:{
            currentCurrency,
            amountOfBYN: "",
            amountOfCurrency: ""
        }
    }
};

export type CurrencyReducersTypes = ChangeCurrencyFieldType | ChangeAction | ChangeCurrentCurrencyType;