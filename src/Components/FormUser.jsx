import { React } from 'react'
import { useDispatch } from 'react-redux'
import { Formik, Form } from 'formik'
import { createUser } from '../app/actions'
import { alert } from '../services/alert/Alert.js'
import * as yup from 'yup'
import { TextField } from '@mui/material'
import { CustomButton } from './CustomButton'

export const FormUser = () => {
  const dispatch = useDispatch()

  const registerSchema = yup.object().shape({
    firstName: yup.string().min(4, 'Debe tener minimo 4 caracteres').required('Debe ingresar su nombre'),
    lastName: yup.string().min(4, 'Debe tener minimo 4 caracteres').required('Debe ingresar su apellido'),
    email: yup.string().email('Email invalido').required('Debe ingresar un email'),
    password: yup.string().min(8, 'Debe tener minimo 8 caracteres').required('Debe ingresar una password'),
    repeatPass: yup.string().oneOf([yup.ref('password')], 'Las passwords no coinciden')
  })

  return (
    <div>
        <Formik
                initialValues={{
                  firstName: '',
                  lastName: '',
                  email: '',
                  password: '',
                  repeatPass: '',
                  avatar: ''
                }}
                validationSchema={registerSchema}
                onSubmit={(values, { resetForm }) => {
                  try {
                    createUser(values)
                    alert.confirmation(true, 'Bienvenido', 'Te has registrado correctamente')
                    resetForm()
                  } catch (e) {
                    console.log(e.message)
                    alert.error(true, 'Error', e.message)
                  }
                }}>
                {({ touched, errors, values, handleBlur, handleChange }) => (
                    <Form>
                        <div>
                        <TextField
                          error={touched.firstName && errors.firstName}
                          value={values.firstName}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          label="Nombre"
                          helperText={touched.firstName && errors.firstName}
                          variant="standard"
                          type='text'
                          name='firstName'
                          fullWidth
                          margin="dense"
                        />
                        </div>
                        <div>
                          <TextField
                            error={touched.lastName && errors.lastName}
                            value={values.lastName}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            label="Apellido"
                            helperText={touched.lastName && errors.lastName}
                            variant="standard"
                            type='text'
                            name='lastName'
                            fullWidth
                            margin="dense"
                          />
                        </div>
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
                        <div>
                          <TextField
                            error={touched.repeatPass && errors.repeatPass}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name='repeatPass'
                            label="Repetir password"
                            helperText={touched.repeatPass && errors.repeatPass}
                            variant="standard"
                            type='password'
                            value={values.repeatPass}
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
    </div>
  )
}
