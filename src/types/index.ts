import { CSSProperties } from 'react';
import QrScanner from 'qr-scanner';

export interface QrScannerProps {
  viewFinderConfig?: ViewFinderConfig;
  onResult?: ResultHandler;
  onError?: ErrorHandler;
  styles?: QrScannerStyles;
  scanConfig?: ScanConfig;
  'full-width'?: boolean;
}

export interface ViewFinderProps {
  outerColor?: string;
  strokeWidth?: string;
  strokeColor?: string;
  radius?: string;
  strokeLength?: string;
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

export interface ScanConfig {
  qrColor?: QrColor;
  maxScansPerSecond?: number;
  cameraPreference?: CameraPreference;
}

export interface ScannerSettings {
  color?: QrColor;
  onResult?: ResultHandler;
  onError?: ErrorHandler;
  maxScansPerSecond?: number;
  cameraPreference?: CameraPreference;
}

export type QrColor = 'dark' | 'light' | 'both';
export type CameraPreference = QrScanner.FacingMode | QrScanner.DeviceId;

export type UseScanner = (
  vid: React.RefObject<HTMLVideoElement>,
  scannerSettings: ScannerSettings
) => void;

export type ScanResult = QrScanner.ScanResult;
export type ScanError = Error | string;

export type ResultHandler = (result: ScanResult) => void;
export type ErrorHandler = (error: ScanError) => void;
