import { UpgradeType } from '@retinue/databank';
import html2canvas from 'html2canvas';
import React, { useRef } from 'react';
import { SymbolRenderer } from '../embed/CardTextDisplay';
import { WeaponPool, WeaponPoolProps } from '../embed/WeaponPool';
import { UpgradeIcon } from '../icons/UpgradeIcon';
import './UpgradeCard.scss';

export interface UpgradeCardProps {
  name: string;
  unique?: boolean;
  weapon?: WeaponPoolProps;
  usage?: 'Exhaust' | 'Discard';
  image?: string;
  wounds?: number;
  points: number;
  type: UpgradeType;
  restriction?: string;
  text: string;
}

export const UpgradeCard: React.FC<UpgradeCardProps> = (props) => {
  const rootDiv = useRef<HTMLDivElement>(null);
  return (
    <div className="upgrade-card" ref={rootDiv}>
      <header className={`${props.unique ? 'unique' : ''}`}>
        <div>{props.name}</div>
      </header>
      <div
        className="art"
        style={{
          backgroundImage: `url(${props.image})`,
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
      >
        <div className="details">
          {props.weapon && (
            <div className="weapon">
              <WeaponPool {...props.weapon} />
            </div>
          )}
          {props.usage && (
            <div className={`usage ${props.usage.toLowerCase()}`} />
          )}
          {props.wounds && <div className="wounds">{props.wounds}</div>}
        </div>
      </div>
      <main>
        {props.restriction && (
          <SymbolRenderer text={props.restriction} variant="reminder" />
        )}
        <SymbolRenderer text={props.text} />
      </main>
      <footer>
        <div
          className="type"
          onClick={async () => {
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
        >
          <UpgradeIcon type={props.type} />
        </div>
        <div className="points">{props.points}</div>
      </footer>
    </div>
  );
};
