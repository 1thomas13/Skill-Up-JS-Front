import { React } from 'react'
import { useDispatch } from 'react-redux'
import { Formik, Form, Field } from 'formik'
import { postCategory } from '../app/actions'
import { alert } from '../services/alert/Alert.js'

export const FormCategory = () => {
  const dispatch = useDispatch()

  return (
    <div>
        <Formik
                initialValues={{
                  name: '',
                  description: ''
                }}
                validate={(valores) => {
                  const errors = {}
                  if (!valores.name) {
                    errors.name = 'Debe completar este campo'
                  } else if (/^\s/.test(valores.name)) {
                    errors.name = 'No puede empezar con un espacio vacío'
                  }
                  if (!valores.description) {
                    errors.description = 'Debe completar este campo'
                  } else if (/^\s/.test(valores.description)) {
                    errors.description = 'No puede empezar con un espacio vacío'
                  }
                  return errors
                }}
                onSubmit={(valores, { resetForm }) => {
                  dispatch(postCategory(valores))
                  alert.confirmation(true, 'Categoría creada', 'Has añadido una nueva categoría')
                  resetForm()
                }}>
                {({ touched, errors }) => (
                    <Form>
                        <h1>Nueva Categoría</h1>
                        <div>
                            <label>Nombre: </label>
                            <Field type='text' name='name' placeholder='Nombre' />
                            {touched.name && errors.name && <span>{errors.name}</span>}
                        </div>
                        <div>
                            <label>Descripción: </label>
                            <Field type='text' name='description' placeholder='Descripción' />
                            {touched.description && errors.description && <span>{errors.description}</span>}
                        </div>
                        <div>
                            <button type='submit'>Crear Categoría</button>
                        </div>
                    </Form>
                )}
                </Formik>
    </div>
  )
}
