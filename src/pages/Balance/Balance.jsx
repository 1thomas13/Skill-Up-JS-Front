import { Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { MoneyMove } from '../../Components/MoneyMove'
import { Surface } from '../../Components/Surface'
import { CircleButton } from './Components/CircleButton'
import { Modal } from './Components/Modal'
export const Balance = () => {
  const [open, setOpen] = useState(false)
  const [action, setAction] = useState('')

  const exampleData = [
    {
      categoryId: 'outcome',
      description: 'Pago de netflix',
      amount: '5000',
      date: new Date().toDateString()
    },
    {
      categoryId: 'income',
      description: 'Recibí plata',
      amount: '5000',
      date: new Date().toDateString()
    }
  ]

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
          <Typography variant='h2'>$20000</Typography>
        </Paper>
        <Box sx={{ display: 'flex', gap: '20px' }}>
          <CircleButton
            icon='attach_money'
            text='Cargar saldo'
            onClick={() => handleOpen('income')}
          />
          <CircleButton
            icon='payments'
            text='Agregar gasto'
            onClick={() => handleOpen('outcome')}
          />
        </Box>
      </Box>
      <Surface>
        Ultimos movimientos
        {exampleData.map((data) => (
          <MoneyMove
            variant={data.categoryId}
            data={data}
            key={data.description}
          />
        ))}
      </Surface>
      <Modal open={open} setOpen={setOpen} action={action} />
    </Box>
  )
}
