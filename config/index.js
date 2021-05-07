require('dotenv').config();

const config = {
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.PORT || 8080,
    host: process.env.HOST || "0.0.0.0",
    dbUser: process.env.DB_USER,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
    dbPassword: process.env.DB_PASSWORD,
    corsOrigin: process.env.CORS_ORIGIN,
    authJwtSecret: process.env.AUTH_JWT_SECRET,
    employeeApiKeyToken: process.env.EMPLOYEE_API_KEY_TOKEN,
    supervisorApiKeyToken: process.env.SUPERVISOR_API_KEY_TOKEN,
    googleClientId: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET
}

module.exports = { config };