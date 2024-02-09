
import './App.css'

// src/App.tsx
import React, { useState } from 'react';
import { Form } from './components/Form';
import { Result } from './components/Result';
import { SerieCalculator } from './components/SerieCalculator';

const App: React.FC = () => {
  const [resultado, setResultado] = useState<number | null>(null);
  const [sern, setSern] = useState<number | null>(null);

    const calcularSerie = (n: number) => {
        setResultado(SerieCalculator.serie(n));
        setSern(n);
    };

    return (
        <div>
            <h1>Calculadora de Serie</h1>
            <Form onSubmit={calcularSerie} />
            <Result valor={resultado} n={sern} />
        </div>
    );
};

export default App;

