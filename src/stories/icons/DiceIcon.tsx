import React from 'react';
import './DiceIcon.scss';

export interface DiceIconProps {
  icon:
    | 'White Defense Dice'
    | 'Red Defense Dice'
    | 'Attack Surge'
    | 'Defense Surge'
    | 'Hit'
    | 'Crit'
    | 'Block';
}

export const DiceIcon: React.FC<DiceIconProps> = (props) => {
  return <span className="dice-icon" role="img" aria-label={props.icon} />;
};
