import React, { useCallback } from 'react'
import { Box, Modal, Button } from '@mui/material'
import { UserProfile } from './UserProfile'
import Icon from '@mui/material/Icon'
import { useDispatch } from 'react-redux'
import { getUser } from '../../app/actions/index'

export const ModalUserProfile = () => {
  const dispatch = useDispatch()
  const dispatchUser = useCallback(
    () => dispatch(getUser()),
    [dispatch]
  )

  const [open, setOpen] = React.useState(false)
  const handleOpenUserProfile = () => {
    setOpen(true)
    dispatchUser()
  }
  const handleCloseUserProfile = () => {
    setOpen(false)
  }

  return (
    <Box>
        <Button onClick={handleOpenUserProfile}><Icon>person</Icon> User profile</Button>
        <Modal
        open={open}
        onClose={handleCloseUserProfile}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        >
          <Box>
            <UserProfile/>
          </Box>
        </Modal>
    </Box>
  )
}
