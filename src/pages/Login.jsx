import { Link, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { LoginForm } from '../Components/LoginForm'

export const Login = () => {
  return (
    <Box sx={{ width: '350px', margin: 'auto' }}>
      <Typography variant='h6' textAlign={'center'}>
        Inicia sesión para ingresar a tu cuenta
      </Typography>
      <LoginForm />
      <Typography textAlign={'right'}>
        ¿No tienes cuenta?
        <Link to='/register' component={RouterLink} underline='none'>
          ¡Registrate!
        </Link>
      </Typography>
    </Box>
  )
}
