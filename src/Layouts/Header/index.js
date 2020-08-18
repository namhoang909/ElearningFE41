import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../../Assets/images/logo-cybersoft.png';
import classes from './style.module.css';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-warning mb-3 text-white">
        <a className="navbar-brand" href="#"><img className={classes.logo} src={Logo} alt="website-logo" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink exact to="/" activeStyle={{ color: 'white' }} className="nav-link">Trang chủ</NavLink>
            </li>
          </ul>
          <ul className="navbar-nav">
            {this.props.credentials ? (
              <li className="nav-item">
                <span className="nav-link">Hi, {this.props.credentials.hoTen}</span>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink to="/signup" activeStyle={{ color: 'white' }} className="nav-link">Đăng ký</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/signin" activeStyle={{ color: 'white' }} className="nav-link">Đăng nhập</NavLink>
                </li>
              </>
              )}
          </ul>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = state => {
  return {
    credentials: state.user.credentials,
  }
}
export default connect(mapStateToProps, null)(Header);