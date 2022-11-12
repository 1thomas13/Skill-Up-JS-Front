import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import * as React from 'react'
import { useSelector } from 'react-redux'
import Title from './Title'

export default function Orders() {
  const data = useSelector((state) => state.transactions)

  return (
    <React.Fragment>
      <Title>Todas las transacciones</Title>
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell>Fecha</TableCell>
            <TableCell>ID del usuario</TableCell>
            <TableCell align='right'>Monto</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.transactions.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                {new Date(row.date).toLocaleString([], { day: 'numeric', month: 'numeric' })}
              </TableCell>
              <TableCell>{row.userId}</TableCell>
              <TableCell align='right'>{`$${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  )
}
