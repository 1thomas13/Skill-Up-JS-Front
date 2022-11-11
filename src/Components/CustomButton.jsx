import { Button, styled } from '@mui/material'
import React from 'react'

export const CustomButton = ({ type, children, color, textColor, onClick, sx }) => {
  const StyledButton = styled(Button)(({ theme }) => ({
    color: theme.palette[textColor],
    backgroundColor: theme.palette[color],
    padding: '0.6rem, 1rem',
    width: '100%',
    borderRadius: 20
  }))
  return (
    <StyledButton type={type} variant='contained' disableElevation onClick={onClick} sx={sx}>
      {children}
    </StyledButton>
  )
}
