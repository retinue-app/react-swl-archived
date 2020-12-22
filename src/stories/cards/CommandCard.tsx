import html2canvas from 'html2canvas';
import React, { useRef } from 'react';
import { SymbolRenderer } from '../embed/CardTextDisplay';
import { PipDisplay } from '../embed/PipDisplay';
import { Weapon, WeaponBar, WeaponProps } from '../embed/WeaponBar';
import './CommandCard.scss';

export interface CommandCardProps {
  pips: 0 | 1 | 2 | 3;
  title: string;
  image?: string;
  unit?: string;
  orders: string;
  text: string;
  size?: 'small' | 'normal';
  weapon?: WeaponProps;
}

export const CommandCard: React.FC<CommandCardProps> = (props) => {
  const rootDiv = useRef<HTMLDivElement>(null);
  return (
    <div className="command-card" ref={rootDiv}>
      <header>
        <div
          className="pip-wrapper"
          role="button"
          onClick={async () => {
            if (rootDiv.current) {
              rootDiv.current.classList.add('html2canvas');
              const result = await html2canvas(rootDiv.current, {
                backgroundColor: null,
              });
              const anchor = document.createElement('a');
              anchor.download = `${props.title}.png`;
              anchor.href = result.toDataURL();
              anchor.click();
              rootDiv.current.classList.remove('html2canvas');
            }
          }}
        >
          <PipDisplay pips={props.pips} />
        </div>
        <div className="title">{props.title}</div>
      </header>
      <div
        className={`art ${props.size || ''}`}
        role="img"
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
      >
        {props.unit && <div className="unit-specifier">{props.unit}</div>}
      </div>
      <main>
        <div className="orders">{props.orders}</div>
        <div className="text">
          <SymbolRenderer text={props.text} />
        </div>
      </main>
      {props.weapon && (
        <footer>
          <WeaponBar children={[<Weapon key={0} {...props.weapon} />]} />
        </footer>
      )}
    </div>
  );
};
