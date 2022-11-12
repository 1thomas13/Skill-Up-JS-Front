import { useTheme } from '@mui/material/styles'
import * as React from 'react'
import { useSelector } from 'react-redux'
import { Label, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import Title from './Title'

// Generate Sales Data
function createData(Fecha, Monto) {
  return { Fecha, Monto }
}

export default function Chart() {
  const data = useSelector((state) => state.transactions)

  const dataForChart = data?.transactions.map((x) =>
    createData(
      new Date(x.date).toLocaleDateString([], { day: 'numeric', month: 'numeric' }),
      x.amount
    )
  )
  const theme = useTheme()
  return (
    <React.Fragment>
      <Title>Fluctuacion</Title>
      <ResponsiveContainer>
        <LineChart
          data={dataForChart}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24
          }}
        >
          <XAxis
            dataKey='Fecha'
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis stroke={theme.palette.text.secondary} style={theme.typography.body2}>
            <Label
              angle={270}
              position='left'
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1
              }}
            >
              Movimientos ($)
            </Label>
          </YAxis>
          <Tooltip wrapperStyle={{ outline: 'none' }} />
          <Line
            isAnimationActive={false}
            type='basis'
            dataKey='Monto'
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  )
}
