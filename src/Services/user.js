import Axios from 'axios';
import * as yup from 'yup';

export const signupUserSchema = yup.object().shape({
  taiKhoan: yup.string().required('*Field is required!'),
  matKhau: yup.string().required('*Field is required!'),
  hoTen: yup.string().required('*Field is required!'),
  email: yup.string().required('*Field is required!').email('*Filled email is invalid'),
  soDT: yup.string().required('*Field is required!').matches(/^[0-9]+$/),
  maNhom: yup.string().required('*Field is required!'),
})

class UserService {
  signup(data){
    return Axios({
      method: "POST",
      url: "http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      data
    });
  }
  signIn(user){
    return Axios({
      method: "POST",
      url: "http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data: user,
    });
  }
}

export default UserService;