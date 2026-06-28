               Client (React / Mobile)
                        |
                  Load Balancer
                        |
               WebSocket Gateway
                        |
             Authentication (JWT)
                        |
                 Chat Service
                        |
       -----------------------------
       |            |              |
     Redis       Cassandra      Kafka
       |                           |

Presence Cache Event Bus
| |
Notification Search Analytics
Service Service Service
|
Push Notification
