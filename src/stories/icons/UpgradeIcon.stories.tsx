import { Meta } from '@storybook/react/types-6-0';
import { UpgradeIcon, UpgradeIconProps } from './UpgradeIcon';

export default {
  title: 'Icons/Upgrade',
  component: UpgradeIcon,
} as Meta;

export const HeavyWeapon = (args: UpgradeIconProps) => (
  <UpgradeIcon {...args} />
);

HeavyWeapon.args = {
  type: 'Heavy Weapon',
};

export const Personnel = (args: UpgradeIconProps) => <UpgradeIcon {...args} />;

Personnel.args = {
  type: 'Personnel',
};

export const Force = (args: UpgradeIconProps) => <UpgradeIcon {...args} />;

Force.args = {
  type: 'Force',
};

export const Command = (args: UpgradeIconProps) => <UpgradeIcon {...args} />;

Command.args = {
  type: 'Command',
};

export const Pilot = (args: UpgradeIconProps) => <UpgradeIcon {...args} />;

Pilot.args = {
  type: 'Pilot',
};

export const Crew = (args: UpgradeIconProps) => <UpgradeIcon {...args} />;

Crew.args = {
  type: 'Crew',
};

export const Training = (args: UpgradeIconProps) => <UpgradeIcon {...args} />;

Training.args = {
  type: 'Training',
};

export const Hardpoint = (args: UpgradeIconProps) => <UpgradeIcon {...args} />;

Hardpoint.args = {
  type: 'Hardpoint',
};

export const Ordinance = (args: UpgradeIconProps) => <UpgradeIcon {...args} />;

Ordinance.args = {
  type: 'Ordinance',
};

export const Comms = (args: UpgradeIconProps) => <UpgradeIcon {...args} />;

Comms.args = {
  type: 'Comms',
};

export const Generator = (args: UpgradeIconProps) => <UpgradeIcon {...args} />;

Generator.args = {
  type: 'Generator',
};

export const Gear = (args: UpgradeIconProps) => <UpgradeIcon {...args} />;

Gear.args = {
  type: 'Gear',
};

export const Armament = (args: UpgradeIconProps) => <UpgradeIcon {...args} />;

Armament.args = {
  type: 'Armament',
};

export const Grenades = (args: UpgradeIconProps) => <UpgradeIcon {...args} />;

Grenades.args = {
  type: 'Grenades',
};
