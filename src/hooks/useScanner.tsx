import QrScanner from 'qr-scanner';
import { useEffect } from 'react';
import { UseScanner } from '../types';

const useScanner: UseScanner = (
  vid,
  {
    onResult = (result): void => {
      console.log(result);
    },
    color = 'both',
    maxScansPerSecond = 5,
    onError = (error): void => {
      console.log(error);
    },
    cameraPreference = 'environment'
  }
) => {
  const inversion =
    (color && color === 'dark' && 'original') ||
    (color && color === 'light' && 'invert') ||
    'both';

  useEffect(() => {
    let qrScanner: QrScanner | null = null;

    if (vid.current) {
      qrScanner = new QrScanner(vid.current, onResult, {
        onDecodeError: onError,
        maxScansPerSecond,
        preferredCamera: cameraPreference
      });

      if (!QrScanner.hasCamera()) {
        onError('Device has no camera');
      } else {
        qrScanner.setInversionMode(inversion);
        qrScanner.start();
      }
    }

    return (): void => {
      qrScanner && qrScanner.stop();
      qrScanner && qrScanner.destroy();
      qrScanner = null;
    };
  }, [vid.current]);
};

export default useScanner;
