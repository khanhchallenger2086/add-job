import React, { Component } from "react";
import TableItem from "./TableItem";
import { connect } from "react-redux";


class TableList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterStatus: '1',
            filterName: ''
        }
    }

    onHandleChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;

        this.props.onFilter(
            name === 'filterStatus'  ? value : this.state.filterStatus,
            name === 'filterName'  ? value : this.state.filterName,
        )

        this.setState({
            [name] : value
        })


    }

    render() {
        var { tasks } = this.props
        var elementsItem = tasks.map((item, index) => {
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
                            <td><input type="text" name="filterName" value={ this.state.filterName }  className="form-control" onChange={ this.onHandleChange }/></td>
                            <td>
                                <select name="filterStatus" value={ this.state.filterStatus }  className="form-control" onChange={ this.onHandleChange }>
                                    <option value="all">Tất cả</option>
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

const mapStateToProps = (state) => {
    return {
        tasks : state.task
    }
}


export default connect(mapStateToProps,null)(TableList);
