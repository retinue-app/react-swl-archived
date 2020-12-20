import React from 'react';
import './AttackDiceIcon.scss';

export interface AttackDiceIconProps {
  color: 'White' | 'Black' | 'Red';
}

export const AttackDiceIcon: React.FC<AttackDiceIconProps> = (props) => {
  return (
    <span
      className="attack-dice-icon"
      role="img"
      aria-label={`${props.color} Attack Dice`}
      data-color={props.color}
    />
  );
};
