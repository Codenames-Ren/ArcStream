import * as ScreenOrientation from "expo-screen-orientation";

export async function lockLandscape() {
  await ScreenOrientation.lockAsync(
    ScreenOrientation.OrientationLock.LANDSCAPE,
  );
}

export async function lockPortrait() {
  await ScreenOrientation.lockAsync(
    ScreenOrientation.OrientationLock.PORTRAIT_UP,
  );
}
