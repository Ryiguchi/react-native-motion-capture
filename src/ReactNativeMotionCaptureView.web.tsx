import * as React from 'react';

import { ReactNativeMotionCaptureViewProps } from './ReactNativeMotionCapture.types';

export default function ReactNativeMotionCaptureView(props: ReactNativeMotionCaptureViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
