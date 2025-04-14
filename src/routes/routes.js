import config from '@/config';

import Rectangle from '@/pages/Rectangle';
import Square from '@/pages/Square';
import Triangular from '@/pages/Triangular';

const publicRoutes = [
  { path: config.routes.Rectangle, component: Rectangle },
  { path: config.routes.Square, component: Square },
  { path: config.routes.Triangular, component: Triangular },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
