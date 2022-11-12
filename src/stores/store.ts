import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import accountListReducer from './slices/account.slices'

const rootReducer = combineReducers({
    accountList: accountListReducer,
})

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

