import { expect } from 'chai'
import userData from '../src/data/users'
import UserRepository from '../src/UserRepository'

const user = {
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

const userRepo = new UserRepository(userData)
 
describe('UserRepository', () => {
  it('should be a function', () => {
    expect(UserRepository).to.be.a('function')
  })

  it('has attributes', () => {
    expect(userRepo.data).to.be.eql(userData)
  })

  it('can get all data for a specific user', () => {
    expect(userRepo.getUserData(1)).to.be.eql(user)
  })

  it('can get the average step goal', () => {
    expect(userRepo.averageStepGoal()).to.be.eq(6700)
  })
})