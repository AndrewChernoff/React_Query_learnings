import axios from "axios";
import { useEffect, useState } from "react";

type HeroesType = { id: number; name: string; alterEgo: string };

const SuperHeroesPage = () => {
  const [heroes, setHeroes] = useState<HeroesType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3001/superheroes")
      .then((res) => setHeroes(res.data))
      .then(() => setLoading(false))
      .catch((e) => setError(true));
  }, []);
  //add some loading
  return (
    <div>
      {loading ? <div>Loading...</div> : null}
      {!loading && heroes
        ? heroes.map((el) => {
            return <div key={el.id}>{el.name}</div>;
          })
        : null}
      {error ? <div>Something went wrong</div> : null}
    </div>
  );
};

export default SuperHeroesPage;
