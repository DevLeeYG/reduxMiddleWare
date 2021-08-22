//카운터 리덕스 모듈
import { createAction, handleActions } from "redux-actions";

const INCREASE = "counter/INCREASE"; //모듈작성
const DECREASE = "counter/DECREASE";

export const increase = createAction(INCREASE); //액션 함수
export const decrease = createAction(DECREASE);

const initialState = 0;

const counter = handleActions(
  //리듀서
  {
    [INCREASE]: (state) => state + 1, // type INCREASE 상태가 들어가서 플러스 1 이라는뜻
    [DECREASE]: (state) => state - 1,
  },
  initialState //0초기값들어감
);

export default counter;
