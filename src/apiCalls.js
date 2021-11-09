// Your fetch requests will live here!

const baseURL = 'https://pacific-badlands-43237.herokuapp.com/api/v1'

async function users() {
  const response = await fetch(`${baseURL}/users`)

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json()
}

export default users
