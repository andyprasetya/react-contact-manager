import React, { Component } from 'react';
import { Form, Grid, Button, Message } from 'semantic-ui-react';
import classnames from 'classnames';
import { Field, reduxForm } from 'redux-form';

class ContactForm extends Component {

  render() {
    const { handleSubmit, pristine, submitting, errorMessage, errors } = this.props;
    const { "name.first":first, "name.last":last, phone, email } = errors;

    return (
      <Grid centered columns={2}>
        <Grid.Column>
          <h1 style={{marginTop:"1em"}}>Add New Contact</h1>

          {
            !!errorMessage &&
            <Message error style={{textTransform:"capitalize"}} header={errorMessage}/>
          }

          <Form onSubmit={handleSubmit}>
            <Form.Group widths='equal'>
              <Form.Field className={classnames({error:!!first})}>
                <label htmlFor="first">First Name</label>
                <Field name="first" component="input" type="text" placeholder="First Name"/>
                <span className="error">{!!first && first.message}</span>
              </Form.Field>
              <Form.Field className={classnames({error: !!last})}>
                <label htmlFor="last">Last Name</label>
                <Field name="last" component="input" type="text" placeholder="Last Name"/>
                <span className="error">{!!last && last.message}</span>
              </Form.Field>
            </Form.Group>

            <Form.Field className={classnames({error: !!phone})}>
              <label htmlFor="phone">Phone</label>
              <Field name="phone" component="input" type="text" placeholder="Phone Number"/>
              <span className="error">{!!phone && phone.message}</span>
            </Form.Field>

            <Form.Field className={classnames({error: !!email})}>
              <label htmlFor="email">Email</label>
              <Field name="email" component="input" type="email" placeholder="Email Address"/>
              <span className="error">{!!email && email.message}</span>
            </Form.Field>

            <Button primary type='submit' disabled={pristine || submitting}>Save</Button>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default reduxForm({form: 'contact'})(ContactForm);
