export interface Reply {
  id: string;
  uid: string;
  date: string;
  content: string;
  title?: string;
  email?: string;
  image?: string;
  name?: string;
}

export interface Thread {
  id: string;
  uid: string;
  name: string;
  email?: string;
  title: string;
  date: string;
  content: string;
  image?: string;
  replies: Reply[];
}

export interface NavItem {
  name: string;
  id: string;
  isHeader?: boolean;
  isActive?: boolean;
  children?: NavItem[];
}