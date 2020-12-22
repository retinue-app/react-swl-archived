import React, { ReactNode } from 'react';
import './PipDisplay.scss';

export interface PipDisplayProps {
  pips: 0 | 1 | 2 | 3 | 4;
}

export const PipDisplay: React.FC<PipDisplayProps> = (props) => {
  const output: ReactNode[] = [];
  for (let i = 0; i < props.pips; i++) {
    output.push(<li key={i} />);
  }
  return <ul className="pip-display">{output}</ul>;
};
