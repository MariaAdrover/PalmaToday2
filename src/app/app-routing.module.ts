import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NewsPreviewPageComponent } from './pages/news-preview-page/news-preview-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full',
  },
  {
    path: 'newsPreview',
    component: NewsPreviewPageComponent,
  },
  {
    path: 'new',
    component: NewPageComponent,
  },
  {
    // Cambiar a new-page
    path: 'newsPreview/:source',
    // Cambiar a new-page
    component: NewsPreviewPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
