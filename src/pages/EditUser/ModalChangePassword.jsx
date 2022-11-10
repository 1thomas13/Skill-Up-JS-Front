import React from 'react'
import { Box, Modal } from '@mui/material'
import { CustomButton } from '../../Components/CustomButton'
import { ChangePassword } from './ChangePassword'

export const ModalChangePassword = () => {
  const [openChangePassword, setOpenChangePassword] = React.useState(false)
  const handleOpenChangePassword = () => {
    setOpenChangePassword(true)
  }
  const handleCloseChangePassword = () => {
    setOpenChangePassword(false)
  }
  return (
    <Box>
        <CustomButton onClick={handleOpenChangePassword}>Cambiar contrasena</CustomButton>
        <Modal
        open={openChangePassword}
        onClose={handleCloseChangePassword}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        >
            <Box>
              <ChangePassword handleCloseChangePassword={handleCloseChangePassword} />
            </Box>
        </Modal>
    </Box>
  )
}
