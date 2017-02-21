package com.motiondetector;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class MotionDetectorModule extends ReactContextBaseJavaModule {

  public MotionDetectorModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  public String getName() {
    return "MotionDetector";
  }

  @ReactMethod
  public void start() {

  }

  @ReactMethod
  public void stop() {

  }
}