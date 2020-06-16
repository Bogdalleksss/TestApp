import React from 'react'
import Navigation from './Navigation'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './src/reducers'

const store = createStore(reducers, applyMiddleware(ReduxThunk))

export default App = () => {
    return (
        <Provider store={store}>
            <Navigation/>
        </Provider>
    )
}