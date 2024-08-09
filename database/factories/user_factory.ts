import factory from '@adonisjs/lucid/factories'
import User from '#models/user'

export const UserFactory = factory
  .define(User, async ({ faker }) => {
    return {
      email: faker.internet.email(),
      fullName: faker.person.fullName(),
      password: faker.internet.password(),
      role_id: faker.number.int({ min: 1, max: 2 }),
      avatar: faker.image.url(),
    }
  })
  .state('admin', (user) => (user.roleId = 1))
  .state('moderator', (user) => (user.roleId = 2))
  .build()
