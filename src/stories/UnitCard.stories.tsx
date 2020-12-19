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
    keywords: [
      {
        name: 'Deflect',
        hint:
          'While defending, if you spend a dodge token, you gain ' +
          '"{DEFENSIVE_SURGE}: {BLOCK}"; if it\'s a ranged ' +
          'attack, the attacker suffers 1 wound for each ' +
          '{DEFENSIVE_SURGE} rolled.',
      },
      {
        name: 'Immune: Pierce',
        hint: 'Pierce cannot be used against you.',
      },
      {
        name: 'Master of the Force 1',
        hint:
          'During the End Phase, you may ready 1 of your {UPGRADE_FORCE} ' +
          'upgrade cards.',
      },
      {
        name: 'Relentless',
        hint:
          'After you perform a move action, you may perform a free ' +
          'attack action.',
      },
    ],
    weapons: [
      {
        name: "Vader's Lightsaber",
        range: [0],
        dice: { red: 6 },
        keywords: ['Impact 3', 'Pierce 3'],
      },
    ],
  };
  return args;
})();
