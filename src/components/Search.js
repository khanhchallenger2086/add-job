import React, { Component } from "react";


class Search extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nhập từ khoá" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">Tìm</button>
                </div>
            </div>
        );
    }
}

export default Search;
