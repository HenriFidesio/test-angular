// core
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// pages
import { ListPage } from '@pages';


const routes: Routes = [
    { 
        path: '',
        redirectTo: '/list',
        pathMatch: 'full',
    },
    {
        path: 'list',
        component: ListPage,
    },
    // {
    //     path: '**',
    //     component: NotFoundPage,
    // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
