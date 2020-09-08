import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import {createStore , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import App from './component/App'
import reducer from './reducer'

const store = createStore(reducer,applyMiddleware(thunk))

ReactDom.render(
    <Provider store={store}>
            <App/>
    </Provider>,
    document.querySelector('#root')
)
