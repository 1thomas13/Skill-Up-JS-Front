import { Box, Icon, Typography } from '@mui/material'
import React from 'react'

export const MoneyMove = ({ variant, data }) => {
  let icon = ''
  let baseStyle = {}

  switch (variant) {
    case 1:
      baseStyle = {
        color: 'primary.main',
        bgColor: 'surfaces.three',
        icon: 'savings',
        money: {
          borderRadius: '20px',
          padding: ' 0 10px',
          backgroundColor: 'surfaces.three'
        }
      }
      icon = 'savings'
      break
    case 2:
      baseStyle = {
        color: 'secondary.main',
        bgColor: 'surfaces.three',
        icon: 'savings',
        money: {
          padding: '0 10px'
        }
      }
      icon = 'paid'
      break
  }
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            backgroundColor: baseStyle.bgColor,
            color: baseStyle.color,
            width: '57px',
            height: '57px'
          }}
        >
          <Icon>{icon}</Icon>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant='subtitle2'>{data.description}</Typography>
          <Typography color='grey.400'>{data.date.slice(0, 10)}</Typography>
        </Box>
      </Box>
      <div>
        <Typography variant='subtitle2' color={baseStyle.color} sx={baseStyle.money}>
          {variant === 2 && '-'}${data.amount}
        </Typography>
      </div>
    </Box>
  )
}
