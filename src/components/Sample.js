import React, { useState} from 'react'
import {Button , Table , Accordion , Card , Navbar , Nav , Container ,NavDropdown} from 'react-bootstrap';

const Sample = () => {
  
  const [colour, setColour] = useState("Green");

  const changeColor = () => {
    setColour("Red");
  }

  return (
    <div>
    <h1 className='bg-warning text-white'>Use State Hook In React</h1>
    <h2>My State Favourite Colour is {colour}</h2>
    <Button onClick={changeColor}>Change Colour</Button>
    </div>
  )
}

export default Sample

/* <>
<Container>
  <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>


  <h1>Hello World</h1>
  <Button variant="primary">Primary</Button>
  <br />
  <br />
  <Button variant="secondary">Secondary</Button>
  <br />
  <br />
  <Button variant="success">Success</Button>
  <br />
  <br />
  <Button variant="warning">Warning</Button>
  <br />
  <br />
  <Button variant="danger">Danger</Button>
  <br />
  <br />
  <Button variant="info">Info</Button>
  <br />
  <br />
  <Button variant="light">Light</Button>
  <br />
  <br />
  <Button variant="dark">Dark</Button>
  <br />
  <br />
  <Button variant="link">Link</Button>

  <br />
  <br  />
  <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
  </Table>

  <br />
  <br />
  <Accordion defaultActiveKey="0">
    <Accordion.Item eventKey="0">
      <Accordion.Header>Accordion Item #1</Accordion.Header>
      <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1">
      <Accordion.Header>Accordion Item #2</Accordion.Header>
      <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>

  <br />
  <br />
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://picsum.photos/200/300" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>

  </Container>
  </> */

  //___________count___________________

  // function App(){
  //   const [count,setCount] = useState(0)
  //   const addcount = () => {
  //     setCount(count+1)
  //   }
  
  //   return (
  //     <div className='App'>
  //     <h1>Counter : {count}</h1>
  //     <Button onClick={addcount}>Add</Button>
  //     </div>
  //   )
  // }
  // export default App;


// ______map_________

// function App() {

//   
//   let emp = [
//     {Name : 'Nazal', Age : 19},
//     {Name : 'yaseen Mirshal', Age : 20},
//     {Name : 'Shuhaib', Age : 17},
//   ]

//   return (
//     <div className = "App">
// 
//       {
//         emp.map((obj,index) => 
//            <Employee key={index} {...obj}/>
//         )
//       }
      
//     </div>
//   );
// }
                                                                                                                                                                         
// export default App;