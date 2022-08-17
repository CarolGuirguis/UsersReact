import React from 'react';
import './Cards.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container ,Card, Col,Row, Button} from 'react-bootstrap';  

class Cards extends React.Component {
  constructor(){
    super();
    this.state={
      friends:[],
      loading:true,
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())
    .then((friends)=>{
      this.setState({friends,loading:false});
    });
}
handleDelete(id){
  this.setState({loading:true});
  var newarray=this.state.friends;
  for(var i = 0; i < newarray.length; i++) {
    
    if(newarray[i].id === id) {
      newarray.splice(i, 1);
      this.setState({friends:newarray,loading:false});
      break;
    }
}
}
  render() {
    if(this.state.loading){
      return(
      <div>Loading Users</div>
    )}
    else{
    return (
      <Container>
      <Row>
      {this.state.friends.map((friend) => (
                    
               
              <Col key={friend.id} xs={12} md={4} lg={3}>
                  <Card className="space">
                      <Card.Img  />

                      <Card.Body>
                          <Card.Title>{friend.name}</Card.Title>
                          <Card.Text>{friend.email}</Card.Text>
                          <Button variant="primary" onClick={() => this.handleDelete(friend.id)}>Delete</Button>
                      </Card.Body>
                  </Card>
              </Col>
          ))}
      </Row>
  </Container>
    )
  }}
}

export default Cards;