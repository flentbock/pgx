import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProduitComponent } from './produit/produit.component';
import { ProduitEditComponent } from './produit-edit/produit-edit.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomepublicComponent } from './homepublic/homepublic.component';
import { HomeprivateComponent } from './homeprivate/homeprivate.component';
import { AuthGuard } from '../Services/authentication.guard';
import { MouvementstockComponent } from './mouvementstock/mouvementstock.component';

const routes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'produits', component: ProduitComponent, canActivate: [AuthGuard] },
    {
        path: 'produit-edit/:id',
        component: ProduitEditComponent,
        canActivate: [AuthGuard]
    },
    { path: 'login', component: LoginComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'homepublic', component: HomepublicComponent },
    {
        path: 'homeprivate',
        component: HomeprivateComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'mouvementstock/:id',
        component: MouvementstockComponent,
        canActivate: [AuthGuard]
    },
    { path: '', component: HomepublicComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: '' }
    // {path: '', redirectTo: '/homepublic', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
