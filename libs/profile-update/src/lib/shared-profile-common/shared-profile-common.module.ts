import { NgModule } from '@angular/core';
import {LinksComponent} from './links/links.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    RouterModule
  ],
  exports: [
    LinksComponent
  ],
  declarations: [LinksComponent]
})
export class SharedProfileCommonModule {}
