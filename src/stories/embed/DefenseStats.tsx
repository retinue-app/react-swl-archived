import React from 'react';
import { DiceIcon } from '../icons/DiceIcon';
import './DefenseStats.scss';

export interface DefenseStatsProps {
  dice: 'White' | 'Red';
  wounds: number;
  mitigation?: number;
  vehicle: boolean;
}

export const DefenseStats: React.FC<DefenseStatsProps> = (props) => {
  return (
    <section className="defense-stats">
      <aside className={`dice ${props.dice === 'Red' ? 'red' : ''}`}>
        <DiceIcon icon="Red Defense Dice" />
      </aside>
      <div className="wounds-and-mitigation">
        <div className="wounds">
          <span className="icon" role="img" aria-label="Wounds"></span>
          <span className="data">{props.wounds}</span>
        </div>
        <div
          className={`mitigation ${props.vehicle ? 'resilience' : 'courage'}`}
        >
          <span
            className="icon"
            role="img"
            aria-label={props.vehicle ? 'Resilience' : 'Courage'}
          ></span>
          <span className="data">{props.mitigation || '-'}</span>
        </div>
      </div>
    </section>
  );
};
