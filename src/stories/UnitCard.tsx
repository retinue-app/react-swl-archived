import React from 'react';
import './UnitCard.scss';

type Rank =
  | 'Commander'
  | 'Operative'
  | 'Corps'
  | 'Special Forces'
  | 'Support'
  | 'Heavy';

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

function rankToIcon(rank: Rank): string {
  return {
    Commander: '5',
    Operative: 'b',
    Corps: '6',
    'Special Forces': '7',
    Support: '8',
    Heavy: '9',
  }[rank];
}

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
    Ordinance: 'O',
    Illicit: 'I',
    Comms: 'O',
    Generator: 'G',
    Gear: 'G',
    Armament: 'B',
    Grenade: 'N',
  }[upgrade];
}

interface Keyword {
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
  rank: Rank;
  unique: boolean;
  subTitle: string;
  miniatures: number;
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
    }
    if (icon) {
      return `<span>${icon}</span>`;
    } else {
      return match;
    }
  });
  output = output.replace(/{|}/g, '');
  return <em dangerouslySetInnerHTML={{ __html: output }}></em>;
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
        return <span className={`dice ${color}`} key={i} />;
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
          <div className="type">Trooper</div>
        </div>
        <div className="defensive">
          <div className="dice red">
            <span className="icon">E</span>
          </div>
          <div className="health">
            <div className="wounds">
              <span className="icon">L</span> 8
            </div>
            <div className="mitigation">
              <span className="icon">m</span> -
            </div>
          </div>
          <div className="surges">
            <div>
              <span className="icon">o</span>:<span className="icon">c</span>
            </div>
            <div>
              <span className="icon">d</span>:<span className="icon">s</span>
            </div>
          </div>
          <div className="speed">
            <div className={`bar lit`} />
            <div className="bar" />
            <div className="bar" />
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
        <div className="points">200</div>
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
            {rankToIcon(props.rank)}
          </div>
          <div className="minis">{props.miniatures}</div>
        </div>
      </header>
      <main>
        <ul>
          {props.keywords.map((v, i) => {
            return (
              <li key={i}>
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
                  <span className="melee" />
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
