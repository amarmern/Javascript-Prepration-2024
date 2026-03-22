/*
The Strategy Design Pattern is a behavioral pattern that defines a family of 
algorithms, encapsulates each one in a separate class,and makes them 
interchangeable at runtime.
 It allows the algorithm to vary independently from the clients that use it,
  promoting code flexibility, reusability, and adherence to SOLID principles. 

Use Cases and Examples
Payment Methods: A shopping cart supports multiple payment methods 
(e.g., Credit Card, PayPal, Bitcoin), chosen at checkout.
Route Planning: A navigation app selects different routing strategies 
(driving, walking, public transport).
Sorting Algorithms: A data processor selects different sorting techniques 
based on data size.
Image Filtering: A photo editor allows applying different filters to an image. 

Maintainability: Isolate algorithm-specific logic from the context class.
Extensibility: Add new strategies without modifying existing code (Open/Closed Principle).
Cleaner Code: Removes bloated conditional statements (e.g., if-else or switch cases). 


// Strategy Interface
interface PaymentStrategy {
    void pay(int amount);
}

// Concrete Strategy A
class CreditCardStrategy implements PaymentStrategy {
    public void pay(int amount) { /*...Pay with card...*/ }
}

// Concrete Strategy B
class PaypalStrategy extends PaymentStrategy {
    public void pay(int amount) { /*...Pay with PayPal...*/ }
}

// Context
class ShoppingCart {
    private PaymentStrategy strategy;
    // Set strategy at runtime
    public setPaymentStrategy(PaymentStrategy strategy) {
        this.strategy = strategy;
    }
    public checkout(int amount) {
        strategy.pay(amount);
    }
}
The Strategy Pattern is closely related to the Template Method pattern 
but focuses on changing the entire algorithm, whereas Template Method uses
inheritance to change parts of an algorithm. 


