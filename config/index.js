const env = process.env.NODE_ENV || 'dev';

module.exports = env === 'dev' ? require('./dev') : require('./prod');