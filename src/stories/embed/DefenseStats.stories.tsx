import { Meta } from '@storybook/react/types-6-0';
import { DefenseStats, DefenseStatsProps } from './DefenseStats';

export default {
  title: 'Embedded/Defense Stats',
  component: DefenseStats,
} as Meta;

export const WhiteDefenseTrooper = (args: DefenseStatsProps) => (
  <DefenseStats {...args} />
);
WhiteDefenseTrooper.args = {
  dice: 'White',
  wounds: 1,
  mitigation: 1,
  vehicle: false,
};

export const RedDefenseCommander = (args: DefenseStatsProps) => (
  <DefenseStats {...args} />
);
RedDefenseCommander.args = {
  dice: 'Red',
  wounds: 5,
  mitigation: 2,
  vehicle: false,
};

export const WhiteDefenseSpeeder = (args: DefenseStatsProps) => (
  <DefenseStats {...args} />
);
WhiteDefenseSpeeder.args = {
  dice: 'White',
  wounds: 3,
  vehicle: true,
};

export const RedDefenseTank = (args: DefenseStatsProps) => (
  <DefenseStats {...args} />
);
RedDefenseTank.args = {
  dice: 'Red',
  wounds: 9,
  mitigation: 6,
  vehicle: true,
};
