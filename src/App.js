import { StyledContainer } from './Container/styled';
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
    <StyledContainer>
      <Form 
      calculateResult={calculateResult}
      result={result}
      />
    </StyledContainer>
  );
}

export default App;
