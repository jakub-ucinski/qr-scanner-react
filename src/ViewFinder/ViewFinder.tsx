import React from 'react';
import styles from './ViewFinder.module.css';
import { ViewFinderProps } from '../types/index';

const ViewFinder: React.FC<ViewFinderProps> = ({
  outerColor = '#00000000',
  strokeWidth = '3px',
  strokeColor = '#000000',
  radius = '5px',
  strokeLength = '40px'
}) => {
  const styleVars = {
    '--border-color': strokeColor,
    '--border-radius': radius,
    '--width': strokeWidth,
    '--strokeLength': strokeLength,
    '--outer-color': outerColor
  } as React.CSSProperties;

  return (
    <div className={styles.viewFinder} style={styleVars}>
      <div style={styleVars} />
    </div>
  );
};

export default ViewFinder;
