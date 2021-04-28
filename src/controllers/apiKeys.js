const apiKeysModel = require("../models/apiKeys");

class ApiKeysController {
    async getApiKey({ token }) {
        const [apikey] = await apiKeysModel.getAll({token});
        return apikey
    }
}

module.exports = ApiKeysController;