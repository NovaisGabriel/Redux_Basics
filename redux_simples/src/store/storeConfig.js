import { createStore, combineReducers } from 'redux'

import numerosReducers from  './reducers/numerosReducers'

const reducers = combineReducers({
    numeros: numerosReducers,
    nomes: function(state, action){
        // console.log(state, ' ', action)
        return [
            'Ana',
            'Bia',
            'Carlos'
        ]
    }
})

function storeConfig(){
    return createStore(reducers)
}

export default storeConfig