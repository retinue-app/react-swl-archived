import React from 'react';
import { KeywordText } from '../embed/CardTextDisplay';
import { DefenseStats } from '../embed/DefenseStats';
import { PointDisplay } from '../embed/PointDisplay';
import { SpeedDisplay } from '../embed/SpeedDisplay';
import { SurgeTable } from '../embed/SurgeTable';
import { UpgradeBar } from '../embed/UpgradeBar';
import { Weapon, WeaponBar } from '../embed/WeaponBar';
import { RankIcon } from '../icons/RankIcon';
import './UnitCard.scss';

export interface UnitCardProps {
  name: string;
}

export const UnitCard: React.FC<UnitCardProps> = (props) => {
  return (
    <div className="unit-card">
      <div
        className="faction-points-upgrades"
        style={{
          backgroundColor: '#4d7093',
        }}
      >
        <div
          className="faction-icon"
          style={{
            backgroundImage: 'url(logos/empire.svg)',
          }}
          aria-label="Galactic Empire"
        />
        <PointDisplay points={200} />
        <UpgradeBar force={3} />
      </div>
      <div className="rest-of-unit">
        <div className="unit-stats-description">
          <main className="name-keywords">
            <div className="header">
              <header className="name-title">
                <div className="name unique">Darth Vader</div>
                <div className="title">Dark Lord of the Sith</div>
              </header>
              <aside
                className="rank-minis"
                style={{
                  backgroundColor: '#4d7093',
                }}
              >
                <div className="icon">
                  <RankIcon rank="Commander" />
                </div>
                <div className="minis">1</div>
              </aside>
            </div>
            <article>
              <KeywordText
                name="Deflect"
                reminder={`While defending, if you spend a dodge token, you gain "{D_SURGE}: {BLOCK}"; if it's a ranged attack, the attacker suffers 1 wound for each {D_SURGE} rolled.`}
              />
              <KeywordText
                name="Immune: Pierce"
                reminder="Pierce cannot be used against you."
              />
              <KeywordText
                name="Master of the Force 1"
                reminder="During the End Phase, you may ready 1 of your {FORCE} upgrade cards."
              />
              <KeywordText
                name="Relentless"
                reminder="After you perform a move action, you may perform a free attack action"
              />
            </article>
          </main>
          <aside className="image-stats">
            <div
              className="image"
              style={{ backgroundImage: 'url(vader-preview.png)' }}
            />
            <div className="type">Trooper</div>
            <DefenseStats dice="Red" wounds={8} vehicle={false} />
            <div className="surge-table-wrapper">
              <SurgeTable />
            </div>
            <SpeedDisplay speed={1} />
          </aside>
        </div>
        <div className="weapons">
          <WeaponBar
            children={[
              <Weapon
                key={0}
                name="Vader's Lightsaber"
                red={6}
                melee={true}
                keywords={['Impact 3', 'Pierce 3']}
              />,
            ]}
          />
        </div>
      </div>
    </div>
  );
};
