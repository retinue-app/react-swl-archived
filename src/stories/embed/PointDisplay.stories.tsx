import { Meta } from '@storybook/react/types-6-0';
import { PointDisplay, PointDisplayProps } from './PointDisplay';

export default {
  title: 'Embedded/Point Display',
  component: PointDisplay,
} as Meta;

export const Example = (args: PointDisplayProps) => <PointDisplay {...args} />;
Example.args = { points: 200 };
