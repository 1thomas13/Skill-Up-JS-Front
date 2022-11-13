import { TextField } from '@mui/material'
import { Form, Formik } from 'formik'
import { React } from 'react'
import { useSelector } from 'react-redux'
import * as yup from 'yup'
import { updateUser } from '../../app/actions'
import { alert } from '../../services/alert/Alert.js'
import { CustomButton } from '../../Components/CustomButton'

export const FormUser = () => {
  const userStoreData = useSelector((state) => state.user)
  const registerSchema = yup.object().shape({
    firstName: yup
      .string()
      .min(4, 'Debe tener minimo 4 caracteres')
      .required('Debe ingresar su nombre'),
    lastName: yup
      .string()
      .min(4, 'Debe tener minimo 4 caracteres')
      .required('Debe ingresar su apellido'),
    email: yup.string().email('Email invalido').required('Debe ingresar un email')
  })

  return (
    <div>
        <Formik
                initialValues={{
                  firstName: userStoreData.user.firstName,
                  lastName: userStoreData.user.lastName,
                  email: userStoreData.user.email,
                  avatar: userStoreData.user.avatar
                }}
                validationSchema={registerSchema}
                onSubmit={async (values, { resetForm }) => {
                  try {
                    await updateUser(values)
                    alert.confirmation(true, 'Actualizado con éxito', 'Has actualizado tu perfil')
                    resetForm()
                  } catch (e) {
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
                          value={values.avatar}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          label="Avatar"
                          variant="standard"
                          type='text'
                          name='Avatar'
                          fullWidth
                          margin="dense"
                        />
                        </div>
                        <CustomButton sx={{ margin: '20px 0 10px 0' }} type="submit">
                          Actualizar datos
                        </CustomButton>
                    </Form>
                )}
                </Formik>
    </div>
  )
}
