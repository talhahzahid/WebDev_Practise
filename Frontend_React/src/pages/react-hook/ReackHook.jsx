import React from "react";

// Child component
const Child = React.memo(({ onClick }) => {
  console.log("Child render hua");
  return <button onClick={onClick}>Child Button</button>;
});

const ReackHook = () => {
  const [count, setCount] = React.useState(0);

  const handleClick = React.useCallback(() => {
    console.log("Button clicked");
  }, []); // function ko yaad rakho

  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      <Child onClick={handleClick} />
    </>
  );
};

export default ReackHook;
