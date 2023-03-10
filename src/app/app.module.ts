import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './administrator/main/main.component';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { EmploymentsComponent } from './administrator/employments/employments.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EmployaddComponent } from './administrator/employadd/employadd.component';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';


const routes: Routes =[
      {
        path:'home', component:EmploymentsComponent
      },
      {
        path:'add', component:EmployaddComponent
      },
      { path: '**', redirectTo: 'home' }
    ]

@NgModule({
  declarations: [
    MainComponent,
    EmploymentsComponent,
    EmployaddComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot(routes),
    MatTableModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { 
  
}
