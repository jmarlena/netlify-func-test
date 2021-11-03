const winston = require('winston');
const logger = winston.createLogger({
  format: winston.format.simple(),
  transports: new winston.transports.Console()
});
// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
  try {
    logger.silly("I am a silly log.");
    logger.debug("I am a debug log.");
    logger.info("I am an info log.");
    logger.warn("I am a warn log with a json object:", { foo: "bar" });
    logger.error("I am an error log.");

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
