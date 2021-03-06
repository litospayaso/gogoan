import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '@pages/home/home.component';
import { ExercisesComponent } from '@pages/exercises/exercises.component';
import { DiccionarioComponent } from '@pages/diccionario/diccionario.component';
import { LessonComponent } from '@pages/lesson/lesson.component';
import { AboutComponent } from '@pages/about/about.component';
import { SearchComponent } from '@pages/search/search.component';
import { EvaluationComponent } from '@pages/evaluation/evaluation.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'exercises',
    component: ExercisesComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'diccionario',
    component: DiccionarioComponent,
  },
  {
    path: 'lesson/:id',
    component: LessonComponent,
  },
  {
    path: 'evaluation/:id',
  component: EvaluationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
