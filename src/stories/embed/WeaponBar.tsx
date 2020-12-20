import React, { ReactNode } from 'react';
import './WeaponBar.scss';
import { WeaponPool, WeaponPoolProps } from './WeaponPool';

export type WeaponProps = WeaponPoolProps & {
  name: string;
  keywords?: string[];
};

export const Weapon: React.FC<WeaponProps> = (props) => {
  return (
    <section className="weapon">
      <header>{props.name}</header>
      <main>
        <WeaponPool {...props} />
      </main>
      <footer>
        <ul>
          {props.keywords?.map((v, i) => {
            return <li key={i}>{v}</li>;
          })}
        </ul>
      </footer>
    </section>
  );
};

export interface WeaponBarProps {
  children: ReactNode[];
}

export const WeaponBar: React.FC<WeaponBarProps> = (props) => {
  return (
    <ul className="weapon-bar">
      {props.children.map((v, i) => {
        return <li key={i}>{v}</li>;
      })}
    </ul>
  );
};
