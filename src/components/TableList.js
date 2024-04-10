import React, { Component } from "react";
import TableItem from "./TableItem";


class TableList extends Component {
    constructor(props) {
        super(props);
    }


    onFilter = (event) => {
        this.props.onFilter(event.target.value)
    }

    onFilterInput = (event) => {
        this.props.onFilterInput(event.target.value)
    }



    render() {
        var { data } = this.props
        var elementsItem = data.map((item, index) => {
            return <TableItem key={index}
                item={item}
                index={index} 
                onDelete = { this.props.onDelete }
                />
        })
        return (
            <div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Tên</th>
                            <th scope="col">Trạng thái</th>
                            <th scope="col">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"></th>
                            <td><input type="text" name="" id="" className="form-control" onChange={ this.onFilterInput }/></td>
                            <td>
                                <select name="filter"  className="form-control" onChange={ this.onFilter }>
                                    <option value="1">Kích hoạt</option>
                                    <option value="2">Ẩn</option>
                                </select>
                            </td>
                        </tr>

                        {elementsItem}

                    </tbody>
                </table>
            </div>
        );
    }
}

export default TableList;
