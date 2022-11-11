import { React, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Form, Field } from 'formik'
import { createUser, getUsers } from '../app/actions'
import { alert } from '../services/alert/Alert.js'

export const FormUser = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])
  const users = useSelector(state => state.users)

  return (
    <div>
        <Formik
                initialValues={{
                  firstName: '',
                  lastName: '',
                  email: '',
                  password: '',
                  password2: '',
                  avatar: ''
                }}
                validate={(valores) => {
                  const errors = {}
                  if (!valores.firstName) {
                    errors.firstName = 'Debe completar este campo'
                  } else if (/^\s/.test(valores.firstName)) {
                    errors.firstName = 'No puede empezar con un espacio vacío'
                  }
                  if (!valores.lastName) {
                    errors.lastName = 'Debe completar este campo'
                  } else if (/^\s/.test(valores.lastName)) {
                    errors.lastName = 'No puede empezar con un espacio vacío'
                  }
                  if (!valores.email) {
                    errors.email = 'Debe completar este campo'
                  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(valores.email)) {
                    errors.email = 'E-mail invalido'
                  } else if (users.find(e => e.email.toLowerCase() === valores.email.toLowerCase())) {
                    errors.email = 'Este mail ya se encuentra registrado'
                  }
                  if (!valores.password) {
                    errors.password = 'Debe completar este campo'
                  }
                  if (valores.password !== valores.password2) {
                    errors.password2 = 'Las contraseñas deben coincidir'
                  }
                  return errors
                }}
                onSubmit={(valores, { resetForm }) => {
                  dispatch(createUser(valores))
                  alert.confirmation(true, 'Bienvenido', 'Te has registrado correctamente')
                  resetForm()
                }}>
                {({ touched, errors }) => (
                    <Form>
                        <h1>Regístrate</h1>
                        <div>
                            <label>Nombre: </label>
                            <Field type='text' name='firstName' placeholder='Nombre' />
                            {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}
                        </div>
                        <div>
                        <div>
                            <label>Apellido: </label>
                            <Field type='text' name='lastName' placeholder='Apellido' />
                            {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
                        </div>
                        <div>
                            <label>E mail: </label>
                            <Field type="text" name="email" placeholder="E-mail" />
                            {touched.email && errors.email && <span>{errors.email}</span>}
                        </div>
                        <div>
                            <label>Contraseña: </label>
                            <Field type="password" name="password" placeholder="Contraseña" />
                            {touched.password && errors.password && <span>{errors.password}</span>}
                        </div>
                        <div>
                            <label>Repita su contraseña: </label>
                            <Field type="password" name="password2" placeholder="Repita contraseña" />
                            {touched.password2 && errors.password2 && <span>{errors.password2}</span>}
                        </div>
                            <label>Avatar (opcional): </label>
                            <Field type='text' name='avatar' placeholder='Avatar' />
                        </div>
                        <div>
                            <button type='submit'>Registrarse</button>
                        </div>
                    </Form>
                )}
                </Formik>
    </div>
  )
}
