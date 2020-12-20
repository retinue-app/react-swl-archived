import { Meta } from '@storybook/react/types-6-0';
import { SurgeTable, SurgeTableProps } from './SurgeTable';

export default {
  title: 'Embedded/Surge Table',
  component: SurgeTable,
} as Meta;

export const NoSurges = (args: SurgeTableProps) => <SurgeTable {...args} />;
NoSurges.args = {};

export const SurgeHit = (args: SurgeTableProps) => <SurgeTable {...args} />;
SurgeHit.args = {
  attack: 'Hit',
};

export const SurgeCrit = (args: SurgeTableProps) => <SurgeTable {...args} />;
SurgeCrit.args = {
  attack: 'Crit',
};

export const SurgeBlock = (args: SurgeTableProps) => <SurgeTable {...args} />;
SurgeBlock.args = {
  defense: 'Block',
};

export const SurgeBoth = (args: SurgeTableProps) => <SurgeTable {...args} />;
SurgeBoth.args = {
  attack: 'Hit',
  defense: 'Block',
};
