import { Navbar, Text } from "@nextui-org/react";
import Logo from "./Logo";
import Link from 'next/link'

const styleA = {
  color: "white",
  fontSize: "1.3rem"
}

export const Nav = () => {
  return (
    <Navbar isBordered variant="sticky" maxWidth="fluid">
      <Navbar.Brand>
        <Logo />
        <Text css={{marginLeft: "$10", fontSize: "$3xl"}}>
          <Link href="/">
            <a style={{color: "white"}}>Pokémon</a>
          </Link>
        </Text>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs" variant="underline-rounded">
        <Link href="/">
          <a style={styleA}>Home</a>
        </Link>
        <Link href="/favorites"><a style={styleA}>Favorites</a></Link>
      </Navbar.Content>
    </Navbar>
  );
};

export default Nav