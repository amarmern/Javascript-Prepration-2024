import * as dotenv from '.dotenv';

import {EventQOSfactory , IKafkaEvent} from './scr';

(async () => {
    const event : IKafkaEvent = {
        topic: 'account-ebi',
        message:{
            eventId: 'x-random-id-4',
            channleId: "TBK",
            financialId: 'EBI',
            timestamp:  new Date().toISOString(),
            type: 'Account_update',
            data: {
                account: '12345',
                cif:'122'
            }
        } as any
    }

    await EventQOSfactory.createAtmostOnce().getProducer().send(event)
    console.log('Done!!')
})