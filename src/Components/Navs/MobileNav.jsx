import { AppBar, Avatar, Box, Button, Icon, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { Container } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { ModalUserProfile } from '../../pages/Profile/ModalUserProfile'
import { CustomNavLink } from './CustomNavLink'

export const MobileNav = ({ pages, img, logout }) => {
  const [open, setOpen] = useState(false)
  const user = useSelector((state) => state.user.user)

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'visible'
    }
  }, [open])

  const theme = useTheme()
  return (
    <>
      <AppBar
        position='static'
        color='transparent'
        elevation={0}
        sx={{
          padding: '20px 0'
        }}
      >
        <Container
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Typography variant='h6' noWrap color='primary'>
            AlkyBank
          </Typography>
          <Avatar
            sx={{
              width: 31,
              height: 31,
              cursor: 'pointer'
            }}
            onClick={() => setOpen((prev) => !prev)}
          >
            {user?.firstName?.charAt(0)}
          </Avatar>
        </Container>
      </AppBar>
      <Box
        className={open ? 'navbar_menu active' : 'navbar_menu'}
        sx={{
          backgroundColor: theme.palette.background.default,
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column'
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ mb: 2 }}>
            <ModalUserProfile />
          </Box>
          {pages.map((page) => (
            <CustomNavLink page={page} key={page.route} onClick={() => setOpen(false)} />
          ))}
        </Box>
        <Button
          className='navlink'
          sx={{ justifyContent: 'flex-start', backgroundColor: 'surfaces.four' }}
          onClick={logout}
        >
          <Icon sx={{ fontSize: 17 }}>logout</Icon> Salir
        </Button>
      </Box>
    </>
  )
}
