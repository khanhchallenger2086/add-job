import React, { Component } from "react";


class Sort extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="dropdown">
                    <a className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" >
                        Sắp xếp
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Từ A - Z</a></li>
                        <li><a className="dropdown-item" href="#">Từ Z - A</a></li>
                        <li><a className="dropdown-item" href="#">Trạng thái kích hoạt</a></li>
                        <li><a className="dropdown-item" href="#">Trạng thái ẩn</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sort;
