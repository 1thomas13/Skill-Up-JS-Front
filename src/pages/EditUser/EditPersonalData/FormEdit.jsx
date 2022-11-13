import { TextField, Card, CardContent, CardActions, Typography } from '@mui/material'
import { Form, Formik } from 'formik'
import { React } from 'react'
import { useSelector } from 'react-redux'
import * as yup from 'yup'
import { updateUser } from '../../../app/actions'
import { alert } from '../../../services/alert/Alert.js'
import { CustomButton } from '../../../Components/CustomButton'

const styleCard = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  borderRadius: '20px'
}

export const FormEdit = ({ handleCloseEditUser }) => {
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
    <Card sx={{ ...styleCard }}>
      <Formik
                initialValues={{
                  firstName: userStoreData.user.firstName,
                  lastName: userStoreData.user.lastName,
                  email: userStoreData.user.email,
                  avatar: userStoreData.user.avatar,
                  roleId: 2
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
                      <CardContent>
                          <Typography variant='h4' sx={{ mb: 5, mt: 1 }}>Editar usuario</Typography>
                          <TextField
                              sx={{ mb: 2 }}
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
                          <TextField
                            sx={{ mb: 2 }}
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
                          <TextField
                            sx={{ mb: 2 }}
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
                          <TextField
                            sx={{ mb: 2 }}
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
                      </CardContent>
                      <CardActions sx={{ mt: 6, display: 'flex', justifyContent: 'center' }}>
                        <CustomButton sx={{ ml: 2, mr: 2, mt: 2, width: 200 }} type="submit">
                            Actualizar datos
                        </CustomButton>
                      </CardActions>
                    </Form>
                )}
        </Formik>
      </Card>
  )
}
