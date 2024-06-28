import type { SharedProps } from '@adonisjs/inertia/types'
import { usePage } from '@inertiajs/react'
import { BreadCrumb } from 'primereact/breadcrumb'
import type { MenuItem } from 'primereact/menuitem'
import { useEffect, useState } from 'react'
import string from '@adonisjs/core/helpers/string'

interface Props {
  items?: MenuItem[]
  home?: MenuItem
}

const getPathFromUrl = (url: string): string => {
  return url.split(/[?#]/)[0]!
}

const convertBreadcrumb = (title: string): string => {
  let transformedTitle = getPathFromUrl(title)

  transformedTitle = transformedTitle.replace(/-/g, ' ')

  return string.titleCase(decodeURI(transformedTitle))
}

export const BreadCrumbs = ({ items, home }: Props) => {
  const { props } = usePage<SharedProps>()
  const homeItem = { icon: 'pi pi-home', url: '/portal', ...home }
  const [breadcrumbs, setBreadcrumbs] = useState<Array<MenuItem> | undefined>(undefined)

  useEffect(() => {
    if (items !== undefined) {
      setBreadcrumbs(items)
    } else if (props.currentUrl) {
      const linkPath = props.currentUrl?.includes('#')
        ? props.currentUrl?.split('#')[0]?.split('/')
        : props.currentUrl?.split('/')
      linkPath?.shift()

      const pathArray: MenuItem[] = []

      linkPath
        ?.filter((p) => p === '/')
        ?.forEach((path, i) => {
          if (path !== '') {
            pathArray.push({
              label: convertBreadcrumb(path),
              url: '/' + linkPath?.slice(0, i + 1).join('/'),
            })
          }
        })

      setBreadcrumbs(pathArray)
    }
  }, [props.currentUrl, items])

  return (
    <BreadCrumb
      model={breadcrumbs}
      home={homeItem}
      pt={{
        root: {
          style: {
            borderRadius: 0,
            maxWidth: '80rem',
            marginLeft: 'auto',
            marginRight: 'auto',
            border: 0,
          },
        },
      }}
    />
  )
}
