import { Box, Modal as MuiModal, TextField, Typography, Select, MenuItem } from '@mui/material'
import React from 'react'
import { Formik, Form } from 'formik'
import * as yup from 'yup'
import { CustomButton } from '../../../components/CustomButton'

export const Modal = ({ open, setOpen, action }) => {
  const signInSchema = yup.object().shape({
    amount: yup.number().min(1, 'No puedes hacer una operacion sin dinero'),
    category: yup.string().required('Debe ingresar una categoria')
  })

  return (
    <MuiModal open={open} onClose={() => setOpen(false)}>
      <Box
        sx={{
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
        }}
      >
      <Typography variant='h6' textAlign={'center'}>
        {action === 'income' ? 'Cargar Saldo' : 'Agregar Gasto'}
      </Typography>
       <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={signInSchema}
        onSubmit={ (values, { resetForm }) => {
          try {
            console.log('first')
          } catch (e) {
            console.log(e.message)
            alert.error(true, 'Error', e.message)
          }
        }}
        >
        {({ touched, errors, handleBlur, handleSubmit, handleChange, values }) => (
          <Form onSubmit={ handleSubmit }>
            <div>
              <TextField
                error={touched.amount && errors.amount}
                value={values.amount}
                onBlur={handleBlur}
                onChange={handleChange}
                label="Cantidad"
                helperText={touched.amount && errors.amount}
                variant="standard"
                type='number'
                name='amount'
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
            <Select
              value={'seleccione'}
              label="Seleccione una Categoria"
              onChange={handleChange}
              fullWidth
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            </div>
            <CustomButton sx={{ margin: '20px 0 10px 0' }} type="submit">
              Agregar
            </CustomButton>
          </Form>
        )}
      </Formik>
      </Box>
    </MuiModal>
  )
}
