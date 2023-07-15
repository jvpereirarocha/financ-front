export async function postRequest(url='', data={}, headers={}) {
    return fetch(url, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        ...headers
        },
        body: JSON.stringify(data)
    })
}

async function getRequest(url='', headers={}) {
    return fetch(url, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        ...headers
        },
    })
}

async function putRequest(url='', data={}, headers={}) {
    return fetch(url, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json',
        ...headers
        },
        body: JSON.stringify(data)
    })
}

async function deleteRequest(url='', headers={}) {
    return fetch(url, {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json',
        ...headers
        },
    })
}

export default {
    postRequest,
    getRequest,
    putRequest,
    deleteRequest
}