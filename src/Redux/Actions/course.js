import { courseService } from "../../Services";
import { createAction } from ".";
import { FETCH_COURSES, FETCH_COURSE_DETAIL } from "./type";

// async action 
export const fetchCourses = () => {
  return (dispatch) => {
    courseService.fetchCourses()
    .then((res) => {
      dispatch(createAction(FETCH_COURSES, res.data))
    }).catch((err) => {
      console.log(err)
    });
  }
}

export const fetchDetailCourse = (id) => {
  return dispatch => {
    courseService.fetchCourseDetail(id)
    .then(res => {
      dispatch(createAction(FETCH_COURSE_DETAIL, res.data))
    }).catch(err => {
      console.log(err);
    })
  }
}