import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">𝑽𝖎𝖓𝖎 𝕿𝖔𝖘𝖈𝖆𝖓𝖎 🍇 </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">ɪɴꜰᴏ </Nav.Link>
            <Nav.Link href="#features">ᴀʙᴏᴜᴛ</Nav.Link>
            <Nav.Link href="#pricing">ᴄᴏɴᴛᴀᴛᴛɪ</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
