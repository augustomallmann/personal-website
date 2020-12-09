import React from "react";
import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
const Nav = ({ categories }) => {
  console.log(categories);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          React Bootstrap
        </Navbar.Brand>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {categories.map((category) => {
              return (
                <li key={category.id}>
                  <Link as={`/category/${category.slug}`} href="/category/[id]">
                    <a>{category.name}</a>
                  </Link>
                </li>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Nav;
