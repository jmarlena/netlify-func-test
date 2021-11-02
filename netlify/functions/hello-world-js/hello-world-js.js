const winston = require('winston');
const defaultLevels = winston.createLogger({
  level: 'silly',
  format: winston.format.simple(),
  transports: new winston.transports.Console()
});
// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
  try {
    function logAllLevels() {
      Object.keys(winston.config.npm.levels).forEach(level => {
        defaultLevels[level](`is logged when logger.level="${defaultLevels.level}"`);
      });
    }
    
    logAllLevels();
    const subject = event.queryStringParameters.name || 'World'
    console.log("console log line")
    console.error("console error log line")
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello ${subject}` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
