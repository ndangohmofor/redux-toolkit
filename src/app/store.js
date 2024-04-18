import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import cakeReducer from "../features/cake/cakeSlice";
import icecreamReducer from "../features/icecream/icecreamSlice";
import userReducer from "../features/user/userSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

//Setting up redux-persist
const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: icecreamReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const logger = createLogger();

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
