import { Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTransactions } from '../app/actions'
import { Pagination } from '../Components/Pagination'

export const Movements = () => {
  const transactions = useSelector((state) => state.transactions)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTransactions())
  }, [dispatch, transactions.length])

  return (
    <>
      <Typography color='grey.400' sx={{ display: { xs: 'none', md: 'block' } }}>
        Movimientos
      </Typography>
      {transactions.transactions.length > 0
        ? (<Pagination data={transactions.transactions} />)
        : (
        <Typography variant='h6'> No hay movimientos para mostrar</Typography>
          )}
    </>
  )
}
