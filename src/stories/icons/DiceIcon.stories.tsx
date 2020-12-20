import { Meta } from '@storybook/react/types-6-0';
import { DiceIcon, DiceIconProps } from './DiceIcon';

export default {
  title: 'Icons/Dice',
  component: DiceIcon,
} as Meta;

export const WhiteDefenseDice = (args: DiceIconProps) => <DiceIcon {...args} />;
WhiteDefenseDice.args = {
  icon: 'White Defense Dice',
};

export const RedDefenseDice = (args: DiceIconProps) => <DiceIcon {...args} />;
RedDefenseDice.args = {
  icon: 'Red Defense Dice',
};

export const AttackSurge = (args: DiceIconProps) => <DiceIcon {...args} />;
AttackSurge.args = {
  icon: 'Attack Surge',
};

export const DefenseSurge = (args: DiceIconProps) => <DiceIcon {...args} />;
DefenseSurge.args = {
  icon: 'Defense Surge',
};

export const Hit = (args: DiceIconProps) => <DiceIcon {...args} />;
Hit.args = {
  icon: 'Hit',
};

export const Crit = (args: DiceIconProps) => <DiceIcon {...args} />;
Crit.args = {
  icon: 'Crit',
};

export const Block = (args: DiceIconProps) => <DiceIcon {...args} />;
Block.args = {
  icon: 'Block',
};
