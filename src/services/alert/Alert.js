import Swal from 'sweetalert2'

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

export const alert = {
  confirmation: (toast, title, text) => {
    if (toast === true) {
      return Toast.fire({
        icon: 'success',
        title,
        text
      })
    } else {
      Swal.fire({
        icon: 'success',
        title,
        text
      })
    }
  },
  error: (toast, title, text) => {
    if (toast === true) {
      return Toast.fire({
        icon: 'error',
        title,
        text
      })
    } else {
      Swal.fire({
        icon: 'error',
        title,
        text
      })
    }
  },
  information: (title, text) => {
    return Swal.fire({
      icon: 'info',
      title,
      text
    })
  },
  question: (title, text, textConfirmButton) => {
    return Swal.fire({
      icon: 'question',
      title,
      text,
      confirmButtonText: textConfirmButton,
      showCancelButton: true
    })
  }
}
