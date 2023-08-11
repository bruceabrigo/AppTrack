let apiUrl

const apiUrls = {
    production: '< WILL CONTAIN PRODUCTION URL >',
    development: 'http://localhost:8000'
}

if (window.location.hostname === 'localhost') {
    apiUrl = apiUrls.development
} else {
    apiUrl = apiUrls.production
}

export default apiUrl