// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
import './css/normalize.css'
import './css/styles.css'
import users from './apiCalls'
import User from './User'
import UserRepository from './UserRepository'


// Variables
let user = null
let userRepository = null


// DOM Elements
const topBar = document.querySelector('.top-bar')
const friendList = document.querySelector('.friend-list')
const info = document.querySelector('.info')
const steps = document.querySelector('.steps')


// Event Listeners
document.addEventListener('DOMContentLoaded', displayContent)


// Handlers
async function displayContent() {
  userRepository = await users().then(data => new UserRepository(data.userData))
  user = new User(userRepository.data[0])

  displayUserWelcome()
  displayUserFriends()
  displayUserInfo()
  displayUserSteps()
}

function displayUserWelcome() {
  topBar.innerHTML = `
    <p>${todaysDate()}</p>
    <p>Hello, ${user.firstName()}!</p>
  `
}

function displayUserFriends() {
  const friends = getFriendNames()
  const html = friends.map(friend => `<li>${friend}</li>`).join('')

  friendList.innerHTML = html
}

function displayUserInfo() {
  info.innerHTML = `
    <div class="personal-info">
      <p>${user.name}</p>
      <p>${user.email}</p>
      <div class='address'>
        <p>${user.street()}</p>
        <p>${user.cityState()}</p>
        <p>${user.zip()}</p>
      </div>
      <p>Stride Length: 41</p>
      <p>Step Goal: 1000</p>
    </div>
  `
}

function displayUserSteps() {
  steps.innerHTML = `
    <p>Daily step goal: ${user.dailyStepGoal}</p>
    <p>Average daily step goal: ${userRepository.averageStepGoal()}</p>
  `
}


// Helpers
function getFriendNames() {
  return user.friends.map(id => {
    const user = userRepository.getUserData(id)

    return user.name
  })
}

function todaysDate() {
  const date = new Date(Date.now())
  const stringDate = date.toDateString().split(' ').slice(0, 3)

  return `${stringDate[0]}, ${stringDate[1]} ${stringDate[2]}`
}
