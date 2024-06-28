import { test } from '@japa/runner'

test.group('Home', () => {
  test('homepage renders successfully', async ({ client }) => {
    const response = await client.get('/').withInertia()

    response.assertStatus(200)
    response.assertInertiaComponent('home')
  })
})
