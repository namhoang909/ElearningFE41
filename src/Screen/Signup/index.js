import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {userService} from "../../Services";
import { signupUserSchema } from '../../Services/user';


class SignupScreen extends Component {
  _handleSubmit = values => {
    userService.signup(values)
    .then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  };

  render() {
    return (
      <div className="w-50 mx-auto">
        <h1 className="display-4 text-center">Sign up</h1>
        <Formik
          initialValues={{
            taiKhoan: '',
            matKhau: '',
            hoTen: '',
            email: '',
            soDT: '',
            maNhom: 'GP01',
          }}
          validationSchema={signupUserSchema}
          onSubmit={this._handleSubmit}
          render={(formikProps) => (
            <Form action="">
              <div className="form-group">
                <label htmlFor="">Tài khoản:</label>
                <Field type="text" className="form-control" name="taiKhoan" onChange={formikProps.handleChange} />
                <ErrorMessage name="taiKhoan" />
              </div>
              <div className="form-group">
                <label htmlFor="">Mật khẩu:</label>
                <Field type="password" className="form-control" name="matKhau" onChange={formikProps.handleChange} />
                <ErrorMessage name="matKhau" />
              </div>
              <div className="form-group">
                <label htmlFor="">Họ tên:</label>
                <Field type="text" className="form-control" name="hoTen" onChange={formikProps.handleChange} />
                <ErrorMessage name="hoTen" />
              </div>
              <div className="form-group">
                <label htmlFor="">Email:</label>
                <Field type="email" className="form-control" name="email" onChange={formikProps.handleChange} />
                <ErrorMessage name="email" />
              </div>
              <div className="form-group">
                <label htmlFor="">Số điện thoại:</label>
                <Field type="text" className="form-control" name="soDT" onChange={formikProps.handleChange} />
                <ErrorMessage name="soDT">
                  {
                    (msg) => <div className="alert alert-danger">{msg}</div>
                  }
                </ErrorMessage>
              </div>
              <div className="form-group">
                <label htmlFor="">Mã nhóm:</label>
                <Field component="select" className="form-control" name="maNhom" onChange={formikProps.handleChange}>
                  <option value="GP01">GP01</option>
                  <option value="GP02">GP02</option>
                  <option value="GP03">GP03</option>
                  <option value="GP04">GP04</option>
                  <option value="GP05">GP05</option>
                  <option value="GP06">GP06</option>
                  <option value="GP07">GP07</option>
                  <option value="GP08">GP08</option>
                  <option value="GP09">GP09</option>
                  <option value="GP10">GP10</option>
                </Field>
                <ErrorMessage name="maNhom" />
              </div>
              <div className="text-center">
                <button className="btn btn-success">Submit</button>
              </div>
            </Form>
          )} />
      </div>
    )
  }
}

export default SignupScreen;