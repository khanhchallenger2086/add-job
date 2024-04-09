import React, { Component } from "react";


class TableList extends Component {
    constructor(props) {
        super(props);
    }

    onDelete = (index) => { 
        this.props.onDelete(index);
    }

    render() {
        var { item ,index } =  this.props 
        return (
                <tr>
                    <th scope="row">{ index }</th>
                    <td> { item.name } </td>
                    <td><p className={ item.status ? "badge bg-success text-center" : "badge bg-danger text-center" }>  { item.status ? "kích hoạt" : "ẩn" } </p></td>
                    <td>
                        <p className="btn btn-success">Sửa</p>
                        <p className="btn btn-danger ms-2" onClick={ () => this.onDelete(index) }>Xoá</p>
                    </td>
                </tr>
        );
    }
}

export default TableList;
