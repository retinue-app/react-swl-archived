import { Meta } from '@storybook/react/types-6-0';
import { CommandCard, CommandCardProps } from './CommandCard';

export default {
  title: 'Cards/Command',
  component: CommandCard,
} as Meta;

export const Implacable = (args: CommandCardProps) => <CommandCard {...args} />;
Implacable.args = {
  pips: 1,
  title: 'Implacable',
  image: 'demo/cc-implacable.png',
  unit: 'Darth Vader',
  orders: 'Darth Vader',
  text:
    `At the end of Darth Vader's first activation, he may suffer ` +
    `1 wound to shuffle his order token into the order pool. ` +
    `During Darth Vader's  second activation, he performs 1 ` +
    `fewer action.`,
};

export const JetpackRocket = (args: CommandCardProps) => (
  <CommandCard {...args} />
);
JetpackRocket.storyName = 'Z-6 Jetpack Rocket';
JetpackRocket.args = {
  pips: 3,
  title: 'Z-6 Jetpack Rocket',
  unit: 'Boba Fett',
  image: 'demo/cc-jetpack-rocket.png',
  orders: 'Boba Fett',
  text: `During Boba Fett's activation he gains the following weapon:`,
  weapon: {
    name: '',
    minRange: 3,
    maxRange: 4,
    red: 3,
    black: 0,
    white: 0,
    keywords: ['Blast', 'Impact 2'],
  },
};

export const StandingOrders = (args: CommandCardProps) => (
  <CommandCard {...args} />
);
StandingOrders.args = {
  pips: 4,
  title: 'Standing Orders',
  size: 'small',
  image: 'demo/cc-standing-orders.png',
  orders: '1 Unit',
  text: `At the end of the Command Phase, return this card to your hand.`,
};
