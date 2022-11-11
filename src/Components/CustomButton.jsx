import { Button, styled } from '@mui/material'
import React from 'react'

export const CustomButton = ({ children, color, textColor, onClick, sx }) => {
  const StyledButton = styled(Button)(({ theme }) => ({
    color: theme.palette[textColor],
    backgroundColor: theme.palette[color],
    padding: '1rem',
    width: '100%',
    borderRadius: 20
  }))
  return (
    <StyledButton variant='contained' disableElevation onClick={onClick} sx={sx}>
      {children}
    </StyledButton>
  )
}
