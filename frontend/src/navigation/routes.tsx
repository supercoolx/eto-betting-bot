import type { ComponentType, JSX } from 'react';

import Index from '@/pages/Index';
import Game from '@/pages/Game';
import Earn from '@/pages/Earn';
import Friends from '@/pages/Friends';
import Boost from '@/pages/Boost';

interface Route {
  path: string;
  Component: ComponentType;
  title?: string;
  icon?: JSX.Element;
}

export const routes: Route[] = [
  { path: '/', Component: Index },
  { path: '/game', Component: Game },
  { path: '/earn', Component: Earn },
  { path: '/friends', Component: Friends },
  { path: '/boost', Component: Boost }
];
