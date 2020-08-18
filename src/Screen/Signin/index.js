import React, { Component } from 'react';
import { Form, Formik, Field } from 'formik';
import { connect } from 'react-redux';
import { login } from '../../Redux/Actions/user';

class SigninScreen extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          taiKhoan: "",
          matKhau: "",
        }}
        onSubmit={(values) => {
          console.log(values)
          this.props.dispatch(login(values))
        }}
        render={({ handleChange }) => (
          <Form className="w-50 mx-auto">
            <h1>Đăng nhập</h1>
            <div className="form-group">
              <label htmlFor="">Tài khoản</label>
              <Field type="text" name="taiKhoan" onChange={handleChange} className="form-control" />
            </div>

            <div className="form-group">
              <label htmlFor="">Mật khẩu</label>
              <Field type="password" name="matKhau" onChange={handleChange} className="form-control" />
            </div>
            <div className="text-center">
              <button className="btn btn-success">Đăng nhập</button>
            </div>
          </Form>)
        }
      />
    )
  }
}

export default connect()(SigninScreen);