export interface SidebarRoute {
  name: string;
  iconName: string;
  route: string;
}

export const SIDEBAR_ROUTES: SidebarRoute[] = [
  {
    name: 'Dashboard',
    iconName: 'dashboard',
    route: '/dashboard'
  },
  {
    name: 'Kalendarz',
    iconName: 'event_note',
    route: '/calendar'
  },
  {
    name: 'Sprinty',
    iconName: 'alarm_on',
    route: '/sprints'
  },
  {
    name: 'Zadania',
    iconName: 'task',
    route: '/tasks'
  }
];
