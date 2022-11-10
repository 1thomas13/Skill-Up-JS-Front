import { useTheme } from '@emotion/react'
import React from 'react'
import PuffLoader from 'react-spinners/PuffLoader'

export const Loader = ({ isLoading, size }) => {
  const theme = useTheme()
  return (
    <PuffLoader
      color={theme.palette.primary.main}
      loading={isLoading}
      size={size || 50}
    />
  )
}
