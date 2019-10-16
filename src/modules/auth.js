import { createAction, handleActions } from "redux-actions"
import produce from "immer"

const CHANGE_FIELD = "auth/CHANGE_FIELD"
const INITIALIZE_FORM = "auth/INITIALIZE_FORM"

export const changeField = createAction(CHANGE_FIELD, ({ form, key, value }) => ({
  form, // register, login
  key, // username, password, passwordconfirm
  value, // 실제 바꾸려는 값
}))
export const initializeForm = createAction(INITIALIZE_FORM, (form) => form) //register / login

const initialState = {
  register: {
    username: "",
    password: "",
    passwordConfirm: "",
  },
  login: {
    username: "",
    password: "",
  },
}

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        // console.log(`draft `)
        // console.log(form, key, ` : `, value)
        draft[form][key] = value //Ex. state, register, username을 바꿈
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),
  },
  initialState,
)
// 여기서 만들 모든 components는 connect대신에 hooks를 사용
export default auth
