import { Meta } from '@storybook/react/types-6-0';
import { UnitCard, UnitCardProps } from './UnitCard';

export default {
  title: 'Cards/Unit',
  component: UnitCard,
  argTypes: {
    name: {
      table: {
        category: 'Identifiers',
      },
    },
    title: {
      table: {
        category: 'Identifiers',
      },
    },
    unique: {
      defaultValue: false,
      table: {
        category: 'Identifiers',
      },
    },
    faction: {
      table: {
        category: 'List Building',
      },
      control: {
        type: 'select',
      },
    },
    points: {
      table: {
        category: 'List Building',
      },
    },
    rank: {
      table: {
        category: 'List Building',
      },
    },
    miniatures: {
      table: {
        category: 'Stats',
      },
    },
    image: {
      table: {
        category: 'Stats',
      },
    },
    type: {
      table: {
        category: 'Stats',
      },
    },
    defenseDice: {
      table: {
        category: 'Stats',
      },
    },
    wounds: {
      table: {
        category: 'Stats',
      },
    },
    courageOrResilience: {
      table: {
        category: 'Stats',
      },
    },
    surgeAttack: {
      table: {
        category: 'Stats',
      },
    },
    surgeBlock: {
      table: {
        category: 'Stats',
      },
    },
    speed: {
      table: {
        category: 'Stats',
      },
    },
    upgrades: {
      table: {
        category: 'Attached',
      },
    },
    keywords: {
      table: {
        category: 'Attached',
      },
    },
    weapons: {
      table: {
        category: 'Attached',
      },
    },
  },
} as Meta;

