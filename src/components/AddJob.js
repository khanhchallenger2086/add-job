import React, { Component } from "react";


class AddJob extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            status: true,
		}
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.addJob(this.state.name,this.state.status)
    }

    onHandleChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value =  target.name === 'status' ? target.value === 'true' ?  true : false : target.value 
        this.setState({
            [ name ] : value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={ this.onSubmit }>
                    <h3 className="text-center  text-left">Thêm công việc</h3>
                    <div className="add-job">
                        Tên:
                        <input type="text" name="name" placeholder="Tên công việc" className="form-control mt-2" onChange={ this.onHandleChange }/>
                        Công việc:
                        <select name="status"  className="form-control mt-2" onChange={ this.onHandleChange }>
                            <option value={true}>Kích hoạt</option>
                            <option value={false}>Ẩn</option>
                        </select>
                        <button type="submit" className="btn btn-primary mt-2 ">Lưu lại</button>
                        <button className="btn btn-danger mt-2 ms-2">Huỷ bỏ</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddJob;
