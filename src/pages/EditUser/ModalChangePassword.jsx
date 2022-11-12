import React from 'react'
import { Box, Modal } from '@mui/material'
import { CustomButton } from '../../Components/CustomButton'
import { ChangePassword } from './ChangePassword'

export const ModalChangePassword = ({ userId }) => {
  const [openChangePassword, setOpenChangePassword] = React.useState(false)
  const handleOpenChangePassword = () => {
    setOpenChangePassword(true)
  }
  const handleCloseChangePassword = () => {
    setOpenChangePassword(false)
  }
  return (
    <Box>
        <CustomButton sx={{ ml: 2, mr: 2, width: 200 }} onClick={handleOpenChangePassword}>Cambiar contraseña</CustomButton>
        <Modal
        open={openChangePassword}
        onClose={handleCloseChangePassword}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        >
            <Box>
              <ChangePassword userId={userId} handleCloseChangePassword={handleCloseChangePassword} />
            </Box>
        </Modal>
    </Box>
  )
}
