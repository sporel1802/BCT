import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultComponent } from './result/result.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { FacultyComponent } from './faculty/faculty.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'results',component:ResultComponent},
  {path:'',component:HomeComponent},
  {path:'courses',component:CoursesComponent},
  {path:'faculty',component:FacultyComponent},
  {path:'contact',component:ContactComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
