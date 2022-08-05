import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { QrScanner } from '../src/QrScanner/QrScanner';
import { ScanError, ScanResult } from '../src/types';

export default {
  title: 'QrScanner',
  component: QrScanner
} as ComponentMeta<typeof QrScanner>;

// We create a “template” of how args map to rendering
const QrScannerTemplate: ComponentStory<typeof QrScanner> = (args) => {
  const [error, setError] = useState<ScanError | undefined>(undefined);
  const [data, setData] = useState<ScanResult | undefined>(undefined);

  return (
    <>
      <QrScanner
        {...args}
        styles={{
          video: {},
          videoContainer: {},
          container: {}
        }}
        onResult={setData}
        onError={setError}
      />
      <div>The value is: {JSON.stringify(data, null, 2)}</div>
      <div>The error is: {error?.toString()}</div>
    </>
  );
};

export const QrScannerMain = QrScannerTemplate.bind({});

QrScannerMain.args = {
  viewFinderConfig: {
    visible: false
  }
};
