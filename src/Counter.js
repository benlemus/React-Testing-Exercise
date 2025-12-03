const Counter = ({ counter, heads, tails }) => {
  return (
    <>
      <p>
        Out of {counter} flips, there have been {heads} heads and {tails} tails.
      </p>
    </>
  );
};

export default Counter;
