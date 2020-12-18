import React from 'react';
import './UnitCard.css';

export interface UnitCardProps {
  name: string;
  unique?: true;
  subTitle?: string;
}

export function UnitCard(props: UnitCardProps): JSX.Element {
  return (
    <div className="unit-card">
      <div className="title">
        <strong>
          {props.unique && <>&bull; </>}
          {props.name}
        </strong>
      </div>
      {props.subTitle && (
        <div className="sub-title">
          <em>{props.subTitle}</em>
        </div>
      )}
    </div>
  );
}
