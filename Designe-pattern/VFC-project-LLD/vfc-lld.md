                   ┌─────────────────────────────┐
                   │        React / Channel      │
                   └──────────────┬──────────────┘
                                  │
                         POST /enrollment (API Gateway)
                                  │
                                  ▼
                    ┌────────────────────────┐
                    │   Enrollment Service   │
                    │ (Node.js Microservice) │
                    └───────────┬────────────┘
                                │
                Validate Request │
                                ▼
                        Redis Cache
                  (Customer/Card Cache)
                                │
               Cache Miss        │ Cache Hit
                    │            │
                    ▼            ▼
                  MongoDB     Return Data
                    │
                    ▼
          Save Enrollment Request
                    │
                    ▼
          Call Finacle Enrollment API
                    │
                    ▼
                Finacle System
                    │
                    ▼
                 NI Service
                    │
            Kafka Producer
                    │
                    ▼
        FEEM_CARD_EVENTS Topic
                    │
          ┌─────────┴───────────┐
          ▼                     ▼

Bawaba Consumer Notification Consumer
│
▼
Redis Cache
│
▼
MongoDB Update
│
▼
Tibco Service
│
▼
Visa Enrollment API
