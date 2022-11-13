import React from 'react'
import { Box, Modal } from '@mui/material'
import { CustomButton } from '../../../Components/CustomButton'
import { FormEdit } from './FormEdit'

export const ModalEditUser = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpenEditUser = () => {
    setOpen(true)
  }
  const handleCloseEditUser = () => {
    setOpen(false)
  }
  return (
    <Box sx={{ m: 1 }}>
        <CustomButton sx={{ width: 220 }} onClick={handleOpenEditUser}>Editar usuario</CustomButton>
        <Modal
        open={open}
        onClose={handleCloseEditUser}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        >
            <Box>
              <FormEdit handleCloseEditUser={handleCloseEditUser} />
            </Box>
        </Modal>
    </Box>
  )
}
