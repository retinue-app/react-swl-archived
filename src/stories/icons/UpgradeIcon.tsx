import { UpgradeType } from '@retinue/databank';
import React from 'react';
import './UpgradeIcon.scss';

export interface UpgradeIconProps {
  type: UpgradeType;
}

export const UpgradeIcon: React.FC<UpgradeIconProps> = (props) => {
  return (
    <span className="upgrade-type-icon" role="img" aria-label={props.type} />
  );
};
