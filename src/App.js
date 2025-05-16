import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p data-testid="counter">Count: {count}</p>
    </div>
  );
}

export default App;