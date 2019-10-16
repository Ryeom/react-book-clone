import { call, put } from "redux-saga/effects"
import { startLoading, finishLoading } from "../modules/loading"

//각 요청마다 액션 타입을 3개 선언해야한다. 이것을 리팩토링하면 다음과 같다.
// const REGISTER = "auth/REGISTER"
// const REGISTER_SUCCESS = "auth/REGISTER_SUCCESS"
// const REGISTER_FAILURE = "auth/REGISTER_FAILURE"

// const LOGIN = "auth/LOGIN"
// const LOGIN_SUCCESS = "auth/LOGIN_SUCCESS"
// const LOGIN_FAILURE = "auth/LOGIN_FAILURE"
export const createRequestActionTypes = (type) => {
  const SUCCESS = `${type}_SUCCESS`
  const FAILURE = `${type}_FAILURE`
  return [type, SUCCESS, FAILURE]
}
export default function createRequestSaga(type, request) {
  const SUCCESS = `${type}_SUCCESS`
  const FAILURE = `${type}_FAILURE}`

  return function*(action) {
    //function* ->Generator function
    /*
    Generator는 리턴했다가 나중에 재입력할수 있는 기능
    context (variable bindings : 가변 바인딩)은 재입력 전체에 걸쳐서 저장된다.

    Generator 기능을 호출해도 본체가 즉시 실행되지 않고 기능에 대한 iterator가 대신반환
    iterator의 next() method가 호출되면 첫번째 yield('항복하다','산출량','총수익') expression의 본체가 실행,
    이 식은 iterator에서 반환할 값을 지정하거나  yield*를 사용하여 다른 Generator기능에 대한 딜러를 지정


    #### for(;;) is the same as while (true).

    */
    yield put(startLoading(type)) //로딩 시작
    try {
      const response = yield call(request, action.payload)
      yield put({
        type: SUCCESS,
        payload: response.data,
      })
    } catch (e) {
      yield put({
        type: FAILURE,
        payload: e,
        error: true,
      })
    }
    yield put(finishLoading(type)) //로딩끝
  }
}
