import React from 'react';
import { DiceIcon } from '../icons/DiceIcon';
import './SurgeTable.scss';

export interface SurgeTableProps {
  attack?: 'Hit' | 'Crit';
  defense?: 'Block';
}

export const SurgeTable: React.FC<SurgeTableProps> = (props) => {
  return (
    <section className="surge-table">
      <div className={`${!props.attack ? 'hidden' : ''}`}>
        <span>
          <DiceIcon icon="Attack Surge" />
        </span>
        <span>:</span>
        <span>
          <DiceIcon icon={props.attack!} />
        </span>
      </div>
      <div className={`${!props.defense ? 'hidden' : ''}`}>
        <span>
          <DiceIcon icon="Defense Surge" />
        </span>
        <span>:</span>
        <span>
          <DiceIcon icon="Block" />
        </span>
      </div>
    </section>
  );
};
