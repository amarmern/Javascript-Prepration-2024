LLD Components
NotificationController
|
NotificationService
|
NotificationFactory
|
+--------+--------+--------+
| Email | SMS | Push |
+--------+--------+--------+
|
NotificationProvider
|
SendGrid/Twilio/FCM
...................................................

FLOW:
............................................
API Request
|
NotificationService
|
NotificationFactory
|
Email/SMS/Push Channel
|
Provider

---

Notification Flow

1. Event Generated

Examples:
Order Placed
Payment Successful
Friend Request
Password Reset

2. Notification Service
   Receives the event and: then,

Fetches user preferences
Determines channels
Builds notification payload
Pushes messages to queue

{
"notificationId": "n123",
"userId": "123",
"channel": "EMAIL",
"templateId": "order_shipped"
}

3. Queue
   Using:
   Apache Kafka
   RabbitMQ
   Amazon SQS

Benefits:
Decoupling
Backpressure handling
Retry capability

4. Channel Workers
   Email Worker
   Queue -> Email Worker -> Email Provider
   SMS Worker
   Queue -> SMS Worker -> Twilio
   Push Worker
   Queue -> Push Worker -> FCM/APNS

Interview-Level Architecture
Event Producers
|
v
+-------------------+
| Notification API |
+-------------------+
|
v
+-------------------+
| Notification Core |
+-------------------+
|
+--> User Preference Service
+--> Template Service
+--> Scheduler Service
|
v
+-------------------+
| Kafka |
+-------------------+
|
+------+------+------+
| Push | Email| SMS |
+------+------+------+
|
External Providers
|
v
Delivery Status
|
v
Analytics & Monitoring
