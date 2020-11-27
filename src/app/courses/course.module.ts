import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { StarModule } from '../shared/components/star/star.module';
import { AppPipeModule } from '../shared/pipe/app-pipe.module';
import { CourseInfoComponent } from './course-info.component';
import { CourseListComponent } from './course-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CourseListComponent,
    CourseInfoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    StarModule,
    AppPipeModule,
    RouterModule.forChild([
      {
        path:'course',component: CourseListComponent
      },
      {
        path:'course/info/:id', component: CourseInfoComponent
      }
    ])
    ]
})

export class CourseModule {

}