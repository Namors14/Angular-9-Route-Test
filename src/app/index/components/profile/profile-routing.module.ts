import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
    {
        path: '',
        component: ProfileComponent,
        children: [ ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [ ]
})
export class ProfileRoutingModule { }
