import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppStoreModule } from './user-edit/app-store.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactsService } from '../Services/Contacts.service';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthenticationService } from '../Services/authentication.service';
import { ProduitComponent } from './produit/produit.component';
import { ProduitsService } from '../Services/Produits.service';
import { ProduitEditComponent } from './produit-edit/produit-edit.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { FilterSelectPipe } from './produit/pipe/filter-select.pipe';
import { NavbarprivateComponent } from './components/navbarprivate/navbarprivate.component';
import { HomepublicComponent } from './homepublic/homepublic.component';
import { HomeprivateComponent } from './homeprivate/homeprivate.component';
import { NavbarpublicComponent } from './components/navbarpublic/navbarpublic.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from '../Services/authentication.guard';
import { MouvementstockComponent } from './mouvementstock/mouvementstock.component';
import { MouvementstockService } from '../Services/mouvementstock.service';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        LoginComponent,
        RegistrationComponent,
        ProduitComponent,
        ProduitEditComponent,
        UserEditComponent,
        FilterSelectPipe,
        NavbarprivateComponent,
        HomepublicComponent,
        HomeprivateComponent,
        NavbarpublicComponent,
        MouvementstockComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AppStoreModule,
        HttpClientModule,
        FormsModule,
        MaterialModule,
        BrowserAnimationsModule
    ],
    providers: [ContactsService, ProduitsService, MouvementstockService, AuthenticationService, AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {}
