import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'lobby',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'lobby',
    loadChildren: () => import('./lobby/lobby.module').then( m => m.LobbyPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'password',
    loadChildren: () => import('./password/password.module').then( m => m.PasswordPageModule)
  },
  {
    path: 'login-verification',
    loadChildren: () => import('./login-verification/login-verification.module').then( m => m.LoginVerificationPageModule)
  },
  {
    path: 'id-verification',
    loadChildren: () => import('./id-verification/id-verification.module').then( m => m.IdVerificationPageModule)
  },
  {
    path: 'product-simple',
    loadChildren: () => import('./product-simple/product-simple.module').then( m => m.ProductSimplePageModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./terms/terms.module').then( m => m.TermsPageModule)
  },
  {
    path: 'policy',
    loadChildren: () => import('./policy/policy.module').then( m => m.PolicyPageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./category/category.module').then( m => m.CategoryPageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'adults',
    loadChildren: () => import('./adults/adults.module').then( m => m.AdultsPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'address',
    loadChildren: () => import('./address/address.module').then( m => m.AddressPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'details-payment',
    loadChildren: () => import('./details-payment/details-payment.module').then( m => m.DetailsPaymentPageModule)
  },
  {
    path: 'otp-payment',
    loadChildren: () => import('./otp-payment/otp-payment.module').then( m => m.OtpPaymentPageModule)
  },
  {
    path: 'status-payment',
    loadChildren: () => import('./status-payment/status-payment.module').then( m => m.StatusPaymentPageModule)
  },
  {
    path: 'trinkegeld',
    loadChildren: () => import('./trinkegeld/trinkegeld.module').then( m => m.TrinkegeldPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
