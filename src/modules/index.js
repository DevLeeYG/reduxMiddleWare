import counter from "./counter";
import { combineReducers } from "redux";
import sample from "./sample";
import loading from "./loading";

const rootReducer = combineReducers({
  //루트리듀서만들기
  counter,
  sample,
  loading,
});

export default rootReducer;

// const counter = handleActions(
//     {
//       [INCREASE]: (state) => state + 1, // type INCREASE 상태가 들어가서 플러스 1 이라는뜻
//       [DECREASE]: (state) => state - 1,
//     },
//     initialState
//   );
