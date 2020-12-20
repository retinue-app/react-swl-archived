import { Meta } from '@storybook/react/types-6-0';
import {
  KeywordText,
  KeywordTextProps,
  SymbolRenderer,
  SymbolRendererProps,
} from './CardTextDisplay';

export default {
  title: 'Embedded/Symbol Renderer',
  component: SymbolRenderer,
} as Meta;

export const Example1 = (args: SymbolRendererProps) => {
  return <SymbolRenderer {...args} />;
};

Example1.storyName = 'Example';
Example1.args = {
  text: 'While defending, cancel all {HIT} results.',
};

export const Example2 = (args: SymbolRendererProps) => {
  return <SymbolRenderer {...args} />;
};

Example2.storyName = 'Reminder';
Example2.args = {
  text:
    'While defending, if the attack pool has *Pierce X*, roll x additional ' +
    'defense dice.',
  variant: 'reminder',
};

export const Example3 = (args: KeywordTextProps) => {
  return <KeywordText {...args} />;
};

Example3.args = {
  icon: 'Action',
  name: 'Jump 1',
  reminder:
    'Perform a move during which you ignore terrain that is height 1 ' +
    'or lower. This is treated as a move action.',
};
Example3.storyName = 'Keyword Action';
