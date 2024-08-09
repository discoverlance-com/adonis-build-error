import HomeController from '#controllers/home_controller'

import { InferPageProps } from '@adonisjs/inertia/types'
import { Head, Link } from '@inertiajs/react'
import { Button } from 'primereact/button'

export default function Home(props: InferPageProps<HomeController, 'home'>) {
  return (
    <div className="flex flex-column justify-content-center align-items-center h-screen">
      <Head title="Homepage" />

      <div className="flex flex-column justify-content-center align-items-center">
        <h1 className="mb-5">AdonisJS x Inertia x React</h1>

        <pre className="max-w-sm mx-auto">
          <code>{JSON.stringify(props.user, undefined, 2)}</code>
        </pre>

        <Button icon="pi pi-user" label="Welcome" className="mb-5" />
        <Link href="/portal" className="font-bold no-underline p-button">
          Go To Portal
        </Link>
      </div>
    </div>
  )
}
