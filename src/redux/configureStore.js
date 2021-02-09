import { createStore, combineReducers } from "redux";
import todoListReducer from "./todoListReducer";
export default function configureStore() {
  const store = createStore(
    combineReducers({
      todoListState: todoListReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
}
