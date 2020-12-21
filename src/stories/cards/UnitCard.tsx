import React from 'react';
import './UnitCard.scss';

export interface UnitCardProps {
  name: string;
}

export const UnitCard: React.FC<UnitCardProps> = (props) => {
  return <div className="unit-card"></div>;
};
