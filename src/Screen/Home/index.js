import React, { Component } from 'react'
import CourseItem from '../../Components/CourseItems'
import { fetchCourses } from '../../Redux/Actions/course';
import { connect } from 'react-redux';

class HomeScreen extends Component {
  render() {
    return (
      <div>
        <h1 className="display- text-center">Danh sách khóa học</h1>
        <div className="container">
          <div className="row">
            {this.props.courseList.map((item, index) => (
              <div key={index} className="col-3 p-2">
                <CourseItem item={item}/>
              </div>
            ))}
            
          </div>
        </div>
      </div>
    )
  }
  componentDidMount(){
    this.props.dispatch(fetchCourses())
  }
}

const mapStateToProps = (state) => ({
  courseList: state.course.courses
});

export default connect(mapStateToProps, null)(HomeScreen);
