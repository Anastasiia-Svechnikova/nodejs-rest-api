const messages = {
    400: 'Bad request',
    401: 'Unauthorized',
    403: 'Forbidden', 
    404: 'Not found', 
    409: 'Conflict'
}

const requestError = (status, message = null) => {
    const errorMessage = message || messages[status]
    const error = new Error(errorMessage)
    error.status = status
    // console.log(error.status)
    return error
}

module.exports = {
    requestError
}