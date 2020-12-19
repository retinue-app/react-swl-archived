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
    wounds: 8,
    courage: '-',
    surgeAttack: 'None',
    surgeDefense: false,
    speed: 1,
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

export const LukeSkywalker = (args: UnitCardProps) => <UnitCard {...args} />;

LukeSkywalker.args = (() => {
  const args: UnitCardProps = {
    name: 'Luke Skywalker',
    faction: 'Rebel Alliance',
    logo: 'logos/rebels.svg',
    theme: '#863c35',
    unique: true,
    subTitle: 'Hero of the Rebellion',
    rank: 'Commander',
    miniatures: 1,
    wounds: 6,
    courage: 3,
    surgeAttack: 'Crit',
    surgeDefense: false,
    speed: 2,
    image: 'luke-preview.png',
    upgrades: ['Force', 'Force', 'Gear'],
    keywords: [
      {
        type: 'action',
        name: 'Jump 1',
        hint:
          'Perform a move during which you ignore terrain that is height ' +
          '1 or lower. This is treated as a move action.',
      },
      {
        name: 'Charge',
        hint:
          'After you perform a move action, you may perform a free melee ' +
          'attack action.',
      },
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
    ],
    weapons: [
      {
        name: "Anakin's Lightsaber",
        range: [0],
        dice: { black: 6 },
        keywords: ['Impact 2', 'Pierce 2'],
      },

      {
        name: "Luke's DL-44 Blaster Pistol",
        range: [1, 2],
        dice: { red: 2 },
        keywords: ['Pierce 2'],
      },
    ],
  };
  return args;
})();
