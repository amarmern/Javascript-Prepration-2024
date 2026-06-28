1. Strategy Pattern
Different channels have different sending logic.
these are domain class
Notification class
public class Notification {

    private String id;
    private String userId;
    private String message;
    private ChannelType channelType;
    private NotificationStatus status;
}

// user class
public class User {

    private String userId;
    private String email;
    private String phone;
    private String deviceToken;
}
//User Preference
public class UserPreference {

    private String userId;

    private boolean emailEnabled;
    private boolean smsEnabled;
    private boolean pushEnabled;
}
// startegy desine pattern
interface INotificationChannel {
    void send(Notification notification);
}

// Implementation of Email Notification Strategy
class EmailChannel implements INotificationChannel {
    public void send(Notification notification) {
        System.out.println("Sending Email");
    }
}
// Implementation of SMS Notification Strategy
class SmsChannel implements INotificationChannel {
    public void send(Notification notification) {
        System.out.println("Sending SMS");
    }
}
// Implementation of Push Notification Strategy
class PushChannel implements INotificationChannel {
    public void send(Notification notification) {
        System.out.println("Sending Push");
    }
}


2. Factory Pattern
//Create proper channel dynamically.
public class NotificationFactory {
    public INotificationChannel getChannel(ChannelType type) {
        switch(type) {
            case EMAIL:
                return new EmailChannel();
            case SMS:
                return new SmsChannel();
            case PUSH:
                return new PushChannel();
            default:
                throw new RuntimeException("Invalid Channel");
        }
    }
}
//Notification Service
public class NotificationService {
// dependency injection of factory class
    private NotificationFactory factory;

    public void send(Notification notification) {

        INotificationChannel channel =
            factory.getChannel(notification.getChannelType());

        channel.send(notification);
    }
}


Template Engine

Instead of hardcoded messages.

Hello {{name}},
Your order {{orderId}} is shipped.

interface TemplateService {

    String render(
        String templateId,
        Map<String,Object> data
    );
}

String message =
 templateService.render(
    "ORDER_SHIPPED",
    payload
 );

 Provider Layer

 Create abstraction.
interface INotificationProvider {
    void send(Notification notification);
}
Email Provider
class SendGridProvider implements INotificationProvider {
    public void send(Notification notification) {
        // SendGrid API
    }
}
SMS Provider
class TwilioProvider implements INotificationProvider {
    public void send(Notification notification) {
        // Twilio API
    }
}
Retry Mechanism
class RetryService {
   public void retry(Notification notification) {
      if(notification.getRetryCount() < 5) {
         notification.incrementRetry();
         queue.publish(notification);
      }
      else {
         dlq.publish(notification);
      }
   }
}
