import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CourseItem extends Component {
  render() {
    return (
      <div className="card p-2">
        <img src={this.props.item.hinhAnh} alt="" className="img-fluid" style={{width: "100%", height: 280}}/>
        <p className="lead">{this.props.item.tenKhoaHoc}</p>
        <p className="lead">Instructor: {this.props.item.nguoiTao.hoTen}</p>
        <p className="rating">Rating: 5.0</p>
        <Link to={`/detail/${this.props.item.maKhoaHoc}`} className="btn btn-success">Detail</Link>
      </div>
    )
  }
}
