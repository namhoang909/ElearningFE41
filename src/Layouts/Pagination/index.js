import React, { Component } from 'react'

export default class Pagination extends Component {
  
  _renderPage = () => {
    let { itemList, reRender } = this.props;
    let itemAmnt = itemList.length;
    let pageItem = 2;
    let pageNum = Math.ceil(itemAmnt / pageItem);
    let currentPage = 1;
    let pageList = [];
    for (let i = currentPage; i <= pageNum; i++) {
      pageList.push(<li className="d-inline px-1"><a href="" onClick={()=>reRender(i)}>{i}</a></li>);
    }
    return pageList;
  }

  render() {
    return (
      <div className="mx-auto">
        <ul style={{ listStyleType: "none" }}>
          {this._renderPage()}
        </ul>
      </div>
    )
  }
}
