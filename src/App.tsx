import React from 'react';
import {
  Header,
  Container,
  Button,
  Checkbox,
  Form,
  List,
  Divider,
} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import createSubscription from './api/stripeApi';

async function processPayment(event: React.SyntheticEvent) {
  event.preventDefault();

  console.log('App: Creating subscription in Stripe');

  await createSubscription();

  console.log('App: Successfully created subscription');
}

function App() {
  return (
    <div className='App'>
      <Container>
        <Header as='h2'>Sales Demo</Header>
        <Form onSubmit={(event) => processPayment(event)}>
          <Divider horizontal>Customer</Divider>
          <Form.Group widths='equal'>
            <Form.Field>
              <label>Name</label>
              <input placeholder='Name' />
            </Form.Field>
            <Form.Field>
              <label>Email</label>
              <input placeholder='Email' />
            </Form.Field>
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Field>
              <label>Credit Card Number</label>
              <input placeholder='4242********4242' />
            </Form.Field>
            <Form.Field>
              <label>Expiry Month</label>
              <input placeholder='08' />
            </Form.Field>
            <Form.Field>
              <label>Expiry Year</label>
              <input placeholder='2023' />
            </Form.Field>
            <Form.Field>
              <label>CVV</label>
              <input placeholder='123' />
            </Form.Field>
          </Form.Group>

          <Divider horizontal>Products</Divider>
          <List divided relaxed>
            <List.Item>
              <List.Icon name='money' size='large' verticalAlign='middle' />
              <List.Content>
                <List.Header as='a'>Basic Membership ($92.00)</List.Header>
                <List.Description as='a'>
                  AMA Basic membership service level
                </List.Description>
              </List.Content>
            </List.Item>
          </List>

          <Divider horizontal>Subscriptions</Divider>
          <Form.Field>
            <Checkbox label='Annually ($92.00/year)' />
          </Form.Field>
          <Form.Field>
            <Checkbox label='Monthly ($8.00/month)' checked />
          </Form.Field>

          <Button primary>Submit</Button>
        </Form>
      </Container>
    </div>
  );
}

export default App;
