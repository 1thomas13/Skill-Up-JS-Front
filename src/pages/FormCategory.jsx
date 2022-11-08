import { React } from 'react'
import { useDispatch } from 'react-redux'
import { Formik, Form, Field } from 'formik'
import { postCategory } from '../app/actions'

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
                    errors.name = 'Name required'
                  } else if (/^\s/.test(valores.name)) {
                    errors.name = 'Can´t start whit an empty space'
                  }
                  if (!valores.description) {
                    errors.description = 'Description required'
                  } else if (/^\s/.test(valores.description)) {
                    errors.description = 'Can´t start whit an empty space'
                  }
                  return errors
                }}
                onSubmit={(valores, { resetForm }) => {
                  dispatch(postCategory(valores))
                  /*  Swal.fire(
                    'Category created',
                    'success'
                  ) */
                  resetForm()
                }}>
                {({ touched, errors }) => (
                    <Form>
                        <h1>New Category</h1>
                        <div>
                            <label>Name: </label>
                            <Field type='text' name='name' placeholder='Name' />
                            {touched.name && errors.name && <span>{errors.name}</span>}
                        </div>
                        <div>
                            <label>Description: </label>
                            <Field type='text' name='description' placeholder='Description' />
                            {touched.description && errors.description && <span>{errors.description}</span>}
                        </div>
                        <div>
                            <button type='submit'>Create Category</button>
                        </div>
                    </Form>
                )}
                </Formik>
    </div>
  )
}
