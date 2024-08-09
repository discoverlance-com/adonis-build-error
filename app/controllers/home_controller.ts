import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class HomeController {
  async home({ inertia }: HttpContext) {
    const user = await User.query().preload('role').first()
    return inertia.render('home', {
      user: user,
    })
  }

  async portal({ inertia }: HttpContext) {
    return inertia.render('portal/home')
  }
}
