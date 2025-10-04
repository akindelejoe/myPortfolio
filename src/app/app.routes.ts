import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing';
import { AboutComponent } from './pages/about/about';
import { ResumeComponent } from './pages/resume/resume';
import { ProjectsComponent } from './pages/projects/projects'
import { NotFoundComponent } from './pages/not-found/not-found'



export const routes: Routes = [
    {path: '', component: LandingComponent },
    {path: 'about', component: AboutComponent },
    {path: 'resume', component: ResumeComponent },
    {path: 'projects', component: ProjectsComponent },
    {path: '**', component: NotFoundComponent }

];