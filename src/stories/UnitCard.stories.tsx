import { Meta } from '@storybook/react/types-6-0';
import { UnitCard, UnitCardProps } from './UnitCard';

export default {
  title: 'Unit Card',
  component: UnitCard,
  argTypes: {
    unique: {
      control: 'boolean',
    },
    theme: {
      control: 'color',
    },
    upgrades: {
      control: 'array',
    },
  },
} as Meta;

export const DarthVader = (args: UnitCardProps) => <UnitCard {...args} />;

DarthVader.args = (() => {
  const args: UnitCardProps = {
    name: 'Darth Vader',
    faction: 'Galactic Empire',
    logo: 'logos/empire.svg',
    theme: '#6681a3',
    unique: true,
    subTitle: 'Dark Lord of the Sith',
    rank: 'Commander',
    miniatures: 1,
    image: 'vader-preview.png',
    upgrades: ['Force', 'Force', 'Force'],
  };
  return args;
})();
