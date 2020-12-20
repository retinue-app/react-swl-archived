import { Meta } from '@storybook/react/types-6-0';
import { SpeedDisplay, SpeedDisplayProps } from './SpeedDisplay';

export default {
  title: 'Embedded/Speed Display',
  component: SpeedDisplay,
  argTypes: {
    speed: {
      control: {
        type: 'range',
        min: 0,
        max: 3,
        step: 1,
      },
    },
  },
} as Meta;

export const Stationary = (args: SpeedDisplayProps) => (
  <SpeedDisplay {...args} />
);
Stationary.args = { speed: 0 };

export const Speed1 = (args: SpeedDisplayProps) => <SpeedDisplay {...args} />;
Speed1.args = { speed: 1 };

export const Speed2 = (args: SpeedDisplayProps) => <SpeedDisplay {...args} />;
Speed2.args = { speed: 2 };

export const Speed3 = (args: SpeedDisplayProps) => <SpeedDisplay {...args} />;
Speed3.args = { speed: 13 };
