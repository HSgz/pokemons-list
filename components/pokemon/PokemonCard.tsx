import { FC } from "react";
import { ListPokemon } from "../../interfaces/pokemon-list";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";

interface Props {
  pokemon: ListPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon: {id, name, img} }) => {
  
    const router = useRouter();
    const onClick = () => {
        router.push(`/name/${name}`)
    }

    return (
    <>
      <Grid xs={6} sm={3} md={2} xl={2} key={id}>
        <Card isHoverable isPressable onClick={() => onClick()}>
          <Card.Body css={{ p: 1 }}>
            <Card.Image src={img} width="100%" height={140} />
          </Card.Body>
          <Card.Footer>
            <Row justify="space-around">
              <Text>#{id}</Text>
              <Text transform="capitalize">{name}</Text>
            </Row>
          </Card.Footer>
        </Card>
      </Grid>
    </>
  );
};
