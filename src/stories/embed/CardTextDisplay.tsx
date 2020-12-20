import React from 'react';
import { DiceIcon } from '../icons/DiceIcon';
import { KeywordIcon } from '../icons/KeywordIcon';
import { RankIcon } from '../icons/RankIcon';
import { UpgradeIcon } from '../icons/UpgradeIcon';
import './CardTextDisplay.scss';

const supportedSymbols: { [name: string]: JSX.Element | undefined } = {
  // Dice.
  D_SURGE: <DiceIcon icon="Defense Surge" />,
  A_SURGE: <DiceIcon icon="Attack Surge" />,
  BLOCK: <DiceIcon icon="Block" />,
  HIT: <DiceIcon icon="Hit" />,
  CRIT: <DiceIcon icon="Crit" />,

  // Ranks.
  COMMANDER: <RankIcon rank="Commander" />,
  OPERATIVE: <RankIcon rank="Operative" />,
  CORPS: <RankIcon rank="Corps" />,
  SPECIAL_FORCES: <RankIcon rank="Special Forces" />,
  SUPPORT: <RankIcon rank="Support" />,
  HEAVY: <RankIcon rank="Heavy" />,

  // Upgrades.
  FORCE: <UpgradeIcon type="Force" />,
};

export interface SymbolRendererProps {
  text: string;
  variant?: 'reminder' | 'keyword';
}

export const SymbolRenderer: React.FC<SymbolRendererProps> = (props) => {
  const output: JSX.Element[] = [];

  let buffer = '';
  let key = 0;

  function clearBuffer() {
    if (buffer) {
      output.push(<span key={key++}>{buffer}</span>);
    }
    buffer = '';
  }

  for (let i = 0; i < props.text.length; i++) {
    const char = props.text[i];
    if (char === '{') {
      clearBuffer();
      i++;
      const match = props.text.indexOf('}', i + 1);
      const string = props.text.substring(i, match);
      output.push(
        <span key={key++}>
          {supportedSymbols[string] || <code>{string}</code>}{' '}
        </span>,
      );
      i = match + 1;
    } else if (char === '*') {
      clearBuffer();
      i++;
      const match = props.text.indexOf('*', i + 1);
      const string = props.text.substring(i, match);
      output.push(
        <strong key={key++}>
          <SymbolRenderer text={string} variant="keyword" />
        </strong>,
      );
      i = match + 1;
    } else {
      buffer = `${buffer}${char}`;
    }
  }

  clearBuffer();

  return (
    <span className={`symbolized-text ${props.variant || ''}`}>{output}</span>
  );
};

export interface KeywordTextProps {
  icon?: 'Action' | 'Free Action';
  name: string;
  reminder?: string;
}

export const KeywordText: React.FC<KeywordTextProps> = (props) => {
  return (
    <div className="keyword-text">
      {props.icon && <KeywordIcon icon={props.icon} />}
      <SymbolRenderer text={props.name} variant="keyword" />
      {props.reminder && (
        <SymbolRenderer text={props.reminder} variant="reminder" />
      )}
    </div>
  );
};
