class UserRepository {
  constructor(data) {
    this.data = data
  }

  getUserData(user_id) {
    return this.data.find(user => user.id === user_id)
  }

  averageStepGoal() {
    const total = this.data.reduce((acc, user) => {
      return acc += user.dailyStepGoal
    }, 0)

    return total / this.data.length
  }
}

export default UserRepository