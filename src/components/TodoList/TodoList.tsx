const TodoList = ({ todos }: any) => {
  return (
    <ul>
      {todos.map(() => {
        return <li></li>;
      })}
    </ul>
  );
};

export { TodoList };
