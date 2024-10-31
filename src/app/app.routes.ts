import { Routes } from '@angular/router';
import { LoginComponent } from './pages/public/login/login.component';
import { RegisterComponent } from './pages/public/register/register.component';
import { EventoComponent } from './pages/public/evento/evento.component';
import { PerfilComponent } from './pages/private/perfil/perfil.component';
import { InicioComponent } from './pages/public/inicio/inicio.component';
import { PagenotfoundComponent } from './pages/public/pagenotfound/pagenotfound.component';
import { BusinessComponent } from './pages/public/business/business.component';


export const routes: Routes = [
    {
        path: "login",  component: LoginComponent  
    },
    {
        path: "register", component: RegisterComponent
    },
    {
        path: "home", component: InicioComponent
    },
    {
        path: "dashboard/profile", component: PerfilComponent
    },
    {
        path: "register/business", component: BusinessComponent
    },
    {
        path: "register/events", component: EventoComponent
    },
    {
        path: '', redirectTo: 'home', pathMatch:'full'
    },
    {
        path: '**', component:PagenotfoundComponent

    }
];
