import collectMetrics from "./collectors/php-fpm-metrics-collector.js";
import lynx from "lynx";
import config from "../config.js";

const statsdPort       = config.statsdPort;
const statsdHost       = config.statsdHost;
const metricsToCollect = config.phpFpm.metricsToCollect;
const phpFpmStatusUrl  = config.phpFpm.statusUrl;

const statsdClient = new lynx(statsdHost, statsdPort);

const METRIC_COLLECTION_INTERVAL_MS = 1000;

setInterval(async () => {
    const metrics = (await collectMetrics(phpFpmStatusUrl, metricsToCollect)).metrics;
    metrics.forEach(metric => statsdClient.gauge(`php.fpm.${metric.name.replaceAll(/\s+/ig, '_')}`, metric.value));
}, METRIC_COLLECTION_INTERVAL_MS);
