import { Meta } from '@storybook/react/types-6-0';
import { PipDisplay, PipDisplayProps } from './PipDisplay';

export default {
  title: 'Embedded/Pip Display',
  component: PipDisplay,
  argTypes: {
    pips: {
      control: {
        type: 'range',
        min: 0,
        max: 4,
      },
    },
  },
} as Meta;

export const Pip0 = (args: PipDisplayProps) => <PipDisplay {...args} />;
Pip0.storyName = '0 Pip';
Pip0.args = { pips: 0 };

export const Pip1 = (args: PipDisplayProps) => <PipDisplay {...args} />;
Pip1.storyName = '1 Pip';
Pip1.args = { pips: 1 };

export const Pip2 = (args: PipDisplayProps) => <PipDisplay {...args} />;
Pip2.storyName = '2 Pip';
Pip2.args = { pips: 2 };

export const Pip3 = (args: PipDisplayProps) => <PipDisplay {...args} />;
Pip3.storyName = '3 Pip';
Pip3.args = { pips: 3 };

export const Pip4 = (args: PipDisplayProps) => <PipDisplay {...args} />;
Pip4.storyName = '4 Pip';
Pip4.args = { pips: 4 };
