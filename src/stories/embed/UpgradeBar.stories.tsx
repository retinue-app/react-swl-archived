import { Meta } from '@storybook/react/types-6-0';
import { UpgradeBar, UpgradeBarProps } from './UpgradeBar';

export default {
  title: 'Embedded/Upgrade Bar',
  component: UpgradeBar,
} as Meta;

export const Example = (args: UpgradeBarProps) => <UpgradeBar {...args} />;

Example.args = {
  heavyWeapon: 1,
  personnel: 1,
  gear: 1,
  grenades: 1,
};
