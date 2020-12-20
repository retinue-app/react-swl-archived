import React from 'react';
import './PointDisplay.scss';

export interface PointDisplayProps {
  points: number;
}

export const PointDisplay: React.FC<PointDisplayProps> = (props) => {
  return <section className="point-display">{props.points}</section>;
};
