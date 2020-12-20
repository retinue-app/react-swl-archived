import React from 'react';
import { AttackDiceIcon } from '../icons/AttackDiceIcon';
import { RangeIcon } from '../icons/RangeIcon';
import './WeaponPool.scss';

export interface WeaponPoolProps {
  melee?: boolean;
  minRange?: 1 | 2 | 3 | 4 | 5 | 'Infinite';
  maxRange?: 1 | 2 | 3 | 4 | 5 | 'Infinite';
  red?: number;
  black?: number;
  white?: number;
}

export const WeaponPool: React.FC<WeaponPoolProps> = (props) => {
  const dice: ('White' | 'Black' | 'Red')[] = [
    ...Array(props.red || 0).fill('Red'),
    ...Array(props.black || 0).fill('Black'),
    ...Array(props.white || 0).fill('White'),
  ];
  return (
    <figure className="weapon-pool">
      <section className="range">
        {props.melee && <RangeIcon range="Melee" />}
        {props.melee && props.minRange && (
          <span className="ranged melee" role="separator" />
        )}
        {props.minRange && <RangeIcon range={props.minRange} />}
        {props.maxRange && (
          <>
            <span className="ranged" role="separator" />
            <RangeIcon range={props.maxRange} />
          </>
        )}
      </section>
      <ul className="dice">
        {dice.map((color, index) => {
          return (
            <li key={index}>
              <AttackDiceIcon color={color} />
            </li>
          );
        })}
      </ul>
    </figure>
  );
};
