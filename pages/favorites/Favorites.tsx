import { Layout } from "../../components/layouts";
import { useEffect, useState } from "react";
import { localFavorites } from "../../utils";
import { NoFavorites } from "../../components/ui";
import { YesFavorites } from "../../components/ui";

const Favorites = () => {
  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Favorites">
      {favoritesPokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <YesFavorites favoritesPokemons={favoritesPokemons} />
      )}
    </Layout>
  );
};
export default Favorites;
