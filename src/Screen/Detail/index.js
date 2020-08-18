import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDetailCourse } from '../../Redux/Actions/course';

class CourseDetail extends Component {
  render() {
    return (
      <div>
        <img src={this.props.courseDetail.hinhAnh} alt=""/>
        <h3>{this.props.courseDetail.tenKhoaHoc}</h3>
      </div>
    )
  }

  componentDidMount () {
    this.props.dispatch(fetchDetailCourse(this.props.match.params.courseId));
  }
};

const mapStateToProps = (state) => ({
  courseDetail: state.course.courseDetail || {
    maKhoaHoc: '',
    tenKhoaHoc: '',
    hinhAnh: '',
    nguoiTao: {
      taiKhoan: '',
      hoTen: '',
    }
  }
})

export default connect(mapStateToProps, null)(CourseDetail);