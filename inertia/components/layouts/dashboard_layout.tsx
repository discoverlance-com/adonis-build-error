import { Menubar } from 'primereact/menubar'
import type { MenuItem } from 'primereact/menuitem'
import type React from 'react'
import { DashboardUserMenu } from './dashboard_user_menu'
import { BreadCrumbs } from '../shared/breadcrumbs'
import { Link } from '@inertiajs/react'
import { ToastNotification } from '../shared/toast_notification'

const itemLinkRenderer = (item: MenuItem) => (
  <div className="p-menuitem-content">
    <Link className="flex align-items-center p-menuitem-link" href={item.url!}>
      <span className={item.icon} />
      <span className="mx-2">{item.label}</span>
    </Link>
  </div>
)

const menuItems: MenuItem[] = [
  {
    label: 'Portal',
    icon: 'pi pi-home',
    url: '/portal',
    template: itemLinkRenderer,
  },
]

export const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ToastNotification />
      <div className="flex min-h-screen flex-column">
        <div className="surface-ground">
          <Menubar
            model={menuItems}
            start={
              <img
                alt="logo"
                src="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
                height="40"
                className="p-0 m-0"
              />
            }
            end={
              <div className="flex gap-2 align-items-center">
                <DashboardUserMenu />
              </div>
            }
            pt={{
              root: {
                style: {
                  width: '100%',
                  borderRadius: 0,
                  maxWidth: '80rem',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  border: 0,
                },
              },
              start: {
                style: {
                  marginRight: '1rem',
                },
              },
            }}
          />
        </div>

        <main className="flex-grow-1">
          <div className="border-bottom-1 border-top-1 surface-border">
            <BreadCrumbs />
          </div>
          <div className="p-5 h-full surface-ground">
            <div className="flex flex-auto mx-auto flex-column" style={{ maxWidth: '80rem' }}>
              <div className="flex-auto px-2 w-full md:px-4 surface-section">{children}</div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
