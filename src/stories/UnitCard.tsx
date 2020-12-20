import { UnitRank } from '@retinue/databank';
import React from 'react';
import { RankIcon } from './icons/RankIcon';
import './UnitCard.scss';

type Upgrade =
  | 'Heavy Weapon'
  | 'Personnel'
  | 'Force'
  | 'Command'
  | 'Pilot'
  | 'Crew'
  | 'Training'
  | 'Hardpoint'
  | 'Ordinance'
  | 'Illicit'
  | 'Comms'
  | 'Generator'
  | 'Gear'
  | 'Armament'
  | 'Grenade';

function upgradeToIcon(upgrade: Upgrade): string {
  return {
    'Heavy Weapon': 'W',
    Personnel: 'U',
    Force: 'F',
    Command: 'C',
    Pilot: 'P',
    Crew: 'A',
    Training: 'M',
    Hardpoint: 'H',
    Ordinance: 'J',
    Illicit: 'I',
    Comms: 'O',
    Generator: 'G',
    Gear: 'G',
    Armament: 'B',
    Grenade: 'N',
  }[upgrade];
}

function rangeToIcon(range: number): string {
  const mapping: { [key: string]: string } = {
    0: 'melee',
    1: 'range-1',
    2: 'range-2',
    3: 'range-3',
    4: 'range-4',
    5: 'range-5',
    6: 'infinite',
  };
  return mapping[range] || '';
}

interface Keyword {
  type?: 'action' | 'free';
  name?: string;
  description?: string;
  hint?: string;
}

interface Weapon {
  name: string;
  range: number[];
  keywords: string[];
  dice: {
    red?: number;
    black?: number;
    white?: number;
  };
}

export interface UnitCardProps {
  name: string;
  faction: string;
  theme: string;
  logo: string;
  image?: string;
  rank: UnitRank;
  type: string;
  unique: boolean;
  subTitle: string;
  miniatures: number;
  points: number;
  wounds: number;
  courage?: number | '-';
  resilience?: number | '-';
  defense: 'Red' | 'White';
  surgeAttack: 'None' | 'Hit' | 'Crit';
  surgeDefense: boolean;
  speed: number;
  upgrades: Upgrade[];
  keywords: Keyword[];
  weapons: Weapon[];
}

const RenderHintText: React.FC<{ text: string }> = (props) => {
  let output = props.text.replace(/[^{}]+(?=})/g, (match) => {
    let icon = '';
    switch (match) {
      case 'DEFENSIVE_SURGE':
        icon = 'd';
        break;
      case 'BLOCK':
        icon = 'b';
        break;
      case 'UPGRADE_FORCE':
        icon = 'F';
        break;
      case 'HIT':
        icon = 'h';
        break;
    }
    if (icon) {
      return `<span>${icon}</span>`;
    } else {
      return match;
    }
  });
  output = output.replace(/\*(.*?)\*/g, (match) => {
    return `<strong>${match}</strong>`;
  });
  output = output.replace(/{|}|\*/g, '');
  return <em dangerouslySetInnerHTML={{ __html: output }}></em>;
};

const RenderRange: React.FC<{ range: number[] }> = (props) => {
  return (
    <>
      {props.range.map((v, i) => {
        const output = rangeToIcon(v);
        return <span className={output} key={i} />;
      })}
    </>
  );
};

const RenderDice: React.FC<{
  red?: number;
  black?: number;
  white?: number;
}> = (props) => {
  const out: string[] = [];
  for (let i = 0; i < (props.red || 0); i++) {
    out.push('red');
  }
  for (let i = 0; i < (props.black || 0); i++) {
    out.push('black');
  }
  for (let i = 0; i < (props.white || 0); i++) {
    out.push('white');
  }
  return (
    <>
      {out.map((color, i) => {
        return (
          <span
            className={`dice ${color} ${i % 2 === 0 ? 'even' : 'odd'}`}
            key={i}
          />
        );
      })}
    </>
  );
};

export const UnitCard: React.FC<UnitCardProps> = (props) => {
  return (
    <div className="unit-card">
      <aside className="stats">
        <div className="image-and-type">
          {props.image ? (
            <img className="art" alt={props.name} src={props.image} />
          ) : (
            <div className="art placeholder" aria-label={props.name}>
              {props.name}
            </div>
          )}
          <div className="type">{props.type}</div>
        </div>
        <div className="defensive">
          <div className={`dice ${props.defense.toLowerCase()}`}>
            <span className="icon">E</span>
          </div>
          <div className="health">
            <div className="wounds">
              <span className="icon">L</span> {props.wounds}
            </div>
            <div className={`mitigation ${props.resilience && 'resilience'}`}>
              <span className="icon">{props.resilience ? 'V' : 'm'}</span>{' '}
              {props.courage || props.resilience}
            </div>
          </div>
          <div className="surges">
            <div
              style={{
                visibility: props.surgeAttack === 'None' ? 'hidden' : 'visible',
              }}
            >
              <span className="icon">o</span>:
              <span className="icon">
                {props.surgeAttack === 'Crit' ? 'c' : 'h'}
              </span>
            </div>
            <div
              style={{
                visibility: props.surgeDefense === false ? 'hidden' : 'visible',
              }}
            >
              <span className="icon">d</span>:<span className="icon">s</span>
            </div>
          </div>
          <div className="speed">
            <div className={`bar ${props.speed >= 1 && 'lit'}`} />
            <div className={`bar ${props.speed >= 2 && 'lit'}`} />
            <div className={`bar ${props.speed >= 3 && 'lit'}`} />
          </div>
        </div>
      </aside>
      <aside className="upgrades">
        <div className="logo" style={{ backgroundColor: props.theme }}>
          <object
            className="icon"
            aria-label={props.faction}
            data={props.logo}
          />
        </div>
        <div className="points">{props.points}</div>
        <ul className="slots">
          {props.upgrades.map((u, i) => {
            return <li key={i}>{upgradeToIcon(u)}</li>;
          })}
        </ul>
      </aside>
      <header>
        <div className="title">
          <strong>
            {props.unique && <>&bull; </>}
            {props.name}
          </strong>
          {props.subTitle && (
            <div className="sub-title">
              <em>{props.subTitle}</em>
            </div>
          )}
        </div>
        <div className="rank-and-minis">
          <div className="rank" style={{ backgroundColor: props.theme }}>
            <RankIcon rank={props.rank} />
          </div>
          <div className="minis">{props.miniatures}</div>
        </div>
      </header>
      <main>
        <ul>
          {props.keywords.map((v, i) => {
            return (
              <li key={i}>
                {v.type === 'free' && <span>y</span>}
                {v.type === 'action' && <span>x</span>}
                {v.name && <strong>{v.name}</strong>}
                {v.hint && <RenderHintText text={v.hint} />}
              </li>
            );
          })}
        </ul>
      </main>
      <footer>
        <ul>
          {props.weapons.map((v, i) => {
            return (
              <li key={i}>
                <strong>{v.name}</strong>
                <figure>
                  <RenderRange range={v.range} />
                  <RenderDice
                    red={v.dice.red}
                    black={v.dice.black}
                    white={v.dice.white}
                  />
                </figure>
                <section>
                  <ul>
                    {v.keywords.map((k, i) => {
                      return <li key={i}>{k}</li>;
                    })}
                  </ul>
                </section>
              </li>
            );
          })}
        </ul>
      </footer>
    </div>
  );
};
