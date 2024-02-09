// Form.tsx
import React, { useState } from 'react';

interface Props {
    onSubmit: (n: number) => void;
}

export const Form: React.FC<Props> = ({ onSubmit }) => {
    const [valor, setValor] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(Number(valor));
        setValor(''); // Limpiar el valor después de enviar el formulario
    };

    return (
        <form onSubmit={handleSubmit} style={formStyle}>
            <input
                type="number"
                value={valor}
                onChange={e => setValor(e.target.value)}
                style={inputStyle}
                placeholder="Ingrese un número"
            />
            <button type="submit" style={buttonStyle}>Calcular</button>
        </form>
    );
};

// Estilos
const formStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
};

const inputStyle: React.CSSProperties = {
    width: '200px',
    padding: '8px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    outline: 'none',
};

const buttonStyle: React.CSSProperties = {
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
};
