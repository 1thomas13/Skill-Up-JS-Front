import Typography from '@mui/material/Typography'
import * as React from 'react'
import { useSelector } from 'react-redux'
import Title from './Title'

export default function Deposits() {
  const data = useSelector((state) => state.transactions)
  const amount = data.transactions[data.transactions.length - 1]?.amount
  const date = new Date(data.transactions[data.transactions.length - 1]?.date)

  return (
    <React.Fragment>
      <Title>Ultima transacción</Title>
      <Typography component='p' variant='h4'>
        ${amount}
      </Typography>
      <Typography color='text.secondary' sx={{ flex: 1 }}>
        el {`${date.getMonth()}/${date.getFullYear()}`}
      </Typography>
    </React.Fragment>
  )
}
