import { Meta } from '@storybook/react/types-6-0';
import { UnitCard, UnitCardProps } from './UnitCard';

export default {
  title: 'Cards/Unit',
  component: UnitCard,
} as Meta;

export const DarthVader = (args: UnitCardProps) => <UnitCard {...args} />;
DarthVader.args = () => {
  const args: UnitCardProps = {
    name: 'Darth Vader',
  };
  return args;
};
