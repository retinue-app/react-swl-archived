import { UnitRank } from '@retinue/databank';
import React from 'react';
import './RankIcon.scss';

export interface RankIconProps {
  rank: UnitRank;
}

export const RankIcon: React.FC<RankIconProps> = (props) => {
  return <span className="unit-rank-icon" role="img" aria-label={props.rank} />;
};
