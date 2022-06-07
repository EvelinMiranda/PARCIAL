import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'recuperar-contrasena',
    loadChildren: () => import('./recuperar-contrasena/recuperar-contrasena.module').then( m => m.RecuperarContrasenaPageModule)
  },
  {
    path: 'registro-producto',
    loadChildren: () => import('./registro-producto/registro-producto.module').then( m => m.RegistroProductoPageModule)
  },
  {
    path: 'registro-proveedor',
    loadChildren: () => import('./registro-proveedor/registro-proveedor.module').then( m => m.RegistroProveedorPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'informe',
    loadChildren: () => import('./informe/informe.module').then( m => m.InformePageModule)
  },
  {
    path: 'consultar-producto',
    loadChildren: () => import('./consultar-producto/consultar-producto.module').then( m => m.ConsultarProductoPageModule)
  },
  {
    path: 'registrar-usuario',
    loadChildren: () => import('./registrar-usuario/registrar-usuario.module').then( m => m.RegistrarUsuarioPageModule)
  },
  {
    path: 'modificar-producto',
    loadChildren: () => import('./modificar-producto/modificar-producto.module').then( m => m.ModificarProductoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
