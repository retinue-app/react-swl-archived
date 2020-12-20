import { Meta } from '@storybook/react/types-6-0';
import { Weapon, WeaponBar, WeaponBarProps, WeaponProps } from './WeaponBar';

export default {
  title: 'Embedded/Weapon Bar',
  component: WeaponBar,
} as Meta;

export const Example1 = (props: WeaponProps) => <Weapon {...props} />;
Example1.storyName = 'Configuring a Weapon';
Example1.args = (() => {
  const args: WeaponProps = {
    name: "Vader's Lightsaber",
    red: 6,
    melee: true,
    keywords: ['Impact 3', 'Pierce 3'],
  };
  return args;
})();

export const Example2 = (props: WeaponBarProps) => <WeaponBar {...props} />;
Example2.storyName = 'Composing a Weapon Bar';
Example2.args = (() => {
  const args: WeaponBarProps = {
    children: [
      <Weapon key={0} name="Boot Spikes" red={2} melee={true} />,
      <Weapon
        key={1}
        name="Wrist Rocket"
        black={2}
        minRange={1}
        maxRange={2}
        keywords={['Impact 1']}
      />,
      <Weapon
        key={2}
        name="Fett's EE-3 Carbine"
        black={2}
        minRange={1}
        maxRange={3}
        keywords={['Pierce 1']}
      />,
    ],
  };
  return args;
})();
