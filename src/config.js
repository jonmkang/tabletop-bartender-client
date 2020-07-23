module.exports = {
    PORT: process.env.PORT || 8080,
    // other stuff
    API_BASE_URL: process.env.REACT_APP_API_BASE_URL || "http://localhost:8000/api",
    TOKEN_KEY: 'thingful-client-auth-token',
  };