import { Home } from './pages/Home';
import { Reference } from './pages/Reference';
import { ReactBasic } from './pages/ReactBasic';
import { ReactIntermediate } from './pages/ReactIntermediate';
import { ReactAdvanced } from './pages/ReactAdvanced';
import { MemeGenerator } from './pages/MemeGenerator';
import { Skeleton } from './pages/Skeleton';
import { ReactHookForm } from './pages/ReactHookForm';

export const routes = [
    { path: "/home", title: "Home", Component: Home },
    { path: "/reference", title: "Reference", Component: Reference },
    { path: "/reactBasic", title: "ReactBasic", Component: ReactBasic },
    { path: "/reactIntermediate", title: "ReactIntermediate", Component: ReactIntermediate },
    { path: "/reactAdvanced", title: "ReactAdvanced", Component: ReactAdvanced },
    { path: "/memeGenerator", title: "MemeGenerator", Component: MemeGenerator },
    { path: "/skeleton", title: "Skeleton", Component: Skeleton },
    { path: "/reacthookform", title: "ReactHookForm", Component: ReactHookForm }
  ];
  