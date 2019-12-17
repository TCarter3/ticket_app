import React from "react";
import { Card, Header, Button, Confirm, } from "semantic-ui-react";
import axios from "axios";

class Tickets extends React.Component {
  state = { tickets: [], open: false, };

  deleteTicket = (id) => {
    axios.delete(`/api/tickets/${id}`)
    .then(res => {
      this.setState({ tickets: this.state.tickets.filter( ticket => ticket.id !== id ), })
    })
    .catch( err => {
      console.log(err)
    })
  };

  show = () => this.setState({ open: true })
  handleConfirm = () => this.setState({ open: false })
  handleCancel = () => this.setState({ open: false })

  componentDidMount() {
    axios.get("/api/tickets")
    .then( res => {
      this.setState({ tickets: res.data })
    })
  }

  renderTickets = () => {
    const { tickets, } = this.state;

    if (tickets.length <= 0)
    return <p>No Tickets at this time!</p>
    return tickets.map( ticket =>(
      <Card>
        <Card.Content>
          <Card.Header>{ticket.name}</Card.Header>
          <Card.Meta>{ticket.urgency}</Card.Meta>
          <Card.Description>{ticket.description}</Card.Description>
          </Card.Content>
          
          <Button 
          // onClick={this.show} 
          onClick={() => this.deleteTicket()}
          inverted color="red"
          >Mark as Complete</Button>

          <Confirm
          open={this.state.open}
          header="You are about to delete" { ...ticket.name }
          onCancel={this.handleCancel}
          onConfirm={this.handleConfirm}
        />
      </Card>
    ))
  }

  render() {
    return (
      <div>
        <Header>Active Tickets:</Header>
        <br/>
        <Card.Group>
          {this.renderTickets() }
        </Card.Group>
      </div>

    );
  };
};

export default Tickets;