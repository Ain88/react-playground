import { Home } from './pages/Home';
import { Reference } from './pages/Reference';
import { MemeGenerator } from './pages/MemeGenerator';

export const routes = [
    { path: "/home", title: "Home", Component: Home },
    { path: "/reference", title: "Reference", Component: Reference },
    { path: "/memeGenerator", title: "MemeGenerator", Component: MemeGenerator }
  ];
  