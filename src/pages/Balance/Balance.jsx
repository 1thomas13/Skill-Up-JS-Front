import { Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBalance, getTransactions } from '../../app/actions'
import { MoneyMove } from '../../Components/MoneyMove'
import { Surface } from '../../Components/Surface'
import { CircleButton } from './Components/CircleButton'
import { Modal } from './Components/Modal'
export const Balance = () => {
  const [open, setOpen] = useState(false)
  const [action, setAction] = useState('')
  const dispatch = useDispatch()
  const transactions = useSelector((state) => state.transactions)

  useEffect(() => {
    dispatch(getTransactions()).then(() => dispatch(getBalance()))
  }, [dispatch, transactions.length])

  const handleOpen = (action) => {
    setAction(action)
    setOpen(true)
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: '20px', md: 'false' },
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Paper sx={{ padding: '20px', borderRadius: '20px' }} className='card'>
          <Typography color='grey.300'>Balance total</Typography>
          <Typography variant='h2'>${transactions.balance}</Typography>
        </Paper>
        <Box sx={{ display: 'flex', gap: '20px' }}>
          <CircleButton icon='attach_money' text='Cargar saldo' onClick={() => handleOpen(1)} />
          <CircleButton icon='payments' text='Agregar gasto' onClick={() => handleOpen(2)} />
        </Box>
      </Box>
      <Surface>
        Ultimos movimientos
        {transactions?.transactions?.map((data) => (
          <MoneyMove variant={data.categoryId} data={data} key={data.id} />
        ))}
      </Surface>
      <Modal open={open} setOpen={setOpen} action={action} />
    </Box>
  )
}
