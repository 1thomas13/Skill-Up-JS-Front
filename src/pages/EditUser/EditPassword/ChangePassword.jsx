import React from 'react'
import { Card, CardActions, CardContent, Typography, TextField } from '@mui/material'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'
import { alert } from '../../../services/alert/Alert'
import { updatePassword } from '../../../app/actions'
import { CustomButton } from '../../../Components/CustomButton'

const styleCard = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  pt: 2,
  px: 4,
  pb: 3,
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '20px',
  borderRadius: '20px'
}

const validationSchema = yup.object({
  currentPassword: yup
    .string('Ingresa la contraseña actual')
    .min(8, 'La contraseña debe tener un minimo de 8 caracteres')
    .required('El campo es requerido'),
  newPassword: yup
    .string('Ingresa una nueva contraseña')
    .min(8, 'La contraseña debe tener un minimo de 8 caracteres')
    .notOneOf([yup.ref('currentPassword'), null], 'Las contraseña no debe coincidir con la actual')
    .oneOf([yup.ref('passwordConfirmation'), null], 'Las contraseñas deben coincidir')
    .required('El campo es requerido'),
  passwordConfirmation: yup
    .string('Repite la nueva contraseña')
    .min(8, 'La contraseña debe tener un minimo de 8 caracteres')
    .oneOf([yup.ref('newPassword'), null], 'Las contraseñas deben coincidir')
    .required('El campo es requerido')
})

export const ChangePassword = ({ handleCloseChangePassword }) => {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      currentPassword: '',
      newPassword: '',
      passwordConfirmation: ''
    },
    validationSchema,
    onSubmit: (values) => {
      try {
        const body = {
          password: values.currentPassword,
          newPassword: values.newPassword
        }
        dispatch(updatePassword(body)).then((result) => {
          if (result.message === 'The password has been changed') {
            alert.confirmation(true, 'Contraseña modificada', 'La contraseña fue modificada')
            handleCloseChangePassword()
          }
        })
      } catch (e) {
        alert.error(true, 'Error', e.message)
      }
    }
  })

  return (
    <Card sx={{ ...styleCard }}>
      <CardContent sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
        <Typography variant='h4' sx={{ mb: 5, mt: 2 }}>Cambiar contraseña</Typography>
        <TextField
          fullWidth
          sx={{ mb: 2 }}
          id="currentPassword"
          name="currentPassword"
          label="Contraseña actual"
          type="password"
          value={formik.values.currentPassword}
          onChange={formik.handleChange}
          error={formik.touched.currentPassword && Boolean(formik.errors.currentPassword)}
          helperText={formik.touched.currentPassword && formik.errors.currentPassword}
        />
        <TextField
          fullWidth
          sx={{ mb: 2 }}
          id="newPassword"
          name="newPassword"
          label="Nueva contraseña"
          type="password"
          value={formik.values.newPassword}
          onChange={formik.handleChange}
          error={formik.touched.newPassword && Boolean(formik.errors.newPassword)}
          helperText={formik.touched.newPassword && formik.errors.newPassword}
        />
        <TextField
          fullWidth
          sx={{ mb: 2 }}
          id="passwordConfirmation"
          name="passwordConfirmation"
          label="Confirma tu contraseña"
          type="password"
          value={formik.values.passwordConfirmation}
          onChange={formik.handleChange}
          error={formik.touched.passwordConfirmation && Boolean(formik.errors.passwordConfirmation)}
          helperText={formik.touched.passwordConfirmation && formik.errors.passwordConfirmation}
        />
      </CardContent>
      <CardActions sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
        <CustomButton onClick={formik.handleSubmit} sx={{ ml: 2, mr: 2, width: 200 }}>Cambiar</CustomButton>
      </CardActions>
    </Card>
  )
}
