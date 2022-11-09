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

export const ChangePassword = () => {
  return (
    <Card sx={{ ...styleCard }}>
      <CardContent sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
        <Typography variant='h4' sx={{ mb: 5, mt: 2 }}>Cambiar password</Typography>
      </CardContent>
      <CardActions sx={{ m: 6 }}>
        <CustomButton>Cambiar password</CustomButton>
      </CardActions>
    </Card>
  )
}
