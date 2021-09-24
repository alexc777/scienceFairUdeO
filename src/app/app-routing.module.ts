import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [

  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'proyectos', loadChildren: () => import('./pages/list-projects/list-projects.module').then(m => m.ListProjectsModule) },
      { path: 'proyectos/:slug', loadChildren: () => import('./pages/detail-project/detail-project.module').then(m => m.DetailProjectModule) },
      { path: 'metricas', loadChildren: () => import('./pages/report-projects/report-projects.module').then(m => m.ReportProjectsModule) },
      { path: 'equipo', loadChildren: () => import('./pages/team/team.module').then(m => m.TeamModule) },

      { path: '', redirectTo: 'proyectos', pathMatch: 'full' },
    ]
  },

  { path: 'landing', loadChildren: () => import('./public/landing/landing.module').then(m => m.LandingModule) },

  { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
  { path: 'adminmembers', loadChildren: () => import('./auth/members/members.module').then(m => m.MembersModule) },
  { path: 'adminprojects', loadChildren: () => import('./auth/projects/projects.module').then(m => m.ProjectsModule) },

  { path: '**', loadChildren: () => import('./errors/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
