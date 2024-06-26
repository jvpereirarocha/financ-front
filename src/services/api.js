async function postRequest(url = '', data = {}, headers = {}) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...headers
    },
    body: JSON.stringify(data)
  })

  return response.json()
}

async function getRequest(url = '', headers = {}) {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...headers
    }
  })
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  return response.json()
}

async function putRequest(url = '', data = {}, headers = {}) {
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...headers
    },
    body: JSON.stringify(data)
  })
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  return response.json()
}

async function deleteRequest(url = '', headers = {}) {
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      ...headers
    }
  })
  if (!response.ok) {
    throw new Error(response.statusText)
  }

  return response.json()
}

export { postRequest, getRequest, putRequest, deleteRequest }
