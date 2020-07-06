import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
    ],
    exports: [
    ],
    declarations: [ ],
    providers: [
        AuthGuard
    ]
})
export class CoreModule { }
