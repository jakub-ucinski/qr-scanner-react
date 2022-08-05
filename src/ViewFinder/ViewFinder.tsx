import React from 'react';
import styles from './ViewFinder.module.css';
import { ViewFinderProps } from '../types/index';

const ViewFinder: React.FC<ViewFinderProps> = ({
  outerColor = '#00000000',
  strokeWidth = '3px',
  borderColor = '#000',
  radius = '5px',
  length = '40px'
}) => {
  const styleVars = {
    '--border-color': borderColor,
    '--border-radius': radius,
    '--width': strokeWidth,
    '--length': length,
    '--outer-color': outerColor
  } as React.CSSProperties;

  return (
    <div className={styles.viewFinder} style={styleVars}>
      <div style={styleVars} />
    </div>
  );
};

export default ViewFinder;
