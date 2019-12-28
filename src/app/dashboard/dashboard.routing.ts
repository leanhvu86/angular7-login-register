import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from '../admin/home/home.component';
import { AuthGuardGuard } from '../shared/guards/AuthGuard/auth-guard.guard';

export const DashBoardRoutes: Routes = [
    {
        path: '',
        component: IndexComponent,
        children: [
            {
                path: '',
                redirectTo: 'index',
                pathMatch: 'full'
            },
            {
                path: 'index',
                component: IndexComponent
            },
            //     {
            //       path: 'addproduct',
            //       component: AddProductComponent
            //     },
            //     {
            //       path: 'register',
            //       component: RegisterComponent
            //     },
            //     {
            //         path: 'detail/:id',
            //         component: ProductDetailComponent
            //     },
        ]
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuardGuard]
    }
];
