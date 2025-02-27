import { generateDublinWeatherData, generateLondonWeatherData, } from '../services/weatherService.js';
import { validationResult } from 'express-validator';
/**
 * Gets the weather data for a city
 * @param req - The request object
 * @param res - The response object
 */
export const getWeatherData = async (req, res) => {
    // Check if there are any validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.error('Validation error', errors.mapped());
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
        if (city === 'london') {
            console.log(generateLondonWeatherData());
            finalWeatherData = generateLondonWeatherData();
        }
        else if (city === 'dublin') {
            finalWeatherData = generateDublinWeatherData();
        }
        else {
            // If the city is not London or Dublin, return an error
            res.status(404).send('City not found');
            return;
        }
        // Return the weather data as JSON
        res.status(200).json(finalWeatherData);
    }
    catch (error) {
        // If there is an error, log it and send a 500 status code
        console.error('Error in fetching weather data', error);
        res.status(500).send('Error in fetching weather data');
    }
};
//# sourceMappingURL=weatherController.js.map