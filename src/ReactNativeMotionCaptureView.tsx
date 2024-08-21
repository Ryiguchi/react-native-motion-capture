import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ReactNativeMotionCaptureViewProps } from './ReactNativeMotionCapture.types';

const NativeView: React.ComponentType<ReactNativeMotionCaptureViewProps> =
  requireNativeViewManager('ReactNativeMotionCapture');

export default function ReactNativeMotionCaptureView(props: ReactNativeMotionCaptureViewProps) {
  return <NativeView {...props} />;
}
