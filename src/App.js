import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import ProductList from "./routers/main.js";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg" className="navbar">
        <Container>
          <Navbar.Brand
            href="/"
            className="navbar-brand, text-animation-effect"
          >
            Jung's KeyBoard
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbar-nav"
            className="navbar-toggler"
          />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/" className="nav-link">
                Home
              </Nav.Link>
              <Nav.Link href="/about" className="nav-link">
                About
              </Nav.Link>
              <Nav.Link href="/cart" className="nav-link">
                Cart
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="main-bg"></div>

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/about" element={<div>어바웃페이지임</div>} />
        <Route path="/cart" element={<div>어바웃페이지임</div>} />
      </Routes>
    </div>
  );
}

// 이 코드에서는 가로로 3개씩 키보드를 나열하는 줄을 만들어줍니다. 우리가 가진 키보드의 개수에 따라서 필요한 줄의 개수가 달라집니다. 그래서 Row을 여러 개 만들어야 합니다.

// 이 코드는 키보드의 개수를 세서 필요한 줄의 개수를 계산하고, 그 개수만큼 Row를 만들어줍니다. 그리고 각 줄에는 3개씩의 Col이 들어갑니다. 각각의 Col 안에는 키보드의 사진, 제목, 내용, 가격 등이 들어가서 보여지게 됩니다.

// This code creates rows where keyboards are arranged horizontally in groups of three. The number of rows needed depends on the number of keyboards we have. That's why we need to create multiple rows.

// This code counts the number of keyboards we have, calculates the required number of rows, and creates that number of rows. Each row contains three columns. Inside each column, there is a keyboard's picture, title, content, and price, which will be displayed.

export default App;
