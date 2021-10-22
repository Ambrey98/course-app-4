import { createAction, props } from "@ngrx/store";
import { Author } from "src/app/models/author";

export const requestAuthors = createAction(
  '[Authors] Request Authors'
);

export const requestAuthorsSuccess = createAction(
  '[Authors] Request Authors Success',
  props<{authors: Author[]}>()
);

export const requestAuthorsFail = createAction(
  '[Authors] Request Authors Fail',
  props<{message: string}>()
);

export const requestAddAuthor = createAction(
  '[Authors] Request Add Author',
  (author: Author) => author
);

export const requestAddAuthorSuccess = createAction(
  '[Authors] Request Add Author Success',
  props<{author: Author}>()
);

export const requestAddAuthorFail = createAction(
  '[Authors] Request Add Author Fail',
  props<{message: string}>()
);

export const resetAddedAuthor = createAction(
  '[Authors] Reset Added Author'
);