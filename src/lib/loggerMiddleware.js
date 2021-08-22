const loggerMiddleware = (store) => (next) => (action) => {
  console.log("이전상태", store.getState());
  next(action); //다음미들웨어나 리듀서에게 전달
  console.log("다음상태", store.getState());
};

export default loggerMiddleware;
