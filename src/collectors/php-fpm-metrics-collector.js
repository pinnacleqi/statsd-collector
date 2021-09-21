import axios from 'axios';

/**
 * @param {string} statusUrl
 * @param {string[]} metricsToCollect
 *
 * @returns Object
 */
export default async function collectMetrics(statusUrl, metricsToCollect) {
    try {
        const instance = axios.create({
            timeout: 1000,
        });
        const response       = await instance.get(`${statusUrl}?json`);
        const parsedResponse = JSON.parse(response.data);

        return {
            metrics: metricsToCollect.map(
                metricName => {
                    return {
                        name:  metricName,
                        value: parsedResponse[metricName]
                    }
                }
            )
        };
    } catch (err) {
        console.log(err);
    }

    return {
        metrics: []
     };
}
