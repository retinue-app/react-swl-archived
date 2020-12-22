import { UnitRank } from '@retinue/databank';
import html2canvas from 'html2canvas';
import React, { useRef } from 'react';
import { KeywordText, KeywordTextProps } from '../embed/CardTextDisplay';
import { DefenseStats } from '../embed/DefenseStats';
import { PointDisplay } from '../embed/PointDisplay';
import { SpeedDisplay } from '../embed/SpeedDisplay';
import { SurgeTable } from '../embed/SurgeTable';
import { UpgradeBar, UpgradeBarProps } from '../embed/UpgradeBar';
import { Weapon, WeaponBar, WeaponProps } from '../embed/WeaponBar';
import { RankIcon } from '../icons/RankIcon';
import './UnitCard.scss';

export interface UnitCardProps {
  name: string;
  title?: string;
  unique?: boolean;
  faction:
    | 'Galactic Empire'
    | 'Rebel Alliance'
    | 'Galactic Republic'
    | 'Separatist Alliance';
  points: number;
  rank: UnitRank;
  miniatures: number;
  type: string;
  image?: string;
  defenseDice: 'White' | 'Red';
  wounds: number;
  courageOrResilience?: number;
  surgeAttack?: 'Hit' | 'Crit';
  surgeBlock?: boolean;
  speed: 0 | 1 | 2 | 3;
  upgrades: UpgradeBarProps;
  keywords: KeywordTextProps[];
  weapons: WeaponProps[];
}

export const UnitCard: React.FC<UnitCardProps> = (props) => {
  let theme: string;
  let image: string;
  switch (props.faction) {
    case 'Galactic Empire':
      theme = '#4d7093';
      image = 'logos/empire.svg';
      break;
    case 'Rebel Alliance':
      theme = '#863C35';
      image = 'logos/rebels.svg';
      break;
    case 'Galactic Republic':
      theme = '#B49E77';
      image = 'logos/republic.svg';
      break;
    case 'Separatist Alliance':
      theme = '#354895';
      image = 'logos/separatist.svg';
      break;
  }
  const rootDiv = useRef<HTMLDivElement>(null);
  return (
    <div className="unit-card" ref={rootDiv}>
      <div
        className="faction-points-upgrades"
        style={{
          backgroundColor: theme,
        }}
      >
        <div
          className="faction-icon"
          style={{
            backgroundImage: `url(${image})`,
          }}
          aria-label={props.faction}
        />
        <PointDisplay points={props.points} />
        <UpgradeBar {...props.upgrades} />
        <div
          className="menu"
          role="button"
          onClick={async (e) => {
            if (rootDiv.current) {
              rootDiv.current.classList.add('html2canvas');
              const result = await html2canvas(rootDiv.current, {
                backgroundColor: null,
              });
              const anchor = document.createElement('a');
              anchor.download = `${props.name}.png`;
              anchor.href = result.toDataURL();
              anchor.click();
              rootDiv.current.classList.remove('html2canvas');
            }
          }}
        />
      </div>
      <div className="rest-of-unit">
        <div className="unit-stats-description">
          <main className="name-keywords">
            <div className="header">
              <header className="name-title">
                <div className={`name ${props.unique ? 'unique' : ''}`}>
                  {props.name}
                </div>
                <div className="title">{props.title}</div>
              </header>
              <aside
                className="rank-minis"
                style={{
                  backgroundColor: theme,
                }}
              >
                <div className="icon">
                  <RankIcon rank={props.rank} />
                </div>
                <div className="minis">{props.miniatures}</div>
              </aside>
            </div>
            <article>
              {props.keywords.map((v, i) => {
                return <KeywordText key={i} {...v} />;
              })}
            </article>
          </main>
          <aside className="image-stats">
            <div
              className="image"
              style={{
                backgroundImage: props.image ? `url(${props.image})` : '',
              }}
              onClick={(t) => {
                const target = t.target as HTMLDivElement;
                const upload = document.createElement('input');
                upload.type = 'file';
                upload.addEventListener('change', () => {
                  const file = upload.files?.[0];
                  if (!file) {
                    return;
                  }
                  const reader = new FileReader();
                  reader.addEventListener('load', () => {
                    target.style.backgroundImage = `url(${reader.result})`;
                  });
                  reader.readAsDataURL(file);
                });
                upload.click();
              }}
            />
            <div className="type">{props.type}</div>
            <DefenseStats
              dice={props.defenseDice}
              wounds={props.wounds}
              vehicle={props.type.toLowerCase().indexOf('vehicle') !== -1}
              mitigation={props.courageOrResilience}
            />
            <div className="surge-table-wrapper">
              <SurgeTable
                attack={props.surgeAttack}
                defense={props.surgeBlock ? 'Block' : undefined}
              />
            </div>
            <SpeedDisplay speed={props.speed} />
          </aside>
        </div>
        <div className="weapons">
          <WeaponBar
            children={
              // Prevents crashes if an invalid object was passed.
              props.weapons && props.weapons.map instanceof Function
                ? props.weapons.map((v, i) => {
                    return <Weapon {...v} key={i} />;
                  })
                : []
            }
          />
        </div>
      </div>
    </div>
  );
};
