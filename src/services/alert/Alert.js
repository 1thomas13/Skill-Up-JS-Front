import Swal from 'sweetalert2'

export const alert = {
  confirmation: (toast, title, text) => {
    if (toast === true) {
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
  error: (type, title, text) => {
    return 1
  },
  information: (title, text) => {
    return 1
  }
}
