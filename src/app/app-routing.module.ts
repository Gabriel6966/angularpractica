import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CubosComponent } from './components/cubos/cubos.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ComprarComponent } from './components/comprar/comprar.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path:"",component:HomeComponent
  },
  {
    path:"cubos/:marca",component:CubosComponent
  },
  {
    path:"detalles/:id",component:DetallesComponent
  },
  {
    path:"login", component:LoginComponent
  },
  {
    path:"perfil",component:PerfilComponent,
  },
  {
    path:"comprar", component:ComprarComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
