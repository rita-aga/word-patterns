import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WordSearchComponent } from './word-search/word-search.component';
import { GlosbeResultsComponent } from './glosbe-results/glosbe-results.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatSelectModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatDividerModule,
  MatTableModule,
  MatSortModule } from '@angular/material';
import { MySentenceCollectionComponent } from './my-sentence-collection/my-sentence-collection.component';
import { NavComponent } from './nav/nav.component';

  const appRoutes: Routes = [
    {
      path: 'wordsearch',
      component: WordSearchComponent,
      data: { title: 'Find new sentences!' }
    },
    {
      path: 'mycollection',
      component: MySentenceCollectionComponent,
      data: { title: 'My sentences' }
    },
    { path: '',
      redirectTo: 'mycollection',
      pathMatch: 'full'
    }
  ];

@NgModule({
  declarations: [
    AppComponent,
    WordSearchComponent,
    GlosbeResultsComponent,
    MySentenceCollectionComponent,
    NavComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTableModule,
    MatSortModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
