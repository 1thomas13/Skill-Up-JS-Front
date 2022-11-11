import { React } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Form, Field } from 'formik'
import { createTransaction } from '../app/actions'
import { alert } from '../services/alert/Alert.js'

export const FormTransaction = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  return (
    <div>
        <Formik
                initialValues={{
                  amount: 0,
                  description: '',
                  date: '',
                  categoryId: 0,
                  userId: user.id
                }}
                validate={(valores) => {
                  const errors = {}
                  if (valores.amount < 0) {
                    errors.name = 'El valor debe ser mayor que cero'
                  }
                  if (!valores.description) {
                    errors.description = 'Debe completar este campo'
                  } else if (valores.description.length > 1000) {
                    errors.description = 'Concepto hasta sólo 1000 caracteres'
                  }
                  if (!valores.date) {
                    errors.description = 'Debe completar este campo'
                  }
                  return errors
                }}
                onSubmit={(valores, { resetForm }) => {
                  dispatch(createTransaction(valores.amount, valores.description, valores.date))
                  alert.confirmation(true, 'Operación creada', 'Has añadido una nueva operación')
                  resetForm()
                }}>
                {({ touched, errors }) => (
                    <Form>
                        <h1>Nueva Transacción</h1>
                        <div>
                            <label>Monto: </label>
                            <Field type='number' name='amount' placeholder='Monto' />
                            {touched.amount && errors.amount && <span>{errors.amount}</span>}
                        </div>
                        <div>
                            <label>Concepto: </label>
                            <Field type='text' name='description' placeholder='Concepto' />
                            {touched.description && errors.description && <span>{errors.description}</span>}
                        </div>
                        <div>
                            <label>Fecha: </label>
                            <Field type='date' name='date' placeholder='Fecha' />
                            {touched.date && errors.date && <span>{errors.date}</span>}
                        </div>
                        <div id='my-radio-group'>Categoría: </div>
                        <div role='group' aria-labelledby='my-radio-group'>
                            <label>
                            <Field type='radio' name='categoryId' value='1' />
                              Ingreso
                            </label>
                            <label>
                            <Field type='radio' name='categoryId' value='2' />
                              Egreso
                            </label>
                        </div>
                        <div>
                            <button type='submit'>Crear Transacción</button>
                        </div>
                    </Form>
                )}
                </Formik>
    </div>
  )
}
