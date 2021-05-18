/* eslint-disable no-undef */
const request = require("supertest");
const app = require("../../src/app");

const user = {
	username: "jgbispo",
	password: "123456",
	email: "jgbispo20@gmail.com"
};

describe("Authentiction Test", () => {

	//////////////////////////////////
	// Register 
	/////////////////////////////////

	it("Deve ser possivel Registrar um usuario", function () {
		return request(app)
			.post("/register")
			.send(user)
			.then(response => {
				expect(response.statusCode).toBe(201);
				expect(response.body).toMatchObject({
					user: {
						username: user.username,
						password: "secret",
						email: user.email
					},
					message: "successfully"
				});
			});
	});

	it("Usuario sem username - Retorna error", function () {
		return request(app)
			.post("/register")
			.send({
				password: user.password,
				email: user.email
			})
			.then(response => {
				expect(response.statusCode).toBe(500);
				expect(response.body).toMatchObject({
					error: "Username não informado",
					code: 1
				});
			});
	});

	it("Usuario sem password - Retorna error", function () {
		return request(app)
			.post("/register")
			.send({
				username: user.username,
				email: user.email
			})
			.then(response => {
				expect(response.statusCode).toBe(500);
				expect(response.body).toMatchObject({
					error: "Password não informada",
					code: 1
				});
			});
	});

	it("Usuario sem email - Retorna error", function () {
		return request(app)
			.post("/register")
			.send({
				username: user.username,
				password: user.password
			})
			.then(response => {
				expect(response.statusCode).toBe(500);
				expect(response.body).toMatchObject({
					error: "Email não informado",
					code: 1
				});
			});
	});

	//////////////////////////////////
	// Login 
	/////////////////////////////////

	it("Deve ser possivel fazer Login com o usuario", function () {
		return request(app)
			.post("/login")
			.send({
				username: user.username,
				password: user.password
			})
			.then(response => {
				expect(response.statusCode).toBe(200);
				expect(response.body).toMatchObject({
					user: {
						username: user.username,
						password: "secret",
					},
					message: "successfully"
				});
			});
	});

	it("Usuario sem username - Retorna error", function () {
		return request(app)
			.post("/login")
			.send({
				password: user.password,
				email: user.email
			})
			.then(response => {
				expect(response.statusCode).toBe(500);
				expect(response.body).toMatchObject({
					error: "Username não informado",
					code: 0
				});
			});
	});

	it("Usuario sem password - Retorna error", function () {
		return request(app)
			.post("/login")
			.send({
				username: user.username,
				email: user.email
			})
			.then(response => {
				expect(response.statusCode).toBe(500);
				expect(response.body).toMatchObject({
					error: "Password não informada",
					code: 0
				});
			});
	});

	it("Usuario sem email - Retorna error", function () {
		return request(app)
			.post("/login")
			.send({
				username: user.username,
				password: "123"
			})
			.then(response => {
				expect(response.statusCode).toBe(500);
				expect(response.body).toMatchObject({
					error: "Passowrd incorreta",
					code: 0
				});
			});
	});
});