import React from 'react';
import './Characters.css';

export default function Characters({ name, birth_year }) {
  return (
    <div className="card">
      <p>{name}</p>
      <p>born on {birth_year}</p>
    </div>
  );
}
