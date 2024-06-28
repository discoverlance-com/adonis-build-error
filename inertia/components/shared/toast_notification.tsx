import type { SharedProps } from '@adonisjs/inertia/types'
import { usePage } from '@inertiajs/react'
import { Toast } from 'primereact/toast'
import { useEffect, useRef } from 'react'

export const ToastNotification = () => {
  const {
    props: { notification },
  } = usePage<SharedProps>()
  const toastRef = useRef<Toast>(null)

  useEffect(() => {
    if (notification) {
      switch (notification.type) {
        case 'success':
          toastRef.current?.show({
            severity: 'success',
            summary: 'Ok',
            detail: notification.message,
            life: 4000,
          })
          break

        case 'warning':
          toastRef.current?.show({
            severity: 'warn',
            summary: 'Caution',
            detail: notification.message,
            life: 5000,
          })
          break

        case 'error':
          toastRef.current?.show({
            severity: 'error',
            summary: 'Error',
            detail: notification.message,
            life: 5000,
          })
          break

        default:
          toastRef.current?.show({
            severity: 'info',
            summary: 'Important',
            detail: notification.message,
            life: 4000,
          })
          break
      }
    }
  }, [notification])
  return (
    <>
      <Toast position="top-right" ref={toastRef} />
    </>
  )
}
