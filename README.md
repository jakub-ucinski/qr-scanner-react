# qr-scanner-react

## Install

```bash
npm install --save qr-scanner-react
```

## Usage

**Without props**

```ts
<QrScanner />
```

**With props**

```ts
<QrScanner {...props} />
```

## Props

**Type**

```ts
{
  viewFinderConfig: ViewFinderConfig | undefined;
  onResult: ResultHandler | undefined;
  onError: ErrorHandler | undefined;
  styles: QrScannerStyles | undefined;
  scanConfig: ScanConfig | undefined;
  'full-width': boolean | undefined;
}
```

| Prop             | Description                                                                                                                                     |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| viewFinderConfig | Configure the appearance of the viewFinder.                                                                                                     |
| onResult         | Called when a QR code is read.                                                                                                                  |
| onError          | Called when an error occurred or a QR Code cannot be read.                                                                                      |
| styles           | Configure the CSS of the rendered elements.                                                                                                     |
| scanConfig       | Configure the scanning behavior.                                                                                                                |
| full-width       | A boolean describing whether the camera should be cropped to square, or not. By default, full-width is false, and so it is cropped to a square. |

### viewFinderConfig

An object used to configure the appearance of the view finder.

**Type**

```ts
{
  visible: boolean | undefined;
  outerColor: string | undefined;
  strokeWidth: string | undefined;
  strokeColor: string | undefined;
  radius: string | undefined;
  strokeLength: string | undefined;
  custom: React.ReactElement<undefined> | undefined;
}
```

**Explanation**

| Attribute    | Description                                                                                                                                | Default     | Examples                                                              |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ----------- | --------------------------------------------------------------------- |
| visible      | Whether the view finder should be visible.                                                                                                 | `false`     | `visible : true`                                                      |
| outerColor   | Background color outside the scanning region.                                                                                              | `#00000000` | `outerColor: "black"` `outerColor: "#FFFFFFAA"`,                      |
| strokeWidth  | Width of the lines constituting the view finder.                                                                                           | `3px`       | `strokeWidth: "10px"` `strokeWidth: "1.2em"`                          |
| strokeColor  | Color of the lines constituting the view finder.                                                                                           | `#000000`   | `strokeColor: "black"` `strokeColor: "#FFFFFFAA"`                     |
| radius       | Radius of the corners of the view finder.                                                                                                  | `5px`       | `radius: "10px"` `radius: "1.2em"` `radius: "15%"`                    |
| strokeLength | Length of the lines constituting the view finder.                                                                                          | `40px`      | `strokeLength: "100px"` `strokeLength: "1.2em"` `strokeLength: "55%"` |
| custom       | Instead of using the built-in view finder with the customizations, you can provide your own, in which case, your view finder will be used. | `undefined` | `custom : <CustomViewFinder />`                                       |

### onResult

A function called when a QR code is read.

**Type**

```ts
(result: ScanResult) => void
```

**ScanResult**

```ts
{
  data: string;
  cornerPoints: ({ x: number; y: number; }[]);
}
```

| Attribute    | Description                                         |
| ------------ | --------------------------------------------------- |
| data         | The data read from the QR code.                     |
| cornerPoints | The location of the corners of the QR code scanned. |

**Default**

```ts
(result) => {
  console.log(result);
};
```

### onError

A function called when an error occurred or a QR Code cannot be read.

**Type**

```ts
(error: Error | string) => void;
```

**Default**

```ts
(error) => {
  console.log(error);
};
```

### styles

An object used to configure the CSS of the rendered elements.

**Type**

```ts
{
  video: CSSProperties | undefined;
  videoContainer: CSSProperties | undefined;
  container: CSSProperties | undefined;
}
```

### scanConfig

An object used to configure the scanning behavior.

**Type**

```ts
{
  qrColor: 'dark' | 'light' | 'both' | undefined;
  maxScansPerSecond: number | undefined;
  cameraPreference: 'environment' | 'user' | DeviceId: string | undefined;
}
```

**Explanation**

| Attribute         | Description                                                        | Default         |
| ----------------- | ------------------------------------------------------------------ | --------------- |
| qrColor           | The colors of the QR codes that should be scanned.                 | `"both"`        |
| maxScansPerSecond | Limit the number of scans made a second.                           | `5`             |
| cameraPreference  | Which camera should be used, if there are multiple camera options. | `"environment"` |

<!-- export interface QrScannerProps {
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
} -->

## License

MIT © [jakub-ucinski](https://github.com/jakub-ucinski)
