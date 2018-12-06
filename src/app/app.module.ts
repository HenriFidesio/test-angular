// core
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// material
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
// app
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// components
import { ListPostsComp } from '@components';
// pages
import { ListPage, DetailPage } from '@pages';

@NgModule({
    declarations: [
        // app
        AppComponent,
        // components
        ListPostsComp,
        // pages
        ListPage,
        DetailPage,
    ],
    imports: [
        // core
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        // material
        MatCardModule,
        MatButtonModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatFormFieldModule,
        MatInputModule,
        // app
        AppRoutingModule,
    ],
    providers: [
        HttpClientModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
