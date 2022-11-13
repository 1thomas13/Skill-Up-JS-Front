import React from 'react'
import { Card, CardActions, CardContent, Typography, Avatar, Box } from '@mui/material'
import { CustomButton } from '../../Components/CustomButton'
import { ModalChangePassword } from '../EditUser/ModalChangePassword'
import { useSelector, useDispatch } from 'react-redux'
import { Loader } from '../../Components/Loader'
import { alert } from '../../services/alert/Alert'
import { deleteUser } from '../../app/actions/index'
import { useNavigate } from 'react-router-dom'

const styleCard = {
  position: 'absolute',
  height: '95%',
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
  const userStoreData = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const logout = () => {
    localStorage.clear()
    sessionStorage.clear()
    navigate('/login')
  }
  const fields = [
    { name: 'Nombre', value: userStoreData.user !== undefined ? userStoreData.user.firstName : (<Loader size={35}/>) },
    { name: 'Apellido', value: userStoreData.user !== undefined ? userStoreData.user.lastName : (<Loader size={35}/>) },
    { name: 'Email', value: userStoreData.user !== undefined ? userStoreData.user.email : (<Loader size={35}/>) },
    { name: 'Rol', value: userStoreData.user !== undefined ? userStoreData.user.rol : (<Loader size={35}/>) }
  ]

  const handleDeleteUser = () => {
    alert.question('Estas seguro?', 'Estas seguro que quieres eliminar el usuario?', 'Si').then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteUser()).then((res) => {
          if (res.message === 'The user has been deleted') {
            alert.confirmation(true, 'El usuario ha sido eliminado').then(() => {
              logout()
            })
          }
        })
      }
    })
  }
  return (
    <Card sx={{ ...styleCard }}>
      <CardContent sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
        <Typography variant='h4' sx={{ mb: 8 }}>User profile</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Avatar src={userStoreData.user.avatar} sx={{ width: 150, height: 150, mb: 5 }}/>
        </Box>
        {fields.map((field) => (
          <Typography key={field.name} sx={{ m: 4, display: 'flex', alignItems: 'center' }} variant='h6'>{field.name}: {field.value}</Typography>
        ))}
      </CardContent>
      <CardActions sx={{ mt: 8, ml: 5, mr: 5 }}>
        <CustomButton sx={{ mr: 2, ml: 2, width: 200 }}>Editar usuario</CustomButton>
        <ModalChangePassword userId={userStoreData.user.id}/>
        <CustomButton sx={{ ml: 2, mr: 2, width: 200 }} onClick={handleDeleteUser}>Borrar usuario</CustomButton>
      </CardActions>
    </Card>
  )
}
