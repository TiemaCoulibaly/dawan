import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import de from '@angular/common/locales/de';
import ja from '@angular/common/locales/ja';

registerLocaleData(fr);
registerLocaleData(de);
registerLocaleData(ja);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { TodoComponent } from './components/todo/todo.component';
import { HomeComponent } from './components/home/home.component';
import { FiltreComponent } from './components/filtre/filtre.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { LocaleComponent } from './components/locale/locale.component';
import { SortPipe } from './pipes/sort/sort.pipe';
import { CustomPipeComponent } from './components/custom-pipe/custom-pipe.component';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    TodoComponent,
    HomeComponent,
    FiltreComponent,
    DirectiveComponent,
    LocaleComponent,
    SortPipe,
    CustomPipeComponent,
    FormulaireComponent,
    SignupComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' }, // DEFAULT_CURRENCY_CODE Angular 9
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
