import { Range } from '@retinue/databank';
import React from 'react';
import './WeaponPool.scss';

export interface WeaponPoolProps {
  range: Range[];
  red?: number;
  black?: number;
  white?: number;
}

export const WeaponPool: React.FC<WeaponPoolProps> = (props) => {
  return <figure className="weapon-pool"></figure>;
};
