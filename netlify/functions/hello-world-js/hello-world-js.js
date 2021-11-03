const winston = require('winston');
var npmlog = require('npmlog')
var loglevel = require('loglevel');

const logger = winston.createLogger({
  format: winston.format.simple(),
  transports: new winston.transports.Console()
});
// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
  try {
    // logger.info("I am an info winstonlog.");
    // logger.warn("I am a warn winstonlog with a json object:", { foo: "bar" });
    // logger.error("I am an error winstonlog.");

    
    npmlog.info("I am an info npmlog.");
    npmlog.warn("I am a warn npmlog with a json object:", { foo: "bar" });
    npmlog.error("I am an error npmlog.");

    loglevel.enableAll()
    loglevel.debug("I am a debug loglevel.");
    loglevel.info("I am an info loglevel.");
    loglevel.warn("I am a warn loglevel with a json object:", { foo: "bar" });
    loglevel.error("I am an error loglevel.");
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
