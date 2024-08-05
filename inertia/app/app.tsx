/// <reference path="../../adonisrc.ts" />
/// <reference path="../../config/inertia.ts" />

import { createRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react'
import { PrimeReactProvider } from 'primereact/api'
import { resolvePageComponent } from '@adonisjs/inertia/helpers'

import 'primereact/resources/themes/lara-light-teal/theme.css'
import 'primereact/resources/primereact.min.css' //core css
import 'primeicons/primeicons.css' //icons
import 'primeflex/primeflex.css'
import '../css/app.css'
import { DashboardLayout } from '~/components/layouts/dashboard_layout'
import { GuestLayout } from '~/components/layouts/guest_layout'

const appName = import.meta.env.VITE_APP_NAME || 'AdonisJS x Build Error'

createInertiaApp({
  progress: { color: '#5468FF' },

  title: (title) => `${title} - ${appName}`,

  resolve: (name) => {
    const pages = import.meta.glob('../pages/**/*.tsx') // 👈 no eager: true
    let page = pages[`../pages/${name}.tsx`]
    //@ts-ignore
    page.default.layout = name.startsWith('portal/')
      ? //@ts-ignore
        (p) => <DashboardLayout children={p} />
      : //@ts-ignore
        (p) => <GuestLayout children={p} />
    return page
  },

  setup({ el, App, props }) {
    createRoot(el).render(
      <PrimeReactProvider>
        <App {...props} />
      </PrimeReactProvider>
    )
  },
})
