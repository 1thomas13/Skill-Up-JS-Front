import { Divider, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getCategories } from '../../app/actions'
import { FormCategory } from './Components/FormCategory'

export const Categories = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])
  const data = useSelector((state) => state.categories)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <FormCategory />
      <Divider />
      <Typography variant='subtitle2'>Categorías</Typography>
      {data?.categories?.map((x) => (
        <Typography variant='caption' key={x.id}>
          {x.name}
        </Typography>
      ))}
    </Box>
  )
}
