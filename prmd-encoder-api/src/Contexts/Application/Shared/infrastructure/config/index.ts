import convict from 'convict';

// @ts-ignore
const moocConfig = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'staging', 'test'],
    default: 'default',
    env: 'NODE_ENV'
  },
  promedApi: {
    url: {
      doc: 'The promed API url',
      format: String,
      env: 'PROMED_API',
      default: process.env.PROMED_API
    }
  },
  auth: {
    client: {
      doc: 'The oauth2 connection user',
      format: String,
      env: 'AUTH_CLIENT_ID',
      default: process.env.AUTH_CLIENT_ID,
    },
    password: {
      doc: 'The oauth2 connection password',
      format: String,
      env: 'AUTH_CLIENT_PASSWORD',
      default: process.env.AUTH_CLIENT_PASSWORD,
    },
    uri: {
      doc: 'The oauth2 connection url',
      format: String,
      env: 'AUTH_URI',
      default: process.env.AUTH_URI,
    }
  },
  rabbitMQ: {
    host: {
      doc: 'The RabbitMQ connection host',
      format: String,
      env: 'RABBITMQ_HOST',
      default: 'localhost'
    },
    user: {
      doc: 'The RabbitMQ connection user',
      format: String,
      env: 'RABBITMQ_DEFAULT_USER',
      default: 'guest'
    },
    password: {
      doc: 'The RabbitMQ connection password',
      format: String,
      env: 'RABBITMQ_DEFAULT_PASS',
      default: 'guest'
    },
    queue: {
      doc: 'Queue where subscribers listen on',
      format: String,
      env: 'RABBITMQ_QUEUE',
      default: 'Mooc-DomainEvents'
    },
    exchange: {
      doc: 'Exchange where events are published',
      format: String,
      env: 'RABBITMQ_EXCHANGE',
      default: 'DomainEvents'
    }
  }
});

moocConfig.loadFile([__dirname + '/default.json', __dirname + '/' + moocConfig.get('env') + '.json']);
export default moocConfig;
