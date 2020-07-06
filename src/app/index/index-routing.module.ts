import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { IndexComponent } from './index.component';
import { AuthGuard } from '../core/guards/auth.guard';

const dashboardModule = () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule);
const profileModule = () => import('./components/profile/profile.module').then(m => m.ProfileModule);

const routes: Routes = [
    {
        path: '',
        component: IndexComponent,
        canActivate: [
            AuthGuard
        ],
        children: [
            {
                path: '',
                loadChildren: dashboardModule
            },
            {
                path: 'profile',
                loadChildren: profileModule
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [ ]
})
export class IndexRoutingModule { }
