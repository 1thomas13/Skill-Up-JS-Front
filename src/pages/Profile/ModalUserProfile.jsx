import React from 'react'
import { Box, Modal } from '@mui/material'
import { CustomButton } from '../../Components/CustomButton'
import { UserProfile } from './UserProfile'
export const ModalUserProfile = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpenUserProfile = () => {
    setOpen(true)
  }
  const handleCloseUserProfile = () => {
    setOpen(false)
  }
  return (
    <Box>
        <CustomButton onClick={handleOpenUserProfile}>Open modal</CustomButton>
        <Modal
        open={open}
        onClose={handleCloseUserProfile}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        >
            <UserProfile/>
        </Modal>
    </Box>
  )
}
