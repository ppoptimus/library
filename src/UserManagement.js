import { useState, useEffect } from "react"
import { Modal, Button, Form, Row, Col, Card } from "react-bootstrap"
import Image from "react-bootstrap/Image"
import axios from "axios"

export default function UserManagement() {
	const [testData, settestData] = useState([
		{
			user_id: "1234567890123",
			username: "rathapong.p",
			first_name: "rathapong",
			last_name: "pumpo",
			section: "Department",
			sub_section1: "Department1",
			sub_section2: "Department2",
			expiry_date: "2022-10-12",
			birth_date: "1998-02-12",
			gender: "M",
			address: "1234/99 address01",
			tel: "191",
			email: "rathapong.pumpo@mail.com",
		},
	])
	const [dataById, setDataById] = useState([])
	const [show, setShow] = useState(false)
	const handleClose = () => setShow(false)

	const [radioValue, setRadioValue] = useState("1")

	const radios = [
		{ name: "male", value: "1" },
		{ name: "female", value: "2" },
	]

	useEffect(() => {
		let reqOptions = {
			url: "https://jsonplaceholder.typicode.com/todos",
			method: "GET",
		}

		// axios.request(reqOptions).then(function (response) {
		// 	settestData(response.data)
		// })
	}, [])

	const onClickEdit = (user_id) => {
		let newItem = testData.find((x) => x.user_id === user_id)
		setDataById(newItem)
		setShow(true)
		// console.log(newItem)
	}

	const handleChange = (name) => (e) => {
		setDataById({ ...dataById, [name]: e.target.value })
		console.log(name, e.target.value)
	}

	return (
		<>
			<style jsx='true'>
				{`
					.wrappers {
						display: inline-flex;
						background: #fff;
						height: 40px;
						align-items: center;
						justify-content: space-evenly;
						border-radius: 5px;
						padding: 2px 2px;
					}
					.wrappers .option {
						background: #fff;
						height: 100%;
						width: 100%;
						display: flex;
						align-items: center;
						justify-content: space-evenly;
						margin: 0;
						cursor: pointer;
						padding: 0 5px;
						border: 1px solid lightgrey;
						transition: all 0.3s ease;
					}
					.wrappers .option .dot {
						height: 20px;
						width: 20px;
						background: #fff;
						border-radius: 50%;
						position: relative;
						border: 1px solid grey;
					}
					.wrappers .option .dot::before {
						position: absolute;
						content: "";
						top: 4px;
						left: 4px;
						width: 10px;
						height: 10px;
						background: #17a2b8;
						border-radius: 50%;
						opacity: 0;
						transform: scale(1.5);
						transition: all 0.3s ease;
					}
					input[type="radio"] {
						display: none;
					}
					#option-1:checked:checked ~ .option-1,
					#option-2:checked:checked ~ .option-2 {
						border-color: #17a2b8;
						background: #17a2b8;
					}
					#option-1:checked:checked ~ .option-1 .dot,
					#option-2:checked:checked ~ .option-2 .dot {
						background: #fff;
					}
					#option-1:checked:checked ~ .option-1 .dot::before,
					#option-2:checked:checked ~ .option-2 .dot::before {
						opacity: 1;
						transform: scale(1);
					}
					.wrappers .option span {
						font-size: 16px;
						color: #808080;
					}
					#option-1:checked:checked ~ .option-1 span,
					#option-2:checked:checked ~ .option-2 span {
						color: #fff;
					}
				`}
			</style>
			<div className='container'></div>
			<div className='card mb-3'>
				<div className='card-header bg-dark h5'>ข้อมูลสมาชิก</div>
				<div className='card-body'>
					<table className='table table-striped'>
						<thead>
							<tr>
								<th>ชื่อ - นามสกุล</th>
								<th>รหัสสมาชิก</th>
								<th>กลุ่ม</th>
								<th>วันหมดอายุ</th>
								<th>แก้ไข</th>
							</tr>
						</thead>
						<tbody>
							{testData
								? testData.map((i) => (
										<tr key={i.user_id}>
											<td>
												{i.first_name} {i.last_name}
											</td>
											<td>{i.user_id}</td>
											<td>{i.section}</td>
											<td>{i.expiry_date}</td>
											<td>
												<button className='btn' type='button' onClick={() => onClickEdit(i.user_id)}>
													<i className='fas fa-edit'></i>
												</button>
											</td>
										</tr>
								  ))
								: ""}
						</tbody>
					</table>
				</div>
			</div>

			{/* Modal Edit */}
			<Modal size='lg' show={show} onHide={handleClose}>
				<Modal.Header className='bg-gradient-secondary py-1 px-3'>
					<Modal.Title>
						<span className='h5'>แก้ไขข้อมูลสมาชิก</span>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form className='justify-content-center align-items-center bg-light'>
						<Form.Group className='shadow p-3 mb-4'>
							<Row className='mb-4 bg'>
								<Col className='col-4'>
									<Form.Label className='form-label'>รหัสสมาชิก</Form.Label>
									<Form.Control
										type='text'
										className='form-control'
										value={dataById.user_id ? dataById.user_id : ""}
										onChange={handleChange}
									/>
								</Col>
								<Col className='col-4'>
									<Form.Label className='form-label'>ชื่อผู้ใช้งาน</Form.Label>
									<Form.Control
										type='text'
										className='form-control'
										value={dataById.username ? dataById.username : ""}
										onChange={handleChange}
									/>
								</Col>
								<Col className='col-4'>
									<Form.Label className='form-label'>ชื่อ - นามสกุล</Form.Label>
									<Form.Control
										type='text'
										className='form-control'
										value={
											`${dataById.first_name} ${dataById.last_name}`
												? `${dataById.first_name} ${dataById.last_name}`
												: ""
										}
										onChange={handleChange}
									/>
								</Col>
							</Row>
							<Row className='mb-4'>
								<Col className='col-4'>
									<Form.Label className='form-label'>กลุ่ม</Form.Label>
									<Form.Control
										type='text'
										className='form-control'
										value={dataById.section ? dataById.section : ""}
										onChange={handleChange}
									/>
								</Col>
								<Col className='col-4'>
									<Form.Label className='form-label'>กลุ่มย่อย 1</Form.Label>
									<Form.Control
										type='text'
										className='form-control'
										value={dataById.section1 ? dataById.section1 : ""}
										onChange={handleChange}
									/>
								</Col>
								<Col className='col-4'>
									<Form.Label className='form-label'>กลุ่มย่อย 2</Form.Label>
									<Form.Control
										type='text'
										className='form-control'
										value={dataById.section2 ? dataById.section2 : ""}
										onChange={handleChange}
									/>
								</Col>
							</Row>
							<Row className='mb-4 align-items-end'>
								<Col className='col-3'>
									<Form.Label className='form-label'>วันหมดอายุบัตร</Form.Label>
									<Form.Control
										type='date'
										className='form-control p-2'
										value={dataById.expiry_date ? dataById.expiry_date : ""}
										onChange={handleChange("expiry_date")}
									/>
								</Col>
							</Row>
						</Form.Group>

						<Form.Group className='shadow p-3 d-flex justify-content-between' id='form-personal'>
							<Col className='col-7' id='input-personal'>
								<Row className='mb-4'>
									<Col className='col-6'>
										<Form.Label className='form-label'>วันเกิด</Form.Label>
										<Form.Control
											type='date'
											className='form-control p-2'
											value={dataById.birth_date ? dataById.birth_date : ""}
											onChange={handleChange("birth_date")}
										/>
									</Col>
									<Col className='col-6 d-flex flex-column'>
										<Form.Label className='form-label'>เพศ</Form.Label>
										<div className='wrappers'>
											<Form.Control type='radio' name='select' id='option-1' defaultChecked />
											<Form.Control type='radio' name='select' id='option-2' />
											<Form.Label htmlFor='option-1' className='option option-1'>
												<div className='dot mr-1' />
												<span>ชาย</span>
											</Form.Label>
											<Form.Label htmlFor='option-2' className='option option-2'>
												<div className='dot mr-1' />
												<span>หญิง</span>
											</Form.Label>
										</div>
									</Col>
								</Row>
								<Row className='mb-4'>
									<Col className='col-12'>
										<Form.Label className='form-label'>ที่อยู่</Form.Label>
										<Form.Control
											type='text'
											className='form-control'
											value={dataById.section2 ? dataById.section2 : ""}
											onChange={handleChange}
										/>
									</Col>
								</Row>
								<Row className='mb-4'>
									<Col className='col-4'>
										<Form.Label className='form-label'>โทรศัพท์</Form.Label>
										<Form.Control
											type='text'
											className='form-control'
											value={dataById.section ? dataById.section : ""}
											onChange={handleChange}
										/>
									</Col>
									<Col className='col-8'>
										<Form.Label className='form-label'>E-mail</Form.Label>
										<Form.Control
											type='text'
											className='form-control'
											value={dataById.section1 ? dataById.section1 : ""}
											onChange={handleChange}
										/>
									</Col>
								</Row>
							</Col>
							<Col className='col-4' id='image-personal'>
								<Card className='align-items-center'>
									<Card.Body style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "12rem" }}>
										<Image className='img img-fluid' variant='top' src='dist/img/default_image.png' width={"150px"} />
									</Card.Body>
									<Card.Footer>
										<Button variant='secondary'>อัพโหลดรูป</Button>
									</Card.Footer>
								</Card>
							</Col>
						</Form.Group>
					</Form>
				</Modal.Body>
			</Modal>
		</>
	)
}
