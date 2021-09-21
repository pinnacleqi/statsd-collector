// Default configuration values. These values can be overridden by creating a config.js file in the project root.
export default {
    // The host for the statsd server.
    statsdHost: "127.0.0.1",
    // The port for the statsd server.
    statsdPort: 8125,
    // php-fpm metric collection configuration.
    phpFpm: {
        // The URL to request to obtain php-fpm metrics.
        statusUrl: "http://127.0.0.1/php-fpm-status",
        // The names of the metrics that should be collected.
        metricsToCollect: [
            "active processes",
            "idle processes",
            "listen queue len"
        ]
    }
}
