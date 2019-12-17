import React from "react";
import { Header, Container, Button, } from "semantic-ui-react";
import Tickets from "./Tickets";
import "../styles/Home.css";
import TicketsForm from "./TicketsForm";

class Home extends React.Component {
  state = { showForm: false,};

  render() {
    return (
      <>
        <Header>Home Page</Header>
        <div style={{display: "flex", justifyContent: "center"}}>
        <div className="show-tickets">
          <Tickets />
        </div>
        </div>
        <br />
        {this.state.showForm === false ?
        <>
        <Button onClick={() => this.setState({showForm: true})}
        >Ticket Form</Button>
        </>
      :  
      <>
      <Button
      onClick={() => this.setState({showForm: false})}
      >Hide Form</Button>
        <div style={{display: "flex", justifyContent: "center"}}>
        <div className="ticket-form">
          <TicketsForm />
        </div>
        </div>
        </>
      }
      </>

    );
  };
};

export default Home;