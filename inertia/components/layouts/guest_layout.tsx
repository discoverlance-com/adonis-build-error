import { ToastNotification } from '../shared/toast_notification'

export const GuestLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ToastNotification />
      {children}
    </>
  )
}
