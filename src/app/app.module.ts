// core
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// material
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
// app
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// components
import { ListPostsComp } from '@components';
// pages
import { ListPage } from '@pages';

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
        // core
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        // material
        MatListModule,
        MatCardModule,
        // app
        AppRoutingModule,
    ],
    providers: [
        HttpClientModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
