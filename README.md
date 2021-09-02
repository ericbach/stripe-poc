# Stripe POC

## Getting Started

1. Repalce the Stripe API Key in `stripeAPi.ts`
2. npm install
3. npm start
4. Open the browser console (F12)
5. Click the `Submit` button (the form fields currently don't do anything)
6. In the Stripe dashboard, no Subscriptions are created
   Also notice in the console the console logs show the `stripeApi.ts` starts to create the customer in the subscription but never finishes
   ```
   App: Creating subscription in Stripe
   Stripe: Create customer
   ```
