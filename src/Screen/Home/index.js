import React, { Component } from 'react';
import CourseItem from '../../Components/CourseItems';
import Pagination from '../../Layouts/Pagination';
import { fetchCourses } from '../../Redux/Actions/course';
import { connect } from 'react-redux';

class HomeScreen extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentPage: 1,
    };
  }
  _renderCourseList = (pageIndex) => {
    let pageCourse = [];
    let pageId = pageIndex;
    
    if(pageId){
      this.setState({
        currentPage: pageId,
      })
    }
    
    let pageItem = 2;
    
    // if (!currentPage) {
    //   for (let i = 0; i < 2; i++) {
    //     let course = this.props.courseList[i];
    //     pageCourse.push(
    //     <div className="col-3 p-2">
    //       <CourseItem item={course}/>
    //     </div>
    //     )
    //   }
    //   return pageCourse;
    // } else {
      let firstItem = (this.state.currentPage - 1) * pageItem;
      let lastItem = this.state.currentPage * pageItem;
      if(lastItem > this.props.courseList.length){
        lastItem = this.props.courseList.length;
      }
      for(let i = firstItem; i < lastItem; i++){
        let course = this.props.courseList[i];
        pageCourse.push(
          <div className="col-3 p-2">
            <CourseItem item={course}/>
          </div>
          )
      // }
      return pageCourse;
    }
    // return this.props.courseList.map((item, index) => {
    //   return (
    //     <div key={index} className="col-3 p-2">
    //       <CourseItem item={item}/>
    //     </div>
    //   )
    // })
  }

  // _changePage = (pageId) => {
  //   let id = pageId;
  //   this._renderCourseList(id);
  // }

  render() {
    return (
      <div>
        <h1 className="display- text-center">Danh sách khóa học</h1>
        <div className="container">
          <div className="row">
            {this._renderCourseList()}
            {/* {this.props.courseList.map((item, index) => (
              <div key={index} className="col-3 p-2">
                <CourseItem item={item} />
              </div>
            ))} */}
          </div>
          <div className="text-center">
            <Pagination itemList={this.props.courseList} reRender={this._renderCourseList}/>
          </div>
        </div>
      </div>
    )
  }
  componentDidMount() {
    this.props.dispatch(fetchCourses())
  }
}

const mapStateToProps = (state) => ({
  courseList: state.course.courses
});

export default connect(mapStateToProps, null)(HomeScreen);
