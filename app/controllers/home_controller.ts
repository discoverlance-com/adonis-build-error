import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'
import { UserDto } from '../dtos/user_dto.js'

export default class HomeController {
  async home({ inertia }: HttpContext) {
    const user = await User.query().preload('role').first()
    return inertia.render('home', {
      user: new UserDto(user!).toJson(),
    })
  }

  async portal({ inertia }: HttpContext) {
    return inertia.render('portal/home')
  }
}
