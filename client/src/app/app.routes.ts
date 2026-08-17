import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Home as homeLayout } from './layout/home/home';
import { About as aboutLayout } from './layout/about/about';
import { Skills as skillsLayout} from './layout/skills/skills';
import { Projects as projectsLayout } from './layout/projects/projects';
import { Education as educationLayout } from './layout/education/education';
import { Admin } from './admin/admin';
import {Home } from './admin/home/home';
import { About } from './admin/about/about';
import { Skills } from './admin/skills/skills';
import { Projects } from './admin/projects/projects';
import { Education } from './admin/education/education';
import { Dashboard } from './admin/dashboard/dashboard';

export const routes: Routes = [
    { path: '', component: Layout, children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: homeLayout },
        { path: 'about', component: aboutLayout },
        { path: 'skills', component: skillsLayout },
        { path: 'projects', component: projectsLayout },
        { path: 'education', component: educationLayout },
    ]},
    { path: 'admin', component: Admin, children: [
        { path: '', redirectTo: 'home-admin', pathMatch: 'full' },
        { path: 'home-admin', component: Home },
        { path: 'about-admin', component: About },
        { path: 'skills-admin', component: Skills },
        { path: 'projects-admin', component: Projects },
        { path: 'education-admin', component: Education },
        { path: 'dashboard', component: Dashboard },
    ]}
];
