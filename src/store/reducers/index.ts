import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  // Add feature reducers here in the future
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
