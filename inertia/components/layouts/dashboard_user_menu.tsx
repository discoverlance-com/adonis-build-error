import { Avatar } from 'primereact/avatar'

import { useRef } from 'react'
import { Button } from 'primereact/button'
import { Menu } from 'primereact/menu'
import { Toast } from 'primereact/toast'
import type { MenuItem } from 'primereact/menuitem'
import { classNames } from 'primereact/utils'
import { Badge } from 'primereact/badge'

interface CustomMenuItem extends MenuItem {
  shortcut?: string
  badge?: number
}

const itemRenderer = (item: CustomMenuItem) => (
  <div className="p-menuitem-content">
    <a className="flex align-items-center p-menuitem-link">
      <span className={item.icon} />
      <span className="mx-2">{item.label}</span>
      {item.badge && <Badge className="ml-auto" value={item.badge} />}
      {item.shortcut && (
        <span className="p-1 ml-auto text-xs border-1 surface-border border-round surface-100">
          {item.shortcut}
        </span>
      )}
    </a>
  </div>
)

//@ts-ignore
const items: CustomMenuItem[] = [
  {
    label: 'Profile',
    items: [
      {
        label: 'Account',
        icon: 'pi pi-cog',
        template: itemRenderer,
      },
      {
        label: 'Notifications',
        icon: 'pi pi-bell',
        //@ts-ignore
        badge: 2,
        template: itemRenderer,
      },
      {
        label: 'Logout',
        icon: 'pi pi-sign-out',
        template: itemRenderer,
      },
    ] satisfies Array<CustomMenuItem>,
  },
  {
    separator: true,
  },
  {
    template: (_, options) => {
      return (
        <button
          onClick={(e) => options.onClick(e)}
          className={classNames(
            options.className,
            'w-full p-link flex align-items-center p-2 pl-4 text-color hover:surface-200 border-noround'
          )}
        >
          <Avatar
            image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
            className="mr-2"
            shape="circle"
          />
          <div className="flex flex-column align">
            <span className="font-bold">Amy Elsner</span>
            <span className="text-sm">Agent</span>
          </div>
        </button>
      )
    },
  },
]

export const DashboardUserMenu = () => {
  const toast = useRef<Toast>(null)
  const menuLeft = useRef<Menu>(null)
  return (
    <>
      <Toast ref={toast}></Toast>
      <Menu model={items} popup ref={menuLeft} id="popup_menu_left" />

      <Button
        aria-label="User Menu"
        onClick={(event) => menuLeft.current?.toggle(event)}
        aria-controls="popup_menu_left"
        aria-haspopup
        rounded
        text
        size="small"
        className="p-button-icon-only"
        pt={{
          root: {
            style: {
              padding: '0.15625rem 0.15625rem',
            },
          },
        }}
      >
        <Avatar
          image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
          shape="circle"
          className="w-full h-full"
        />
      </Button>
    </>
  )
}
