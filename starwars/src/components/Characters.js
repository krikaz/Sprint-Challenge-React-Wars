import React from 'react';

export default function Characters({ char }) {
  return Object.entries(char).map((key, value) => {
    return (<div>
      <span>{key}</span>
      <span>{value}</span>
    </div>);
  });
}
