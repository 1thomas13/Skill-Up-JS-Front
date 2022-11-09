import React from 'react'
import { Card, CardActions, CardContent, Typography, Button, TextField } from '@mui/material'
import { useFormik } from 'formik'
import * as yup from 'yup'

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
  flexDirection: 'column'
}

const validationSchema = yup.object({
  currentPassword: yup
    .string('Ingresa la contraseña actual')
    .min(8, 'La contraseña debe tener un minimo de 8 caracteres')
    .required('La contraseña es requerida'),
  newPassword: yup
    .string('Ingresa una nueva contraseña')
    .min(8, 'La contraseña debe tener un minimo de 8 caracteres')
    .required('La contraseña es requerida'),
  passwordConfirmation: yup
    .string('Repite la nueva contraseña')
    .min(8, 'La contraseña debe tener un minimo de 8 caracteres')
    .oneOf([yup.ref('newPassword'), null], 'Las contraseñas deben coincidir')
    .required('La contraseña es requerida')
})

export const ChangePassword = () => {
  const formik = useFormik({
    initialValues: {
      currentPassword: '',
      newPassword: '',
      passwordConfirmation: ''
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
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
          label="Current password"
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
          label="New password"
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
          label="Confirm your password"
          type="password"
          value={formik.values.passwordConfirmation}
          onChange={formik.handleChange}
          error={formik.touched.passwordConfirmation && Boolean(formik.errors.passwordConfirmation)}
          helperText={formik.touched.passwordConfirmation && formik.errors.passwordConfirmation}
        />
      </CardContent>
      <CardActions sx={{ mt: 6, display: 'flex', justifyContent: 'center' }}>
        <Button onClick={formik.handleSubmit}>Cambiar</Button>
      </CardActions>
    </Card>
  )
}
