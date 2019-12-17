import React from "react";
import { Form, Header, TextArea, Select, } from "semantic-ui-react";
import axios from "axios";

const options = [
  { key: "g", text: "Green (Not Urgent)", value: "green", },
  { key: "y", text: "Yellow (Semi-Urgent)", value: "yellow", },
  { key: "r", text: "Red (Urgent)", value: "red",},
]

class TicketsForm extends React.Component {
  defaultValues = {name: "", description: "", completed: false,};
  state = { ...this.defaultValues, };

  handleSubmit = (e) => {
    e.preventDefault();
    const ticket = { ...this.state, };
    axios.post('api/tickets', ticket)
      .then( res => {
        this.setState({ ...this.defaultValues, });
      })
  }

  handleChange = (e) => {
    const { target: { name, value, } } = e;
    this.setState({ [name]: value, });
  }

  render() {
    const { name, description, urgency,} = this.state;


    return (
      <>
        <Header>Ticket Form</Header>
        <br/>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal" >
            <Form.Input
            label="Name"
            name="name"
            placeholder="Ticket Name"
            value={name}
            onChange={this.handleChange}
            required
            />
            {/* <Form.Select
            fluid
            label='Urgency'
            options={options}
            value={urgency}
            name="urgency"
            placeholder='Ticket Urgency'
            onChange={this.handleChange}
            required
          /> */}
            </Form.Group>
            <Form.Field
            fluid
            control={TextArea}
            label="Description"
            name="description"
            placeholder="Ticket Description"
            value={description}
            onChange={this.handleChange}
            required
            />
          <Form.Button color="blue">Submit</Form.Button>
        </Form>
      </>

    );
  };
};

export default TicketsForm;
