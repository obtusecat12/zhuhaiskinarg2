export interface NavItem {
  name: string;
  iconPath: string;
  active?: boolean;
  color?: string;
  fill?: string;
}

export interface CaptureItem {
  url: string;
  date: string;
  image: string;
}