import { IndexComponent } from "./index.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IndexRoutingModule } from "./index-routing.module";
import { DashboardModule } from './components/dashboard/dashboard.module';
import { ProfileModule } from './components/profile/profile.module';

@NgModule({
    imports: [
        CommonModule,
        IndexRoutingModule,
        DashboardModule,
        ProfileModule
    ],
    exports: [
        DashboardModule,
        ProfileModule
    ],
    declarations: [
        IndexComponent
    ],
    providers: [ ]
})
export class IndexModule { }
