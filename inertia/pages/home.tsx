import { Head, Link } from '@inertiajs/react'
import { Button } from 'primereact/button'

export default function Home(props: { version: number }) {
  return (
    <div className="flex flex-column justify-content-center align-items-center h-screen">
      <Head title="Homepage" />

      <div className="flex flex-column justify-content-center align-items-center">
        <h1 className="mb-5">AdonisJS {props.version} x Inertia x React</h1>

        <Button icon="pi pi-user" label="Welcome" className="mb-5" />
        <Link href="/portal" className="font-bold no-underline p-button">
          Go To Portal
        </Link>
      </div>
    </div>
  )
}
