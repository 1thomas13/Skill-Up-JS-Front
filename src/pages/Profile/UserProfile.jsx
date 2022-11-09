import React from 'react'
import { Card, CardActions, CardContent, Typography } from '@mui/material'
import { CustomButton } from '../../Components/CustomButton'

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

export const UserProfile = () => {
  const fields = [{ name: 'Nombre' }, { name: 'Apellido' }, { name: 'Email' }, { name: 'Rol' }]
  return (
    <Card sx={{ ...styleCard }}>
      <CardContent sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
        <Typography variant='h4' sx={{ mb: 5, mt: 2 }}>User profile</Typography>
        {fields.map((field) => {
          return <Typography key={field.name} sx={{ m: 4 }} variant='h6'>{field.name}: </Typography>
        })}
      </CardContent>
      <CardActions sx={{ m: 6 }}>
        <CustomButton>Editar usuario</CustomButton>
        <CustomButton>Cambiar contrasena</CustomButton>
        <CustomButton>Borrar usuario</CustomButton>
      </CardActions>
    </Card>
  )
}
