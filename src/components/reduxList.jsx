import React, { Component } from 'react'
import { getAll,remove } from '../stateManagement/actions/productActions'
import { connect } from 'react-redux'


const reduxList = (props) => {
  return (
    <div>
      <h1>reduxList</h1>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>reduxName</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.reduxName}</td>
              <td>{item.price}</td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => props.removeRedux(item.id)}>Delete</button>
              </td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  );
};




//mapStateToProps => وصل کردن استیت داخل استور به یک پراپرتی  و خواندن اطلاعات
const mapStateToProps = (state) => ({
  products: state.productState.items,
});


//برای نوشتن و تغییر در ریداکس
const mapDispatchToProps = dispatch => {
  return{
    removeRedux: (id) => dispatch(remove(id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(reduxList);
