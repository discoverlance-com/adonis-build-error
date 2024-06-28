/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

const HomeController = () => import('#controllers/home_controller')

router.get('/', [HomeController, 'home']).use(middleware.guest()).as('home')
// make dashboard a guest route for test
router.get('/portal', [HomeController, 'portal']).use(middleware.guest()).as('portal')
