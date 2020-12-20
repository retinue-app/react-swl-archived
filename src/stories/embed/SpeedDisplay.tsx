import React from 'react';
import './SpeedDisplay.scss';

export interface SpeedDisplayProps {
  speed: 0 | 1 | 2 | 3;
}

export const SpeedDisplay: React.FC<SpeedDisplayProps> = (props) => {
  return (
    <figure
      className="speed-display"
      role="progressbar"
      aria-label={`Speed ${props.speed}`}
    >
      <span className={`${props.speed >= 1 ? 'active' : ''}`} />
      <span className={`${props.speed >= 2 ? 'active' : ''}`} />
      <span className={`${props.speed >= 3 ? 'active' : ''}`} />
    </figure>
  );
};
