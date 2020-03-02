const request = require('supertest');
const { User } = require('../../src/app/models');
const app = require('../../src/app');

describe('Authentication', () => {
  it('should authenticate with valid credentials', async () => {
    const user = await User.create({
      name: 'Marlon',
      email: 'marlonsoftwares@gmail.com',
      password_hash: '123123'
    });

    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: user.password_hash
      });

      expect(response.status).toBe(200);
  });
});
