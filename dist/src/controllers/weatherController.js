"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWeatherData = void 0;
const weatherService_1 = require("../services/weatherService");
const express_validator_1 = require("express-validator");
/**
 * Gets the weather data for a city
 * @param req - The request object
 * @param res - The response object
 */
const getWeatherData = async (req, res) => {
    // Check if there are any validation errors
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        console.error("Validation error", errors.mapped());
        res.status(400).json({ errors: errors.array() });
        return;
    }
    try {
        // Get the city param from the request
        const { city } = req.params;
        console.log(city);
        // Define a variable with a type of WeatherData
        let finalWeatherData;
        // Check which city was passed in
        if (city === "london") {
            console.log((0, weatherService_1.generateLondonWeatherData)());
            finalWeatherData = (0, weatherService_1.generateLondonWeatherData)();
        }
        else if (city === "dublin") {
            finalWeatherData = (0, weatherService_1.generateDublinWeatherData)();
        }
        else {
            // If the city is not London or Dublin, return an error
            res.status(404).send("City not found");
            return;
        }
        // Return the weather data as JSON
        res.status(200).json(finalWeatherData);
    }
    catch (error) {
        // If there is an error, log it and send a 500 status code
        console.error("Error in fetching weather data", error);
        res.status(500).send("Error in fetching weather data");
    }
};
exports.getWeatherData = getWeatherData;
//# sourceMappingURL=weatherController.js.map