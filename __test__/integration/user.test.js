/* eslint-disable no-undef */
const request = require("supertest");
const app = require("../../src/app");

describe("Teste na rota de Usuario", () => {

	it("Deve ser possivel fazer Upload de imagem", function () {
		return request(app)
			.post("/upload").then(response => {
				expect(response.statusCode).toBe(200);
			});
	});

	it("Deve ser possivel fazer um get das imagens", function () {
		return request(app)
			.get("/getimages").then(response => {
				expect(response.statusCode).toBe(200);
			});
	});

	it("Deve ser possivel fazer um Update do usuario", function () {
		return request(app)
			.patch("/update").then(response => {
				expect(response.statusCode).toBe(200);
			});
	});

	it("Deve ser possivel Deletar um usuario", function () {
		return request(app)
			.delete("/delete").then(response => {
				expect(response.statusCode).toBe(200);
			});
	});
});