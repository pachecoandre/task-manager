const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')

const userOne = {
  name: 'Mike',
  email: 'mike@test.com',
  password: 'm1i2k3e4'
}

beforeEach(async () => {
  await User.deleteMany()
  await new User(userOne).save()
})

test('Shoud signup a new user', async () => {
  await request(app).post('/users').send({
    name: 'Test',
    email: 'test@email.com',
    password: 'test123'
  }).expect(201)
})

test('Should login existing user', async () => {
  await request(app).post('/users/login').send({
    email: userOne.email,
    password: userOne.password
  }).expect(200)
})