import { UpgradeType } from '@retinue/databank';
import React from 'react';
import { UpgradeIcon } from '../icons/UpgradeIcon';
import './UpgradeBar.scss';

function insertNTimes<T>(array: T[], element: T, times: number) {
  for (let i = 0; i < times; i++) {
    array.push(element);
  }
}

export type UpgradeBarProps = {
  armament?: number;
  command?: number;
  comms?: number;
  crew?: number;
  force?: number;
  gear?: number;
  generator?: number;
  grenades?: number;
  hardpoint?: number;
  heavyWeapon?: number;
  ordnance?: number;
  personnel?: number;
  pilot?: number;
  training?: number;
};

export const UpgradeBar: React.FC<UpgradeBarProps> = (props) => {
  const output: UpgradeType[] = [];
  if (props.heavyWeapon) {
    insertNTimes(output, 'Heavy Weapon', props.heavyWeapon);
  }
  if (props.personnel) {
    insertNTimes(output, 'Personnel', props.personnel);
  }
  if (props.force) {
    insertNTimes(output, 'Force', props.force);
  }
  if (props.command) {
    insertNTimes(output, 'Command', props.command);
  }
  if (props.pilot) {
    insertNTimes(output, 'Pilot', props.pilot);
  }
  if (props.training) {
    insertNTimes(output, 'Training', props.training);
  }
  if (props.hardpoint) {
    insertNTimes(output, 'Hardpoint', props.hardpoint);
  }
  if (props.ordnance) {
    insertNTimes(output, 'Ordnance', props.ordnance);
  }
  if (props.comms) {
    insertNTimes(output, 'Comms', props.comms);
  }
  if (props.generator) {
    insertNTimes(output, 'Generator', props.generator);
  }
  if (props.gear) {
    insertNTimes(output, 'Gear', props.gear);
  }
  if (props.armament) {
    insertNTimes(output, 'Armament', props.armament);
  }
  if (props.grenades) {
    insertNTimes(output, 'Grenades', props.grenades);
  }
  return (
    <ul className="upgrade-bar">
      {output.map((icon, index) => {
        return (
          <li key={index}>
            <UpgradeIcon type={icon} />
          </li>
        );
      })}
    </ul>
  );
};
