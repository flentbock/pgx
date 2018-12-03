import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import {RouterModule, Routes} from '@angular/router';
import { AboutComponent } from './about/about.component';
import {HttpClientModule} from '@angular/common/http';
import {ContactsService} from '../Services/Contacts.service';
import {FormsModule} from '@angular/forms';
import { NewContactComponent } from './new-contact/new-contact.component';
import { NewContactV2Component } from './new-contact-v2/new-contact-v2.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { LoginComponent } from './login/login.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { RegistrationComponent } from './registration/registration.component';
import { TasksComponent } from './tasks/tasks.component';
import {AuthenticationService} from '../Services/authentication.service';
import { ProduitComponent } from './produit/produit.component';
import {ProduitsService} from '../Services/Produits.service';
import { ProduitEditComponent } from './produit-edit/produit-edit.component';

  const appRoutes: Routes = [
    {path: 'about', component: AboutComponent},
    {path: 'contacts', component: ContactsComponent},
    {path: 'new-contact', component: NewContactComponent},
    {path: 'new-contact-v2', component: NewContactV2Component},
    {path: 'edit-contact/:id', component: EditContactComponent},
    {path: 'formations', component: EtudiantsComponent},
    {path: 'tasks', component: TasksComponent},
    {path: 'tasks', component: NewTaskComponent},
    {path: 'produits', component: ProduitComponent},
    {path: 'produit-edit/:id', component: ProduitEditComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registration', component: RegistrationComponent},
    {path: '', redirectTo: '/login', pathMatch: 'full'}
  ];

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AboutComponent,
    NewContactComponent,
    NewContactV2Component,
    EditContactComponent,
    EtudiantsComponent,
    LoginComponent,
    NewTaskComponent,
    RegistrationComponent,
    TasksComponent,
    ProduitComponent,
    ProduitEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ContactsService,
    ProduitsService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
