import { FormLabel, TextField, Typography } from '@mui/material'
import { Form, Formik } from 'formik'
import { React } from 'react'
import { useDispatch } from 'react-redux'
import { postCategory } from '../../../app/actions'
import { CustomButton } from '../../../Components/CustomButton'
import { alert } from '../../../services/alert/Alert.js'

export const FormCategory = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          description: ''
        }}
        validate={(values) => {
          const errors = {}
          if (!values.name) {
            errors.name = 'Debe completar este campo'
          } else if (/^\s/.test(values.name)) {
            errors.name = 'No puede empezar con un espacio vacío'
          }
          if (!values.description) {
            errors.description = 'Debe completar este campo'
          } else if (/^\s/.test(values.description)) {
            errors.description = 'No puede empezar con un espacio vacío'
          }
          return errors
        }}
        onSubmit={(values, { resetForm }) => {
          dispatch(postCategory(values))
          alert.confirmation(true, 'Categoría creada', 'Has añadido una nueva categoría')
          resetForm()
        }}
      >
        {({ touched, errors, handleBlur, handleSubmit, handleChange, values }) => (
          <Form>
            <Typography variant='h6' color='primary.main'>
              Nueva Categoría
            </Typography>
            <div>
              <FormLabel>Nombre </FormLabel>
              <TextField
                error={touched.name && errors.name ? touched.name : false}
                value={values.name}
                onBlur={handleBlur}
                onChange={handleChange}
                type='text'
                name='name'
                variant='standard'
                fullWidth
                margin='dense'
              />
              {touched.name && errors.name && <span>{errors.name}</span>}
            </div>
            <div>
              <FormLabel>Descripción </FormLabel>
              <TextField
                error={touched.description && errors.description ? touched.name : false}
                value={values.description}
                onBlur={handleBlur}
                onChange={handleChange}
                type='text'
                name='description'
                variant='standard'
                fullWidth
                margin='dense'
              />
              {touched.description && errors.description && <span>{errors.description}</span>}
            </div>
            <CustomButton sx={{ margin: '20px 0 10px 0' }} type='submit'>
              Crear categoría
            </CustomButton>
          </Form>
        )}
      </Formik>
    </div>
  )
}
