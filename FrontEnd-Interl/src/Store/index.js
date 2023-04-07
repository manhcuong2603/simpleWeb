import { combineReducers, configureStore } from "@reduxjs/toolkit";
import myListReducer from "./MyReducer";
import userReducer from "./userSlice";
import { persistStore, persistReducer, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, FLUSH } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const persistConfig = {
    key: 'root',
    storage,
}
const rootReducer = combineReducers({
    myListReducer: myListReducer,
    userReducer: userReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer)


//store
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            }
        })
})

//export store
export let persistor = persistStore(store)