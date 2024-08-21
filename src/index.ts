import { EventEmitter, Subscription } from 'expo-modules-core';
import { PermissionsAndroid, Platform } from 'react-native';

import {
  ActivityTransitionEventPayload,
  MotionCaptureViewProps,
} from './ReactNativeMotionCapture.types';
import MotionCaptureModule from './ReactNativeMotionCaptureModule';

export enum ActivityPermissionResults {
  GRANTED = 'granted',
  DENIED = 'denied',
}

export const isGooglePlayServicesAvailable =
  MotionCaptureModule.isGooglePlayServicesAvailable;

export const googlePlayServicesStatus =
  MotionCaptureModule.googlePlayServicesStatus;

export const getActivityPermissionStatus = (): ActivityPermissionResults => {
  const value: 0 | 1 = MotionCaptureModule.getActivityPermissionResult();
  if (value === 0) {
    return ActivityPermissionResults.GRANTED;
  }

  return ActivityPermissionResults.DENIED;
};

export const requestActivityPermissionsAsync =
  async (): Promise<ActivityPermissionResults> => {
    if (Platform.OS === 'android') {
      const permissionStatus: number =
        MotionCaptureModule.getActivityPermissionResult();

      if (permissionStatus === 0) {
        return ActivityPermissionResults.GRANTED;
      }

      try {
        await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACTIVITY_RECOGNITION
        );

        const newPermissionStatus: number =
          MotionCaptureModule.getActivityPermissionResult();

        if (newPermissionStatus === 0) {
          return ActivityPermissionResults.GRANTED;
        }

        return ActivityPermissionResults.DENIED;
      } catch (err) {
        console.warn(err);
        return ActivityPermissionResults.DENIED;
      }
    }

    return ActivityPermissionResults.DENIED;
  };

export function hello(): string {
  return MotionCaptureModule.hello();
}

export function startActivityTransitionMonitoring() {
  return MotionCaptureModule.startActivityTransitionMonitoring();
}

export function stopActivityTransitionMonitoring() {
  return MotionCaptureModule.stopActivityTransitionMonitoring();
}

const emitter = new EventEmitter(MotionCaptureModule);

export function addActivityTransitionListener(
  listener: (event: ActivityTransitionEventPayload) => void
): Subscription {
  return emitter.addListener<ActivityTransitionEventPayload>(
    'onChange',
    listener
  );
}

export { MotionCaptureViewProps, ActivityTransitionEventPayload };
