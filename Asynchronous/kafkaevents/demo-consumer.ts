import * as dotenv from '.dotenv';
dotenv.config();
import { EventQOSfactory } from './scr';

async () => {
  await EventQOSfactory.createAtLeatOnce()
    .getConsumer({
      groupId: 'ENBD-Leap',
      topic: ['account-ebi'],
    })
    .subscribe(async ({ message, topic, partition, headers }) => {
      console.log('Ecerved events for processing =>', JSON.stringify(message));
    });

  console.log('Listening!!');
};
