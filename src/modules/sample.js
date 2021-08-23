import { handleActions } from "redux-actions";
import * as api from "../lib/api";

const GET_POST = "sample/GET_POST";
const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS"; //액션 타입
const GET_POST_FAILURE = "sample/GET_POST_FAILURE";

const GET_USERS = "sample/GET_USERS";
const GET_USERS_SUCCESS = "sample/GET_USERS_SUCCESS";
const GET_USERS_FAILURE = "sample/GET_USERS_FAILURE";

//청크 함수 생성 청크는 함수내보에서 시작할때, 성공, 실패, 할때 다른액션 디스패치

export const getPost = (id) => async (dispatch) => {
  dispatch({ type: GET_POST });

  try {
    const response = await api.getPost(id);
    dispatch({
      type: GET_POST_SUCCESS,
      Payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: GET_POST_FAILURE,
      payload: e,
      error: true,
    });
    throw e;
  }
};

export const getUusers = () => async (dispatch) => {
  //액션 생성함수
  dispatch({ type: GET_USERS }); //요청시작한것을 알림

  try {
    const response = await api.getUsers();
    dispatch({
      type: GET_USERS_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: GET_USERS_FAILURE,
      payload: e,
      error: true,
    });
    throw e;
  }
};

const initialState = {
  //초기의 상태를 선언
  loading: {
    GET_POST: false,
    GET_USERS: false,
  },
  post: null,
  users: null,
};

const sample = handleActions({
  //리듀서
  [GET_POST]: (state) => ({
    ...state,
    loading: {
      ...state.loading,
      GET_POST: true, //요청시작
    },
  }),
  [GET_POST_SUCCESS]: (state, action) => ({
    ...state,
    loading: {
      ...state.loading,
      GET_POST: false,
    },
    post: action.payload,
  }),
  [GET_POST_FAILURE]: (state, action) => ({
    ...state,
    loading: {
      ...state.loading,
      GET_POST: false,
    },
  }),
  [GET_USERS]: (state) => ({
    ...state,
    loading: {
      ...state.loading,
      GET_USERS: true,
    },
  }),
  [GET_USERS_SUCCESS]: (state, action) => ({
    ...state,
    loading: {
      ...state.loading,
      GET_USERS: false,
    },
    users: action.payload,
  }),
  [GET_USERS_FAILURE]: (state, action) => ({
    ...state,
    loading: {
      ...state.loading,
      GET_USERS: false,
    },
  }),
});

export default sample;
