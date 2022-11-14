import { Box, MenuItem, Modal as MuiModal, Select, TextField, Typography } from '@mui/material'
import { Form, Formik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import * as yup from 'yup'
import {
  createTransaction,
  getBalance,
  getTransactions,
  updateTransaction
} from '../../../app/actions'
import { CustomButton } from '../../../components/CustomButton'
import { alert } from '../../../services/alert/Alert'

export const Modal = ({ open, setOpen, currentTransaction, setCurrentTransaction }) => {
  const dispatch = useDispatch()

  const operationSchema = yup.object().shape({
    amount: yup.number().min(1, 'No puedes hacer una operacion sin dinero'),
    categoryId: yup.number(),
    description: yup.string().required('Debe ingresar una descripcion')
  })

  return (
    <MuiModal
      open={open}
      onClose={() => {
        setCurrentTransaction({})
        setOpen(false)
      }}
    >
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
          {Object.keys(currentTransaction).length === 0 ? 'Agregar Operacion' : 'Editar operacion'}
        </Typography>
        <Formik
          initialValues={{
            id: currentTransaction?.id ?? '',
            amount: currentTransaction?.amount ?? '',
            categoryId: currentTransaction?.categoryId ?? 1,
            description: currentTransaction?.description ?? ''
          }}
          validationSchema={operationSchema}
          onSubmit={async (values, { resetForm }) => {
            try {
              if (Object.keys(currentTransaction).length === 0) {
                await dispatch(createTransaction(values))
                alert.confirmation(true, 'Operacion', 'La operacion se hizo correctamente')
              } else {
                await dispatch(updateTransaction(values))
                await dispatch(getTransactions()).then(() => dispatch(getBalance()))
                alert.confirmation(true, 'Operacion', 'La operacion se actualizo correctamente')
              }
              resetForm()
              setCurrentTransaction({})
              setOpen(false)
            } catch (e) {
              console.log(e.message)
              alert.error(true, 'Error', e.message)
            }
          }}
        >
          {({ touched, errors, handleBlur, handleSubmit, handleChange, values }) => (
            <Form onSubmit={handleSubmit}>
              <div>
                {Object.keys(currentTransaction).length === 0 && (
                  <TextField
                    error={touched.amount && errors.amount}
                    value={values.amount}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    label='Cantidad'
                    helperText={touched.amount && errors.amount}
                    variant='standard'
                    type='number'
                    name='amount'
                    fullWidth
                    margin='dense'
                  />
                )}
              </div>
              <div>
                <TextField
                  error={touched.description && errors.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name='description'
                  label='Descripcion'
                  helperText={touched.description && errors.description}
                  variant='standard'
                  type='description'
                  value={values.description}
                  fullWidth
                  margin='dense'
                />
              </div>
              <div>
                <Select
                  name='categoryId'
                  value={values.categoryId}
                  label='Seleccione una Categoria'
                  onChange={handleChange}
                  fullWidth
                  margin='dense'
                >
                  <MenuItem value={1}>ingreso</MenuItem>
                  <MenuItem value={2}>gasto</MenuItem>
                </Select>
              </div>
              <CustomButton sx={{ margin: '20px 0 10px 0' }} type='submit'>
                Confirmar
              </CustomButton>
            </Form>
          )}
        </Formik>
      </Box>
    </MuiModal>
  )
}
