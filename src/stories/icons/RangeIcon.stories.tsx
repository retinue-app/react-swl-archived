import { Meta } from '@storybook/react/types-6-0';
import { RangeIcon, RangeIconProps } from './RangeIcon';

export default {
  title: 'Icons/Range',
  component: RangeIcon,
} as Meta;

export const Melee = (args: RangeIconProps) => <RangeIcon {...args} />;

Melee.args = {
  range: 'Melee',
};

export const Range1 = (args: RangeIconProps) => <RangeIcon {...args} />;

Range1.args = {
  range: 1,
};

export const Range2 = (args: RangeIconProps) => <RangeIcon {...args} />;

Range2.args = {
  range: 2,
};

export const Range3 = (args: RangeIconProps) => <RangeIcon {...args} />;

Range3.args = {
  range: 3,
};

export const Range4 = (args: RangeIconProps) => <RangeIcon {...args} />;

Range4.args = {
  range: 4,
};

export const Range5 = (args: RangeIconProps) => <RangeIcon {...args} />;

Range5.args = {
  range: 5,
};

export const Infinite = (args: RangeIconProps) => <RangeIcon {...args} />;

Infinite.args = {
  range: 'Infinite',
};
