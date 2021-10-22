import { Action, createReducer, on } from "@ngrx/store";
import { Course } from "src/app/models/course";
import { requestAllCourses } from "./courses.actions";

export const coursesFeatureKey = 'courses';

export interface CoursesState {
  allCourses: Course[],
  courses: Course[],
  course: string,
  isAllCoursesLoading: boolean,
  isSingleCourseLoading: boolean,
  isSearchState: boolean,
  errorMessage: string
}

const initialState: CoursesState = {
  allCourses: [],
  courses: [],
  course: '',
  isAllCoursesLoading: false,
  isSingleCourseLoading: false,
  isSearchState: false,
  errorMessage: ''
}

const reducer = createReducer(
  initialState,
  on(requestAllCourses, (state) => ({...state}))
)

export const coursesReducer = (state: CoursesState, action: Action): CoursesState => reducer(state, action);