import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getTransactions } from '../../app/actions'
import Chart from './Components/Chart'
import Deposits from './Components/Deposits'
import Orders from './Components/Orders'

export const Transactions = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTransactions())
  }, [dispatch])

  return (
    <Box sx={{ display: 'flex' }}>
      <Box
        component='main'
        sx={{
          backgroundColor: (theme) => theme.background
        }}
      >
        <Container maxWidth='lg' sx={{ mb: 4 }}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 240
                }}
              >
                <Chart />
              </Paper>
            </Grid>
            {/* Last order */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 240
                }}
              >
                <Deposits />
              </Paper>
            </Grid>
            {/* Total Orders */}
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <Orders />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}
