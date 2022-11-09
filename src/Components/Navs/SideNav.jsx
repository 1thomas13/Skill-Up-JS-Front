import { Avatar, Box, Button, Icon, Typography } from '@mui/material'
import React from 'react'
import { ModalUserProfile } from '../../pages/Profile/ModalUserProfile'
import { CustomNavLink } from './CustomNavLink'

export const SideNav = ({ pages, img }) => {
  return (
    <Box className='sidenav' sx={{ backgroundColor: 'surfaces.one' }}>
      <div className='sidenav_pages'>
        <Typography variant='h6' sx={{ color: 'primary.main' }}>
          AlkyBank
        </Typography>
        <Avatar
          src={img}
          sx={{
            width: 63,
            height: 63
          }}
        />
        <ModalUserProfile/>
        <div>
          {pages.map((page) => (
            <CustomNavLink page={page} key={page.route} />
          ))}
        </div>
      </div>
      <Button
        className='navlink'
        sx={{ justifyContent: 'flex-start', backgroundColor: 'surfaces.four' }}
      >
        <Icon sx={{ fontSize: 17 }}>logout</Icon> Salir
      </Button>
    </Box>
  )
}
