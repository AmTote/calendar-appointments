import React from 'react';
import ReactDOM from 'react-dom';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';
import { createStore } from 'redux'

import AppContainer from './components/App/AppContainer';
import { Provider } from 'react-redux'
import calendarApp from './redux/reducers';
import * as serviceWorker from './serviceWorker';

import './index.css';

declare global {
    interface Window { __REDUX_DEVTOOLS_EXTENSION__: any; }
}

const store = createStore(
	calendarApp,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
	<Provider store={ store as any}>
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<AppContainer />
		</MuiPickersUtilsProvider>
	</Provider>,
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
