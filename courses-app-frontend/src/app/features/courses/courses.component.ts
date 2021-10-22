import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/auth.service';
import { AuthStateFacade } from 'src/app/auth/store/auth.facade';
import { AuthState } from 'src/app/auth/store/auth.reducer';
import { isUserAuthorized } from 'src/app/auth/store/auth.selectors';
import { CoursesStoreService } from 'src/app/services/courses-store.service';
import { UserStoreService } from 'src/app/user/services/user-store.service';
import { UserService } from 'src/app/user/services/user.service';
import { UserStateFacade } from 'src/app/user/store/user.facade';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: any = {};
  confirmModalHidden: boolean = true;
  buttonText:string = 'Show modal';
  username: string = '';

  constructor(private coursesStoreService: CoursesStoreService,
              private userStateFacade: UserStateFacade,
              private authStateFacade: AuthStateFacade,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.coursesStoreService.courses$.pipe(map(val => {
    return this.courses = (<any>val).result;
    })).subscribe();
    this.coursesStoreService.getAllCourses();

    /*
    this.userStoreService.name$.subscribe(uname => {
      console.log(uname);
      this.username = uname;
    })
    */
   //this.userStoreService.getUser();
   /*
   this.userStateFacade.name$.subscribe(name => {
     console.log(name);
   })
   */

  this.authStateFacade.getToken$.subscribe(val => {
    console.log(val);
  })


  }

  onLogoutBtn() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
