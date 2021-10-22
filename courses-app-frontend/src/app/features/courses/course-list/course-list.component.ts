import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AuthStateFacade } from 'src/app/auth/store/auth.facade';
import { CoursesStoreService } from 'src/app/services/courses-store.service';
import { UserStoreService } from 'src/app/user/services/user-store.service';
import { UserService } from 'src/app/user/services/user.service';
import { UserStateFacade } from 'src/app/user/store/user.facade';
import { UserState } from 'src/app/user/store/user.reducer';
import { getName } from 'src/app/user/store/user.selectors';
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  @Input() courses: any[] = [];
  @Input() isEditable: boolean = false;
  editIcon = '<i class="fa fa-edit"></i>';
  deleteIcon = '<i class="fa fa-trash"></i>';

  constructor(private userStoreService: UserStoreService,
  private coursesStoreService: CoursesStoreService,
  private userStateFacade: UserStateFacade) {

    
  }

  ngOnInit(): void {
    this.userStateFacade.getCurrentUser();
    /*
    this.userStoreService.isAdmin$.subscribe(value => {
      this.isEditable = value;
    });
    this.userStoreService.getUser();
    */

    /*
   this.authStateFacade.isAuthorized$.subscribe(value => {
     console.log(value);
     this.isEditable = value;
   });
   */
   console.log(this.userStateFacade.isAdmin$);
   this.userStateFacade.isAdmin$.subscribe(val => {
   });

  }

  deleteCourse(courseId: string): void {
    this.coursesStoreService.deleteCourse(courseId);
    this.coursesStoreService.courses$.subscribe(val => {
      console.log('deleted');
      this.courses = (<any>val).result;
    });
    this.coursesStoreService.getAllCourses();
  }

}