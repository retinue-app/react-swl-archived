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
          onClick={async (e) => {
            const target = e.target as HTMLUListElement;
            const wrapper = target.parentNode as HTMLDivElement;
            wrapper.classList.add('saving');
            if (rootDiv.current) {
              const result = await html2canvas(rootDiv.current, {
                backgroundColor: null,
              });
              const anchor = document.createElement('a');
              anchor.download = `${props.title}.png`;
              anchor.href = result.toDataURL();
              anchor.click();
              wrapper.classList.remove('saving');
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
