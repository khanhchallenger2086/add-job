import React, { Component } from "react";


class TableList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var { item ,index} =  this.props 
        return (
                <tr>
                    <th scope="row">{ index }</th>
                    <td> { item.name } </td>
                    <td><p className={ item.status ? "badge bg-success text-center" : "badge bg-danger text-center" }>  { item.status ? "kích hoạt" : "ẩn" } </p></td>
                    <td>
                        <p className="btn btn-success">Sửa</p>
                        <p className="btn btn-danger ms-2">Xoá</p>
                    </td>
                </tr>
        );
    }
}

export default TableList;
