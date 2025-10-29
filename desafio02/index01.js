class LegacyPaymentSystem {
    makePayment(amount) {
        console.log(`Pagando R$${amount} com sistema legado.`);
    }
}
  
class ModernPaymentAPI {
    process(amountInCents) {
        console.log(`Pagamento de R$${amountInCents / 100} via API moderna.`);
    }
}
  
class ModernPaymentAdapter extends LegacyPaymentSystem {
    constructor(modernPayment) {
        super();
        this.modernPayment = modernPayment;
    }

    makePayment(amount) {
        this.modernPayment.process(amount);
    }
}
  
class PaymentProcessor {
    constructor(system) {
        this.system = system;
    }

    pay(amount) {
        this.system.makePayment(amount);
    }
}
  
// Cliente
const legacy = new LegacyPaymentSystem();
const processor = new PaymentProcessor(legacy);
processor.pay(100);

const modernPayment = new ModernPaymentAPI();
const modernPaymentAdapter = new ModernPaymentAdapter(modernPayment);
const modernProcessor = new PaymentProcessor(modernPaymentAdapter);
modernProcessor.pay(200);