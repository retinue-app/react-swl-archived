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
    type: 'Trooper',
    miniatures: 1,
    defense: 'Red',
    points: 200,
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
    type: 'Trooper',
    points: 160,
    miniatures: 1,
    defense: 'Red',
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

export const R2D2 = (args: UnitCardProps) => <UnitCard {...args} />;

R2D2.args = (() => {
  const args: UnitCardProps = {
    name: 'R2-D2',
    faction: 'Galactic Republic',
    logo: 'logos/republic.svg',
    theme: '#b49e77',
    unique: true,
    subTitle: 'Independent Astromech',
    rank: 'Operative',
    type: 'Droid Trooper',
    points: 35,
    miniatures: 1,
    wounds: 4,
    courage: 2,
    defense: 'White',
    surgeAttack: 'Hit',
    surgeDefense: true,
    speed: 1,
    image: 'r2-preview.png',
    upgrades: ['Comms'],
    keywords: [
      {
        type: 'action',
        name: 'Repair 2: Capacity 2',
      },
      {
        type: 'free',
        name: 'Secret Mission',
        hint:
          'Once per game, if you are within an enemy deployment zone, place ' +
          '1 victory token on you. At the end of the game, if you have a ' +
          'victory token, gain that token.',
      },
      {
        name: 'Grounded',
        hint: 'You cannot climb or clamber.',
      },
      {
        name: 'Inconspicuous',
        hint:
          'When an enemy unit performs an attack, if you have at least 1 ' +
          'suppression token, it must attack another unit, if able. During ' +
          'your Rally step, you may choose not to remove your suppression ' +
          'tokens.',
      },
    ],
    weapons: [
      {
        name: 'Electro-Shock',
        range: [0, 1],
        dice: { white: 3 },
        keywords: ['Suppressive'],
      },
    ],
  };
  return args;
})();

export const AATTradeFederationBattleTank = (args: UnitCardProps) => (
  <UnitCard {...args} />
);

AATTradeFederationBattleTank.args = (() => {
  const args: UnitCardProps = {
    name: 'AAT Trade Federation Battle Tank',
    faction: 'Separatist Alliance',
    logo: 'logos/republic.svg',
    theme: '#354895',
    unique: false,
    subTitle: '',
    rank: 'Heavy',
    type: 'Repulsor Vehicle',
    points: 170,
    miniatures: 1,
    wounds: 9,
    resilience: 6,
    defense: 'Red',
    surgeAttack: 'None',
    surgeDefense: false,
    speed: 1,
    image: 'aat-preview.png',
    upgrades: ['Pilot', 'Ordinance', 'Ordinance', 'Comms'],
    keywords: [
      {
        name: 'AI: Attack',
        hint:
          'Unless you have a faceup order token, your first action must ' +
          'be an attack, if able.',
      },
      {
        name: 'Armor',
        hint: 'While defending, cancel all {HIT} results.',
      },
      {
        name: 'Arsenal 2',
      },
      {
        name: 'Barrage',
        hint:
          'If you do not use *ARSENAL* during your activation, you can ' +
          'perform up to 2 attack actions.',
      },
      {
        name: 'Hover: Ground',
        hint:
          'You can reverse, strafe, and standby. You are treated as a ' +
          'ground vehicle by other units.',
      },
      {
        name: 'Weak Point 2: Rear',
      },
    ],
    weapons: [
      {
        name: 'Lateral Anti-Personnel Lasers',
        range: [1, 2],
        dice: { black: 3 },
        keywords: ['Fixed: Front'],
      },
      {
        name: 'MX-8 Artillery Laser Cannon',
        range: [2, 4],
        dice: { red: 4 },
        keywords: ['Critical 2', 'High Velocity', 'Impact 1'],
      },
    ],
  };
  return args;
})();
