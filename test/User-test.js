import { expect } from 'chai'
import User from '../src/User'

const data = {
    "id": 1,
    "name": "Luisa Hane",
    "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
    "email": "Diana.Hayes1@hotmail.com",
    "strideLength": 4.3,
    "dailyStepGoal": 10000,
    "friends": [
      16,
      4,
      8
    ]
}

const user = new User(data)

describe('User', () => {
  it('should be a function', () => {
    expect(User).to.be.a('function')
  })

  it('has attributes', () => {
    expect(user.id).to.be.eq(1)
    expect(user.name).to.be.eq('Luisa Hane')
    expect(user.address).to.be.eq('15195 Nakia Tunnel, Erdmanport VA 19901-1697')
    expect(user.email).to.be.eq('Diana.Hayes1@hotmail.com')
    expect(user.strideLength).to.be.eq(4.3)
    expect(user.dailyStepGoal).to.be.eq(10_000)
    expect(user.friends).to.be.eql([16, 4, 8])
  })

  it('can get the users first name', () => {
    expect(user.firstName()).to.be.eq('Luisa')
  })
})