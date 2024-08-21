import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ReactNativeMotionCapture.web.ts
// and on native platforms to ReactNativeMotionCapture.ts
import ReactNativeMotionCaptureModule from './ReactNativeMotionCaptureModule';
import ReactNativeMotionCaptureView from './ReactNativeMotionCaptureView';
import { ChangeEventPayload, ReactNativeMotionCaptureViewProps } from './ReactNativeMotionCapture.types';

// Get the native constant value.
export const PI = ReactNativeMotionCaptureModule.PI;

export function hello(): string {
  return ReactNativeMotionCaptureModule.hello();
}

export async function setValueAsync(value: string) {
  return await ReactNativeMotionCaptureModule.setValueAsync(value);
}

const emitter = new EventEmitter(ReactNativeMotionCaptureModule ?? NativeModulesProxy.ReactNativeMotionCapture);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ReactNativeMotionCaptureView, ReactNativeMotionCaptureViewProps, ChangeEventPayload };
