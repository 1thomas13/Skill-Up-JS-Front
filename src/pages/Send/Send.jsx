import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBalance, getTransactions } from '../../app/actions'

import { Users } from '../../Components/Users'
import { FormSendMoney } from './components/FormSendMoney'

export const Send = () => {
  const [selectedUser, setSelectedUser] = useState({})
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTransactions()).then(() => dispatch(getBalance()))
  }, [dispatch])
  const balance = useSelector((state) => state.transactions.balance)
  
  return (
    <>
      <Typography color='grey.400' sx={{ display: { xs: 'none', md: 'block' } }}>
        Enviar dinero
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          alignItems: 'center'
        }}
      >
        <Box className='card' sx={{ padding: '20px', borderRadius: '20px' }}>
          {selectedUser.id ? (
            <FormSendMoney user={selectedUser} />
          ) : (
            <Typography>Seleccione un usuario</Typography>
          )}
        </Box>
        <Users onClick={(x) => setSelectedUser(x)} />
      </Box>
    </>
  )
}
