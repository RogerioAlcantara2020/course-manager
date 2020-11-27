import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
    templateUrl: './course-info.component.html'
})

export class CourseInfoComponent implements OnInit {

    course: number = 0;

    constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) { }

    ngOnInit(): void {

        // this.courseId =+this.activatedRoute.params.subscribe((params)=>{
        //     this.courseId =+params.get('id')
        // })
        //   parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
         this.courseService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe({
             next: course => this.course = course,
             error: err => console.log('Error', err)
         });

    }
    save(): void {
        this.courseService.save(this.course).subscribe({
            next: course =>console.log('Saved with success', course),
            error: err => console.log('Error', err)
        });
    }
}