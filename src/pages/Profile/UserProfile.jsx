import React from 'react'
import { Card, CardActions, CardContent, Typography } from '@mui/material'
import { CustomButton } from '../../Components/CustomButton'
import { ModalChangePassword } from '../EditUser/ModalChangePassword'
import { useSelector } from 'react-redux'
import { Loader } from '../../Components/Loader'

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
  const userData = useSelector((state) => state.user)

  const fields = [
    { name: 'Nombre', value: userData.body !== undefined ? userData.body.firstName : (<Loader/>) },
    { name: 'Apellido', value: userData.body !== undefined ? userData.body.lastName : (<Loader/>) },
    { name: 'Email', value: userData.body !== undefined ? userData.body.email : (<Loader/>) },
    { name: 'Rol', value: userData.body !== undefined ? userData.body.rol : (<Loader/>) }
  ]
  return (
    <Card sx={{ ...styleCard }}>
      <CardContent sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
        <Typography variant='h4' sx={{ mb: 5, mt: 2 }}>User profile</Typography>
        {fields.map((field) => (
          <Typography key={field.name} sx={{ m: 4 }} variant='h6'>{field.name}: {field.value}</Typography>
        ))}
      </CardContent>
      <CardActions sx={{ m: 6 }}>
        <CustomButton sx={{ mr: 2, ml: 2, width: 200 }}>Editar usuario</CustomButton>
        <ModalChangePassword/>
        <CustomButton sx={{ ml: 2, mr: 2, width: 200 }}>Borrar usuario</CustomButton>
      </CardActions>
    </Card>
  )
}
