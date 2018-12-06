// core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
// app
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// components
import { ListPostsComp } from './components';
// pages
import { ListPage } from './pages';

@NgModule({
    declarations: [
        // app
        AppComponent,
        // components
        ListPostsComp,
        // pages
        ListPage,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
    ],
    providers: [
        HttpClientModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
