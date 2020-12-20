import React from 'react';
import './RangeIcon.scss';

export interface RangeIconProps {
  range: 'Melee' | 1 | 2 | 3 | 4 | 5 | 'Infinite';
}

export const RangeIcon: React.FC<RangeIconProps> = (props) => {
  return (
    <span
      className="range-icon"
      role="img"
      aria-label={`Range ${props.range}`}
      data-range={props.range}
    />
  );
};
