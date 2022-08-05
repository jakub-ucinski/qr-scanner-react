import { CSSProperties } from 'react';
import QrScanner from 'qr-scanner';

export interface QrScannerProps {
  viewFinderConfig?: ViewFinderConfig;
  onResult?: (result: QrScanner.ScanResult) => void;
  onError?: (error: ScanError) => void;
  styles?: QrScannerStyles;
  scanConfig?: {
    qrColor?: QrColor;
    maxScansPerSecond?: number;
    cameraPreference?: CameraPreference;
  };
  'full-width'?: boolean;
}

export interface ViewFinderProps {
  outerColor?: string;
  strokeWidth?: string;
  borderColor?: string;
  radius?: string;
  length?: string;
}

export interface ViewFinderConfig extends ViewFinderProps {
  visible?: boolean;
  custom?: React.ReactElement<undefined>;
}

export interface QrScannerStyles {
  video?: CSSProperties;
  videoContainer?: CSSProperties;
  container?: CSSProperties;
}
export interface ScannerSettings {
  color?: QrColor;
  onResult?: (result: QrScanner.ScanResult) => void;
  onError?: (error: ScanError) => void;
  maxScansPerSecond?: number;
}

export type QrColor = 'dark' | 'light' | 'both';
export type CameraPreference = QrScanner.FacingMode | QrScanner.DeviceId;

export type UseScanner = (
  vid: React.RefObject<HTMLVideoElement>,
  scannerSettings: ScannerSettings
) => void;

export type ScanResult = QrScanner.ScanResult;
export type ScanError = Error | string;
