import { Meta } from '@storybook/react/types-6-0';
import { UpgradeCard, UpgradeCardProps } from './UpgradeCard';

export default {
  title: 'Cards/Upgrade',
  component: UpgradeCard,
} as Meta;

export const TargetingScopes = (args: UpgradeCardProps) => (
  <UpgradeCard {...args} />
);
TargetingScopes.args = (() => {
  const args: UpgradeCardProps = {
    name: 'Targeting Scopes',
    points: 6,
    type: 'Gear',
    image: 'demo/up-targeting-scopes.png',
    text:
      'You gain *Precise 1* _(When you spend an aim token, reroll up to ' +
      '1 additional die.)_',
  };
  return args;
})();

export const AscensionCables = (args: UpgradeCardProps) => (
  <UpgradeCard {...args} />
);
AscensionCables.args = (() => {
  const args: UpgradeCardProps = {
    name: 'Ascension Cables',
    points: 4,
    usage: 'Exhaust',
    type: 'Gear',
    image: 'demo/up-ascension-cables.png',
    text:
      '{FREE} Until the end of your activation, you gain *Scale* _(You ' +
      'ignore the effects of difficult terrain and do not suffer wounds ' +
      'while clambering. Either before or after you perform a move action, ' +
      'you may perform a free clamber action.)_',
  };
  return args;
})();

export const DLT19Stormtrooper = (args: UpgradeCardProps) => (
  <UpgradeCard {...args} />
);
DLT19Stormtrooper.storyName = 'DLT-19 Stormtrooper';
DLT19Stormtrooper.args = (() => {
  const args: UpgradeCardProps = {
    name: 'DLT-19 Stormtrooper',
    points: 24,
    type: 'Heavy Weapon',
    image: 'demo/up-dlt.png',
    weapon: {
      minRange: 1,
      maxRange: 2,
      red: 2,
      black: 0,
      white: 0,
    },
    restriction: 'Stormtroopers Only',
    text:
      'Add 1 DLT-19 stormtrooper mini.\n\n' +
      '*IMPACT 1* _(While attacking a unit that has *ARMOR*, change up to ' +
      '1 {HIT} result to a {CRIT} result.)_',
  };
  return args;
})();

export const SeizeTheInitiative = (args: UpgradeCardProps) => (
  <UpgradeCard {...args} />
);
SeizeTheInitiative.args = (() => {
  const args: UpgradeCardProps = {
    name: 'Seize the Initiative',
    points: 5,
    usage: 'Discard',
    type: 'Training',
    image: 'demo/up-seize.png',
    restriction: '{COMMANDER} or {OPERATIVE} only.',
    text:
      'During the Issue Orders Step or the Command Phase, ' +
      'issue an order to yourself.',
  };
  return args;
})();

export const TristanWren = (args: UpgradeCardProps) => (
  <UpgradeCard {...args} />
);
TristanWren.args = (() => {
  const args: UpgradeCardProps = {
    name: 'Tristan Wren',
    unique: true,
    points: 38,
    wounds: 2,
    type: 'Heavy Weapon',
    image: 'demo/up-tristan.png',
    weapon: {
      black: 2,
      minRange: 1,
      maxRange: 3,
    },
    restriction: 'Mandalorian Resistance Only.',
    text:
      'Add 1 Tristan Wren mini.\n\n' +
      '*Lethal 1* _(While attacking, spend up to 1 aim token to gain *Pierce 1*.)_\n\n' +
      '*Suppressive* _(After you perform an attack, the defender gains 1 suppression token.)_',
  };
  return args;
})();
