import { redirect } from 'next/navigation';
import Swal from 'sweetalert2';

export const errorAlert = (message: string,redirectToLogin:boolean=false) => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: message,
    didClose: () => {
      if (redirectToLogin) {
        redirect("/login")
      }
    }
  });
}

export const errorAlert2 = (message: string, showCancelButton: boolean): Promise<any> => {
  return Swal.fire({
    title: 'Are you sure?',
    text: message,
    icon: 'warning',
    showCancelButton: showCancelButton,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes'
  });
};

export const successAlert = (message: string) => {
  Swal.fire({
    icon: "success",
    title: "Success",
    text: message,
  });
}

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});

export const successToast = (message: string) => {
  Toast.fire({
    icon: "success",
    title: message
  });
}
