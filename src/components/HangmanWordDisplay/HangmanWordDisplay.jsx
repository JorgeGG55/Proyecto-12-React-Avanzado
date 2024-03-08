import React from 'react';

const WordDisplay = ({ word }) => (
  <div>
    <p>
      Word:{' '}
      {word
        .split('')
        .map((char, index) => (char === '_' ? '_ ' : char + ' '))
        .join('')}
    </p>
  </div>
);

export default WordDisplay;
