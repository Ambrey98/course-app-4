import { createSelector } from "@ngrx/store";
import { Course } from "src/app/models/course";
import { CoursesState } from "./courses.reducer";

export const isAllCoursesLoadingSelector = createSelector(
  (state: CoursesState) => (state.isAllCoursesLoading),
  (isAllCoursesLoading: boolean) => isAllCoursesLoading
);

export const isSearchingStateSelector = createSelector(
  (state: CoursesState) => (state.isSearchState),
  (isSearchState: boolean) => isSearchState
);

export const isSingleCourseLoadingSelector = createSelector(
  (state: CoursesState) => (state.isSingleCourseLoading),
  (isSingleCourseLoading: boolean) => isSingleCourseLoading
);

export const getCourses = createSelector(
  (state: CoursesState) => (state.courses),
  (courses: Course[]) => courses
);

export const getAllCourses = createSelector(
  (state: CoursesState) => (state.allCourses),
  (allCourses: Course[]) => allCourses
);

export const getCourse = createSelector(
  (state: CoursesState) => (state.course),
  (course: string) => course
);

export const getErrorMessage = createSelector(
  (state: CoursesState) => (state.errorMessage),
  (errorMessage: string) => errorMessage
);
