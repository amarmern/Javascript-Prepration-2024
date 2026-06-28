This producer/consumer role switching is the foundation of the Saga Pattern and event-driven microservices. A service rarely remains only a producer or only a consumer in real-world systems.

Order API
|
| ORDER_CREATED
▼
Kafka
|
▼
Payment Service (Consumer)

Payment Failed
|
▼
PAYMENT_FAILED (Producer)
|
▼
Kafka
|
┌───┴──────────────┐
▼ ▼
Order Service Inventory Service
Cancel Order Release Stock

---

A microservice can be both Consumer and Producer.

For Payment Service:

## Consumes:

ORDER_CREATED

## Produces:

PAYMENT_SUCCESS
PAYMENT_FAILED
PAYMENT_REFUNDED

Similarly:

Order Service
Produces:

---

ORDER_CREATED

## Consumes:

PAYMENT_SUCCESS
PAYMENT_FAILED

## Produces Again:

ORDER_CONFIRMED
ORDER_CANCELLED
Inventory Service
Consumes:

---

ORDER_CREATED
PAYMENT_FAILED

## Produces:

INVENTORY_RESERVED
INVENTORY_RELEASED
