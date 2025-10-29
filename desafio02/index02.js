class Message {
    constructor(text) {
        this.text = text;
    }

    getText() {
        return this.text;
    }
}

// Decorator base
class MessageDecorator {
    constructor(message) {
        this.message = message;
    }

    getText() {
        return this.message.getText();
    }
}
  
// Decorator concreto: envia e-mail
class EmailMessage extends MessageDecorator {
    getText() {
        const text = super.getText();
        console.log("Enviando mensagem por e-mail:", text);
        return text;
    }
}
  
// Decorator concreto: envia SMS
class SMSMessage extends MessageDecorator {
    getText() {
        const text = super.getText();
        console.log("Enviando mensagem por SMS:", text);
        return text;
    }
}

// Cliente
const msg = new Message("hoje o dia está horrível");
console.log(msg.getText());
  
// Cliente: empilha os decoradores
const message = new SMSMessage(new EmailMessage(new Message("Hoje o dia está bonito")));
message.getText();