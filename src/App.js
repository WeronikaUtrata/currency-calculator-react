import Container from './Container';
import Form from './Form';
import { currencies } from './currencies';
import { useState } from 'react';

function App() {

  const [result, setResult] = useState();

  const calculateResult = (amount, currency) => {
    const rate = currencies.find(({ short }) => short === currency).rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  };

  return (
    <Container>
      <Form 
      calculateResult={calculateResult}
      result={result}
      />
    </Container>
  );
}

export default App;
