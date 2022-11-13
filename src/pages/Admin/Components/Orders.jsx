import * as React from 'react'
import { useSelector } from 'react-redux'
import { Pagination } from '../../../Components/Pagination'
import Title from './Title'

export default function Orders() {
  const transactions = useSelector((state) => state.transactions)

  return (
    <React.Fragment>
      <Title>Todas las transacciones</Title>
      <Pagination data={transactions.transactions} />
    </React.Fragment>
  )
}
