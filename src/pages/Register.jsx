import { Link, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { FormUser } from '../Components/FormUser'

export const Register = () => {
  return (
    <Box sx={{ width: '350px', margin: 'auto' }}>
      <Typography variant='h6' textAlign={'center'}>
        Registrate
      </Typography>
      <FormUser/>
      <Typography textAlign={'right'}>
        ¿Tienes cuenta?
        <Link to='/login' component={RouterLink} underline='none'>
          ¡Inicia sesión!
        </Link>
      </Typography>
    </Box>
  )
}
