import NetworkIcon from "./NetworkIcon";
import CameraIcon from "./CameraIcon";
import ShieldIcon from "./ShieldIcon";

export const ICONS = {
  network: NetworkIcon,
  camera: CameraIcon,
  security: ShieldIcon,
};

export type IconKey = keyof typeof ICONS;