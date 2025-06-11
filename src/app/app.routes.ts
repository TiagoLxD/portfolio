import { Routes } from '@angular/router'

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/hero-section/hero-section').then((m) => m.HeroSection),
        title: 'Página Inicial',
    },
    {
        path: '**',
        loadComponent: () => import('./pages/not-found/not-found.component').then((m) => m.NotFoundComponent),
        title: '404 - Not Found',
        data: { description: 'Página não encontrada' },
    },
]
