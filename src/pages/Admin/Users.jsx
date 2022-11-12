import { Avatar, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../app/actions'
import { Surface } from '../../Components/Surface'
import Title from './Components/Title'

export const Users = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])
  const data = useSelector((state) => state.user)
  return (
    <>
      <Title>Usuarios</Title>
      <Surface>
        <Grid container rowSpacing={'10px'}>
          {data.users?.map((x) => (
            <Grid
              item
              key={x.id}
              xs={3}
              sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              gap={'10px'}
            >
              <Avatar src={x.avatar} />
              <Typography color='grey.600'>{`${x.firstName} ${x.lastName}`}</Typography>
            </Grid>
          ))}
        </Grid>
      </Surface>
    </>
  )
}
