import useScanner from '../hooks/useScanner';
import React, { CSSProperties, useRef } from 'react';
import ViewFinder from '../ViewFinder/ViewFinder';
import styles from './QrScanner.module.css';
import { QrScannerProps, ScannerSettings, ViewFinderConfig } from '../types';

type selectViewFinderType = (
  viewFinderConfig: ViewFinderConfig
) => React.ReactElement;

const selectViewFinder: selectViewFinderType = (
  viewFinderConfig: ViewFinderConfig
) => {
  return viewFinderConfig.custom ? (
    viewFinderConfig.custom
  ) : (
    <ViewFinder {...viewFinderConfig} />
  );
};

export const QrScanner: React.FC<QrScannerProps> = (props) => {
  const vid = useRef<HTMLVideoElement>(null);

  const scannerSettings: ScannerSettings = {
    color: props.scanConfig?.qrColor,
    onResult: props.onResult,
    onError: props.onError,
    maxScansPerSecond: props.scanConfig?.maxScansPerSecond,
    cameraPreference: props.scanConfig?.cameraPreference
  };

  useScanner(vid, scannerSettings);

  const viewFinder =
    props.viewFinderConfig?.visible && selectViewFinder(props.viewFinderConfig);

  const outerCss: CSSProperties = {
    width: '400px',
    margin: '10px',
    ...props.styles?.container
  };

  return (
    <div style={outerCss}>
      <div className={styles.container} style={props.styles?.videoContainer}>
        <React.Fragment>{viewFinder}</React.Fragment>
        <video
          style={props.styles?.video}
          className={`${styles.video} ${
            props['full-width'] ? styles['full-width'] : ''
          }`}
          ref={vid}
          muted
          autoPlay
        />
      </div>
    </div>
  );
};
