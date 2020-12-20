import React from 'react';
import './KeywordIcon.scss';

export interface KeywordIconProps {
  icon:
    | 'Action'
    | 'Free Action'
    | 'Exhaust'
    | 'Health'
    | 'Courage'
    | 'Resilience';
}

export const KeywordIcon: React.FC<KeywordIconProps> = (props) => {
  return <span className="keyword-icon" role="img" aria-label={props.icon} />;
};
