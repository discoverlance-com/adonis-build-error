import { UserFactory } from '#database/factories/user_factory'
import Role from '#models/role'
import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // create admin user
    await Role.firstOrCreate({ id: 1, description: 'Admin user', name: 'admin' })

    // create moderator role
    await Role.firstOrCreate({
      id: 2,
      description: 'Moderator user',
      name: 'moderator',
    })

    // create admin users
    await UserFactory.apply('admin').createMany(4)

    // create moderator users
    await UserFactory.apply('moderator').createMany(4)
  }
}
