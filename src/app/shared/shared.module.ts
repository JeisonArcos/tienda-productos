import { NgModule } from "@angular/core";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from "@material/material.module";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    MaterialModule,
    RouterModule,
    FormsModule,
    CommonModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MaterialModule
  ],
})

export class SharedModule { }