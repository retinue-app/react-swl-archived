import { Meta } from '@storybook/react/types-6-0';
import { RankIcon, RankIconProps } from './RankIcon';

export default {
  title: 'Icons/Rank',
  component: RankIcon,
} as Meta;

export const Commander = (args: RankIconProps) => <RankIcon {...args} />;

Commander.args = {
  rank: 'Commander',
};

export const Operative = (args: RankIconProps) => <RankIcon {...args} />;

Operative.args = {
  rank: 'Operative',
};

export const Corps = (args: RankIconProps) => <RankIcon {...args} />;

Corps.args = {
  rank: 'Corps',
};

export const SpecialForces = (args: RankIconProps) => <RankIcon {...args} />;

SpecialForces.args = {
  rank: 'Special Forces',
};

export const Support = (args: RankIconProps) => <RankIcon {...args} />;

Support.args = {
  rank: 'Support',
};

export const Heavy = (args: RankIconProps) => <RankIcon {...args} />;

Heavy.args = {
  rank: 'Heavy',
};
