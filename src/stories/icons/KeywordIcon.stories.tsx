import { Meta } from '@storybook/react/types-6-0';
import { KeywordIcon, KeywordIconProps } from './KeywordIcon';

export default {
  title: 'Icons/Keyword',
  component: KeywordIcon,
} as Meta;

export const Action = (args: KeywordIconProps) => <KeywordIcon {...args} />;
Action.args = {
  icon: 'Action',
};

export const FreeAction = (args: KeywordIconProps) => <KeywordIcon {...args} />;
FreeAction.args = {
  icon: 'Free Action',
};

export const Exhaust = (args: KeywordIconProps) => <KeywordIcon {...args} />;
Exhaust.args = {
  icon: 'Exhaust',
};

export const Health = (args: KeywordIconProps) => <KeywordIcon {...args} />;
Health.args = {
  icon: 'Health',
};

export const Courage = (args: KeywordIconProps) => <KeywordIcon {...args} />;
Courage.args = {
  icon: 'Courage',
};

export const Resilience = (args: KeywordIconProps) => <KeywordIcon {...args} />;
Resilience.args = {
  icon: 'Resilience',
};
