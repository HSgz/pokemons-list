import { Container, Text } from "@nextui-org/react"
import Image from "next/image"
import pokeball from '../../assets/images/pokeball.png'

const NoFavorites = () => {
  return (
    <Container
        css={{
          display: "flex",
          flexDirection: "column",
          height: "calc(100vh - 100px)",
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        <Text h1>No hay favoritos</Text>
        <Image src={pokeball} width={250} height={250} style={{opacity: 0.3}} alt="pokeball"/>
      </Container>
  )
}
export default NoFavorites