import env from '#start/env'
import { defineConfig } from '@adonisjs/lucid'

export const tursoDBUrl = env.get('TURSO_DB_URL')

const dbConfig = defineConfig({
  connection: 'libsql',
  connections: {
    libsql: {
      client: 'libsql',
      connection: {
        filename: tursoDBUrl,
      },
      pool: {
        min: 0,
        idleTimeoutMillis: 5 * 1000,
      },
      useNullAsDefault: true,
      migrations: {
        naturalSort: true,
        paths: ['database/migrations'],
      },
    },
  },
})

export default dbConfig
