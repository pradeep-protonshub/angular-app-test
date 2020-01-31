import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { JwPaginationComponent } from 'jw-angular-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent, DialogOverviewExampleDialog } from './app.component';
import { TestService } from './service/test.service';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import {NgxPaginationModule} from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateComponent } from './template/template.component';
import { HomeComponent } from './home/home.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
@NgModule({
  declarations: [
    AppComponent, DialogOverviewExampleDialog, FilterPipe, TemplateComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule
  ],
  providers: [TestService],
  bootstrap: [HomeComponent],
  entryComponents:[DialogOverviewExampleDialog]
})
export class AppModule { }
