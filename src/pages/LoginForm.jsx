import { React, useEffect } from 'react'
import { Formik, Form, Field } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { logUser, getUsers } from '../app/actions'
import { alert } from '../services/alert/Alert.js'

export const Login = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])
  const users = useSelector(state => state.users)

  return (
    <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validate={(valores) => {
          const errors = {}

          if (!valores.email) {
            errors.email = 'Debe ingresar un e-mail'
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(valores.email)) {
            errors.email = 'E-mail inválido'
          }
          if (!valores.password) {
            errors.password = 'Debe ingresar una contraseña!'
          }
          return errors
        }}
        onSubmit={(valores, { resetForm }) => {
          if (!users.find(e => e.email === valores.email)) {
            alert.error(true, 'Error', 'Este mail no esta registrado aún')
          } else {
            dispatch(logUser(valores))
          }
          resetForm()
        }}>
        {({ touched, errors }) => (
          <Form>
            <div>
              <Field type="text" name="email" placeholder="Email" />
              {touched.email && errors.email && <span>{errors.email}</span>}
            </div>
            <div>
              <Field type="password" name="password" placeholder="Contraseña" />
              {touched.password && errors.password && <span>{errors.password}</span>}
            </div>
            <button type="submit">Log in</button>
          </Form>
        )}
      </Formik>
  )
}
