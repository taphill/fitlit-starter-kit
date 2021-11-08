class User {
  constructor(userData) {
    this.id = userData.id || null
    this.name = userData.name || null
    this.address = userData.address || null
    this.email = userData.email || null
    this.strideLength = userData.strideLength || null
    this.dailyStepGoal = userData.dailyStepGoal || null
    this.friends = userData.friends || []
  }

  firstName() {
    return this.name.split(' ')[0]
  }

  street() {
    return this.address.split(', ')[0]
  }

  cityState() {
    return this.address.split(', ')[1].split(' ').slice(0, 2).join(', ')
  }

  zip() {
    return this.address.split(', ')[1].split(' ').pop()
  }
}

export default User