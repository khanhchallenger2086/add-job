
function App() {
	return (
		<div>
			<div className="container">
				<div className="row">
					<h1 className="mb-5 mt-5 text-center">Quản lý công việc</h1>
					<hr />
					<div className="col-4">
						<h3 className="text-center  text-left">Thêm công việc</h3>
						<div className="add-job">
							Tên:
							<input type="text" name="" id="" placeholder="Tên công việc" className="form-control mt-2" />
							Công việc:
							<select name="" id="" className="form-control mt-2">
								<option value="">Kích hoạt</option>
								<option value="">Ẩn</option>
							</select>
							<button type="submit" className="btn btn-primary mt-2 ">Lưu lại</button>
							<button className="btn btn-danger mt-2 ms-2">Huỷ bỏ</button>
						</div>
					</div>

					<div className="col-8">
						<h3 type="button" className="btn btn-primary mt-2"> + Thêm công việc</h3>
						<h3 type="button" className="btn  ms-2 mt-2 bg-danger"> + Generate Data </h3>
						<div className="row">
							<div className="col-8">
								<div className="input-group mb-3">
									<input type="text" className="form-control" placeholder="Nhập từ khoá" aria-label="Recipient's username" aria-describedby="button-addon2" />
									<button className="btn btn-outline-secondary" type="button" id="button-addon2">Tìm</button>
								</div>
							</div>

							<div className="col-4">
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

							<div className="col-12">
								<table class="table table-bordered">
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
											<td><input type="text" name="" id="" className="form-control"/></td>
											<td>
												<select name="" id="" value="Tất cả" className="form-control">
													<option value="">Kích hoạt</option>
													<option value="">Ẩn</option>
												</select>
											</td>
										</tr>
										<tr>
											<th scope="row">1</th>
											<td>Jacob</td>
											<td><p className="badge bg-danger">Kích hoạt</p></td>
											<td> 
												<p className="btn btn-success">Sửa</p> 
												<p className="btn btn-danger ms-2">Xoá</p> 
											</td>
										</tr>

									</tbody>
								</table>
							</div>

						</div>

					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
