import Link from "next/link";
import React from "react";

export const NavBar = () => (
  <nav
    style={{
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <h1>Store</h1>
    <ul
      style={{
        listStyleType: "none",
        display: "flex",
      }}
    >
      <li style={{ paddingRight: "1em" }}>
        <Link href="/">Home</Link>
      </li>
      <li style={{ paddingRight: "1em" }}>
        <Link href="/cart">Cart</Link>
      </li>
    </ul>
  </nav>
);
