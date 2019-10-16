import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeField, initializeForm } from "../../modules/auth"
import AuthForm from "../../components/auth/AuthForm"

const RegisterForm = () => {
  const dispatch = useDispatch()
  const { form } = useSelector(({ auth }) => ({
    form: auth.register,
  }))

  //input 변경 event handler
  const onChange = (e) => {
    //여기서 필요한 action을 dispatch
    //console.log(`register onchange`, e)
    const { value, name } = e.target
    console.log(name, value)

    dispatch(
      changeField({
        form: "register",
        key: name,
        value,
      }),
    )
  }

  // form 등록 event handler
  const onSubmit = (e) => {
    e.preventDefault()
    //구현예정
  }

  //component가 처음 랜더링 될때 form을 초기화함
  useEffect(() => {
    dispatch(initializeForm("register"))
  }, [dispatch])

  return <AuthForm type="register" form={form} onChange={onChange} onSubmit={onSubmit} />
}

export default RegisterForm