export const DarthVader = (args: UnitCardProps) => <UnitCard {...args} />;
DarthVader.args = (() => {
  const args: UnitCardProps = {
    name: 'Darth Vader',
    title: 'Dark Lord of the Sith',
    unique: true,
    faction: 'Galactic Empire',
    points: 200,
    rank: 'Commander',
    miniatures: 1,
    type: 'Trooper',
    defenseDice: 'Red',
    wounds: 8,
    image: 'vader-preview.png',
    speed: 1,
    upgrades: {
      force: 3,
    },
    keywords: [
      {
        name: 'Deflect',
        reminder:
          `While defending, if you spend a dodge token, you gain ` +
          `"{D_SURGE}: {BLOCK}"; if it's a ranged attack, the attacker ` +
          `suffers 1 wound for each {D_SURGE} rolled.`,
      },
      {
        name: 'Immune: Pierce',
        reminder: 'Pierce cannot be used against you.',
      },
      {
        name: 'Master of the Force 1',
        reminder:
          'During the End Phase, you may ready 1 of your {FORCE} upgrade cards.',
      },
      {
        name: 'Relentless',
        reminder:
          'After you perform a move action, you may perform a free attack action.',
      },
    ],
    weapons: [
      {
        name: "Vader's Lightsaber",
        melee: true,
        red: 6,
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
    title: 'Hero of the Rebellion',
    unique: true,
    faction: 'Rebel Alliance',
    points: 160,
    rank: 'Commander',
    miniatures: 1,
    type: 'Trooper',
    defenseDice: 'Red',
    wounds: 6,
    surgeAttack: 'Crit',
    image: 'luke-preview.png',
    speed: 2,
    courageOrResilience: 3,
    upgrades: {
      force: 2,
      gear: 1,
    },
    keywords: [
      {
        icon: 'Action',
        name: 'Jump 1',
        reminder:
          'Perform a move during which you ignore terrain that is height 1 ' +
          'or lower. This is treated as a move action.',
      },
      {
        name: 'Charge',
        reminder:
          'After you perform a move action, you may perform a free melee ' +
          'attack action.',
      },
      {
        name: 'Deflect',
        reminder:
          `While defending, if you spend a dodge token, you gain ` +
          `"{D_SURGE}: {BLOCK}"; if it's a ranged attack, the attacker ` +
          `suffers 1 wound for each {D_SURGE} rolled.`,
      },
      {
        name: 'Immune: Pierce',
        reminder: 'Pierce cannot be used against you.',
      },
    ],
    weapons: [
      {
        name: "Anakin's Lightsaber",
        melee: true,
        black: 6,
        keywords: ['Impact 2', 'Pierce 2'],
      },
      {
        name: "Luke's DL-44 Blaster Pistol",
        minRange: 1,
        maxRange: 2,
        red: 2,
        keywords: ['Pierce 2'],
      },
    ],
  };
  return args;
})();

export const R2D2 = (args: UnitCardProps) => <UnitCard {...args} />;
R2D2.storyName = 'R2-D2';
R2D2.args = (() => {
  const args: UnitCardProps = {
    name: 'R2-D2',
    title: 'Independent Astromech',
    unique: true,
    faction: 'Galactic Republic',
    points: 35,
    rank: 'Operative',
    miniatures: 1,
    type: 'Droid Trooper',
    defenseDice: 'White',
    wounds: 4,
    surgeAttack: 'Hit',
    surgeBlock: true,
    image: 'r2-preview.png',
    speed: 1,
    courageOrResilience: 2,
    upgrades: {
      comms: 1,
    },
    keywords: [
      {
        icon: 'Action',
        name: 'Repair 2: Capacity 2',
      },
      {
        icon: 'Free Action',
        name: 'Secret Mission',
        reminder:
          'Once per game, if you are within an enemy deployment zone, place ' +
          '1 victory token on you. At the end of the game, if you have a ' +
          'victory token, gain that token.',
      },
      {
        name: 'Grounded',
        reminder: 'You cannot climb or clamber.',
      },
      {
        name: 'Inconspicuous',
        reminder:
          'When an enemy unit performs an attack, if you have at ' +
          'least 1 suppression token, it must attack another unit, if able.',
      },
    ],
    weapons: [
      {
        name: 'Electro-Shock',
        melee: true,
        minRange: 1,
        white: 3,
        keywords: ['Suppressive'],
      },
    ],
  };
  return args;
})();

export const AAT = (args: UnitCardProps) => <UnitCard {...args} />;
AAT.args = (() => {
  const args: UnitCardProps = {
    name: 'AAT Trade Federation Battle Tank',
    faction: 'Separatist Alliance',
    points: 170,
    rank: 'Heavy',
    miniatures: 1,
    type: 'Repulsor Vehicle',
    defenseDice: 'Red',
    wounds: 9,
    courageOrResilience: 6,
    image: 'aat-preview.png',
    speed: 1,
    upgrades: {
      pilot: 1,
      ordnance: 2,
      comms: 1,
    },
    keywords: [
      {
        name: 'AI: Attack',
        reminder:
          'Unless you have a faceup order token, your first action must be ' +
          'an attack, if able.',
      },
      {
        name: 'Armor',
        reminder: 'While defending, cancel all {HIT} results.',
      },
      {
        name: 'Arsenal 2',
      },
      {
        name: 'Barrage',
        reminder:
          'If you do not use *Arsenal* during your activation, you ' +
          'can you perform up to 2 attack actions.',
      },
      {
        name: 'Hover: Ground',
        reminder:
          'You can reverse, strafe, and standby. You are treated ' +
          'as a ground vehicle by other units.',
      },
      {
        name: 'Weak Point 2: Rear',
      },
    ],
    weapons: [
      {
        name: 'Lateral Anti-Personnel Lasers',
        minRange: 1,
        maxRange: 2,
        black: 3,
        keywords: ['Fixed: Front'],
      },
      {
        name: 'MX-8 Artillery Laser Cannon',
        minRange: 2,
        maxRange: 4,
        red: 4,
        keywords: ['Critical 2', 'High Velocity', 'Impact 1'],
      },
    ],
  };
  return args;
})();
