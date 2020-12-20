import { Meta } from '@storybook/react/types-6-0';
import { AttackDiceIcon, AttackDiceIconProps } from './AttackDiceIcon';

export default {
  title: 'Icons/Attack Dice',
  component: AttackDiceIcon,
} as Meta;

export const Red = (args: AttackDiceIconProps) => <AttackDiceIcon {...args} />;
Red.args = { color: 'Red' };

export const Black = (args: AttackDiceIconProps) => (
  <AttackDiceIcon {...args} />
);
Black.args = { color: 'Black' };

export const White = (args: AttackDiceIconProps) => (
  <AttackDiceIcon {...args} />
);
White.args = { color: 'White' };
