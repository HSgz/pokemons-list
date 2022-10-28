import {Button, Navbar, Text } from "@nextui-org/react";
import Logo from "./Logo";
import Link from "next/link";

const styleA = {
  color: "white",
  fontSize: "1.3rem",
};

export const Nav = () => {
  return (
    <Navbar isBordered variant="sticky" maxWidth="fluid">
      <Navbar.Brand>
        <Logo />
        <Text css={{ marginLeft: "$10", fontSize: "$3xl" }}>
          <Link href="/">
            <a style={{ color: "white" }}>Pokémon</a>
          </Link>
        </Text>
      </Navbar.Brand>
      <Navbar.Content variant="underline-rounded" hideIn="xs">
        <Button auto bordered color="primary" rounded>
        <Link href="/">
          <a style={styleA}>Home</a>
        </Link>
        </Button>
        <Button auto bordered color="success" rounded>
          <Link href="/favorites">
            <a style={styleA}>Favorites</a>
          </Link>
        </Button>
      </Navbar.Content>
      <Navbar.Toggle showIn="xs"/>
      <Navbar.Collapse>
        <Navbar.CollapseItem activeColor="primary" css={{display: "flex", flexDirection: "column", alignItems: "flex-start", fontSize: "$3xl", fontWeight: "$light"}}>
          <Link href="/"><a style={{color: "white"}}>Home</a></Link>
          <Link href="/favorites"><a style={{color: "white"}}>Favorites</a></Link>
        </Navbar.CollapseItem>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
