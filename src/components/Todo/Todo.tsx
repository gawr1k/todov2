import { useGetPokemonByNameQuery } from "../../store/services/todos";

const Todo = () => {
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");
  console.log(data);
  return <p>xsas</p>;
};

export { Todo };
