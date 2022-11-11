import { React, useEffect } from 'react'
import { Formik, Form } from 'formik'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'
import { logUser, getUsers } from '../app/actions'
import { alert } from '../services/alert/Alert.js'
import { CustomButton } from './CustomButton'
import { TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const LoginForm = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  const signInSchema = yup.object().shape({
    email: yup.string().email('Email invalido').required('Debe ingresar un email'),
    password: yup.string().min(6, 'Debe tener minimo 6 caracteres').required('Debe ingresar una password')
  })

  return (
    <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={signInSchema}
        onSubmit={(values, { resetForm }) => {
          try {
            dispatch(logUser(values))
            navigate('/')
          } catch (e) {
            alert.error(true, 'Error', e.message)
          }
        }}
        >
        {({ touched, errors, handleBlur, handleSubmit, handleChange, values }) => (
          <Form onSubmit={ handleSubmit }>
            <div>
              <TextField
                error={touched.email && errors.email}
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                label="Email"
                helperText={touched.email && errors.email}
                variant="standard"
                type='email'
                name='email'
                fullWidth
                margin="dense"
              />
            </div>
            <div>
              <TextField
                error={touched.password && errors.password}
                onChange={handleChange}
                onBlur={handleBlur}
                name='password'
                label="Password"
                helperText={touched.password && errors.password}
                variant="standard"
                type='password'
                value={values.password}
                fullWidth
                margin="dense"
              />
            </div>
            <CustomButton sx={{ margin: '20px 0 10px 0' }} type="submit">
              Log in
            </CustomButton>
          </Form>
        )}
      </Formik>
  )
}
