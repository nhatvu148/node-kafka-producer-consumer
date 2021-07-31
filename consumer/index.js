import Kafka from 'node-rdkafka';
import eventType from '../eventType.js';

var consumer = new Kafka.KafkaConsumer({
  'group.id': 'kafka',
  'metadata.broker.list': '192.168.1.3:9092',
}, {});

consumer.connect();

consumer.on('ready', () => {
  console.log('consumer ready..')
  consumer.subscribe(['test']);
  consumer.consume();
}).on('data', function(data) {
  console.log(`received message: ${eventType.fromBuffer(data.value)}`);
});
