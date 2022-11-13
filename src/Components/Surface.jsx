import { Box } from '@mui/material'
import React from 'react'

export const Surface = ({ children, deep, options }) => {
  return (
    <Box
      sx={{
        backgroundColor: deep ? `surfaces.${deep}` : 'surfaces.two',
        padding: '20px',
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        width: '100%'
      }}
    >
      {children}
    </Box>
  )
}
