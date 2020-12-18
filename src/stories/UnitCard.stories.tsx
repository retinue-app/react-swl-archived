import { Meta } from '@storybook/react/types-6-0';
import { UnitCard, UnitCardProps } from './UnitCard';

export default {
  title: 'Unit Card',
  component: UnitCard,
} as Meta;

export const Primary = (args: UnitCardProps) => <UnitCard {...args} />;

Primary.args = (() => {
  const args: UnitCardProps = {
    name: 'Darth Vader',
    unique: true,
    subTitle: 'Dark Lord of the Sith',
  };
  return args;
})();
