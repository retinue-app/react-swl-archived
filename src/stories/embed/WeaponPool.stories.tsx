import { Meta } from '@storybook/react/types-6-0';
import { WeaponPool, WeaponPoolProps } from './WeaponPool';

export default {
  title: 'Embedded/Weapon Pool',
  component: WeaponPool,
} as Meta;

export const E11BlasterRifle = (args: WeaponPoolProps) => (
  <WeaponPool {...args} />
);

E11BlasterRifle.storyName = 'E-11 Blaster Rifle';
E11BlasterRifle.args = {
  melee: false,
  minRange: 1,
  maxRange: 3,
  red: 0,
  black: 0,
  white: 1,
};

export const VadersLightsaber = (args: WeaponPoolProps) => (
  <WeaponPool {...args} />
);

VadersLightsaber.storyName = "Vader's Lightsaber";
VadersLightsaber.args = {
  melee: true,
  red: 6,
  black: 0,
  white: 0,
};

export const ForceLightning = (args: WeaponPoolProps) => (
  <WeaponPool {...args} />
);

ForceLightning.storyName = 'Force Lightning';
ForceLightning.args = {
  melee: true,
  minRange: 1,
  maxRange: 2,
  red: 2,
  black: 2,
  white: 2,
};

export const IdensDlt20ARifle = (args: WeaponPoolProps) => (
  <WeaponPool {...args} />
);

IdensDlt20ARifle.storyName = "Iden's DLT-20 Rifle";
IdensDlt20ARifle.args = {
  melee: false,
  minRange: 1,
  maxRange: 'Infinite',
  black: 2,
};

export const Cr24FlameRifle = (args: WeaponPoolProps) => (
  <WeaponPool {...args} />
);

Cr24FlameRifle.storyName = 'CR-24 Flame Rifle';
Cr24FlameRifle.args = {
  melee: false,
  minRange: 1,
  black: 1,
  white: 1,
};
