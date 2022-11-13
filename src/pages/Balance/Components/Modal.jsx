import { Box, Modal as MuiModal, TextField, Typography, Select, MenuItem } from '@mui/material'
import React from 'react'
import { Formik, Form } from 'formik'
import * as yup from 'yup'
import { CustomButton } from '../../../components/CustomButton'
import { useDispatch } from 'react-redux'
import { createTransaction } from '../../../app/actions'
import { alert } from '../../../services/alert/Alert'

export const Modal = ({ open, setOpen, action }) => {
  const dispatch = useDispatch()

  const operationSchema = yup.object().shape({
    amount: yup.number().min(1, 'No puedes hacer una operacion sin dinero'),
    categoryId: yup.number(),
    description: yup.string().required('Debe ingresar una descripcion')
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
        Agregar Operacion
      </Typography>
       <Formik
        initialValues={{
          amount: '',
          categoryId: action,
          description: ''
        }}
        validationSchema={operationSchema}
        onSubmit={(values, { resetForm }) => {
          try {
            dispatch(createTransaction(values))
            alert.confirmation(true, 'Operacion', 'La operacion se hizo correctamente')
            resetForm()
            setOpen(false)
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
                error={touched.description && errors.description}
                onChange={handleChange}
                onBlur={handleBlur}
                name='description'
                label="Descripcion"
                helperText={touched.description && errors.description}
                variant="standard"
                type='description'
                value={values.description}
                fullWidth
                margin="dense"
              />
            </div>
            <div>
            <Select
              name='categoryId'
              value={values.categoryId}
              label="Seleccione una Categoria"
              onChange={handleChange}
              fullWidth
              margin="dense"
            >
              <MenuItem value={1}>income</MenuItem>
              <MenuItem value={2}>expense</MenuItem>
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
