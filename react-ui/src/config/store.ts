import { combineReducers } from 'redux';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { createReduxHistoryContext } from "redux-first-history";
import logger from 'redux-logger'
import reducers from '../reducers';

const {
    createReduxHistory,
    routerMiddleware,
    routerReducer
} = createReduxHistoryContext({ history: createBrowserHistory() });

const rootReducer = combineReducers({
	router: routerReducer,
	...reducers
})

// Extra middlewares
let middlewares = [
	routerMiddleware
]

// Development middlewares
if(process.env.NODE_ENV === 'development'){
	middlewares = middlewares.concat([
		logger
	])
}

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
		middlewares
	)
});

export const history = createReduxHistory(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
