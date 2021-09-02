const stripe = require('stripe')('REPLACE_ME');

async function main() {
  // Create customer
  console.log('Stripe: Create customer');
  const customer = await stripe.customers.create({
    balance: 0,
    email: 'eric.bach@ama.ab.ca',
    name: 'Eric Test',
    description: 'Eric Test Customer',
  });
  console.log(`Stripe: Customer ID: ${customer.id}`);

  // Create payment method
  console.log('Stripe: Create payment method');
  var paymentMethod = await stripe.paymentMethods.create({
    type: 'card',
    card: {
      number: '4242424242424242',
      exp_month: 8,
      exp_year: 2024,
      cvc: '314',
    },
  });
  // TODO - how to assign default payment method on customer?
  paymentMethod = await stripe.paymentMethods.attach(paymentMethod.id, {
    customer: customer.id,
  });
  console.log(`Stripe: Payment Method ID: ${paymentMethod.id}`);

  // Create product
  console.log('Stripe: Create product');
  const product = await stripe.products.create({
    name: 'Basic Membership',
    description: 'Basic Membership Service',
  });
  console.log(`Stripe: Product ID: ${product.id}`);

  // Create price
  console.log('Stripe: Create price');
  const price = await stripe.prices.create({
    unit_amount: 800,
    currency: 'cad',
    recurring: { interval: 'month' },
    product: product.id,
  });
  console.log(`Stripe: Price ID: ${price.id}`);

  // Create subscription
  console.log('Stripe: Create subscription');
  const subscription = await stripe.subscriptions.create({
    customer: customer.id,
    items: [{ price: price.id }],
    default_payment_method: paymentMethod.id,
  });
  console.log(`Stripe: Subscription ID: ${subscription.id}`);
}

if (require.main === module) {
  main();
}
