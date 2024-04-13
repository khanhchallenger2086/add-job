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
        this.props.addJob(this.state.name,this.state.status);
        this.onHandleClear();
    }

    onHandleChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value =  target.name === 'status' ? target.value === 'true' ?  true : false : target.value 
        this.setState({
            [ name ] : value
        })
    }

    onHandleClear = () => {
        this.setState({
            name: "",
            status: true
        })
    }

    onCloseForm = () => {
        this.props.onCloseForm(false);
    }
 
    render() {
        return (
            <div>
                <form onSubmit={ this.onSubmit }>
                    <p onClick={this.onCloseForm}  className="btn-close float-end" aria-label="Close"></p>
                    <h3 className="text-center  text-left"></h3>
                    <div className="add-job">
                       Name:
                        <input type="text" name="name" placeholder="Tên " value={ this.state.name } className="form-control mt-2" onChange={ this.onHandleChange }/>
                        Job:
                        <select name="status"  className="form-control mt-2" value={ this.state.status } onChange={ this.onHandleChange }>
                            <option value={true}>Kích hoạt</option>
                            <option value={false}>Ẩn</option>
                        </select>
                        <button type="submit" className="btn btn-primary mt-2 " >Lưu lại</button>
                        <a className="btn btn-danger mt-2 ms-2"  onClick={ this.onHandleClear }>Huỷ bỏ</a>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddJob;
