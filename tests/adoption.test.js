import request from 'supertest';
import app from '../server.js'; // Ajusta la ruta según tu proyecto

describe('Adoption Router Tests', () => {
    it('Debe obtener todas las adopciones', async () => {
        const response = await request(app).get('/api/adoptions');
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    });

    it('Debe crear una nueva adopción', async () => {
        const newAdoption = { petId: "12345", userId: "67890" };
        const response = await request(app)
            .post('/api/adoptions')
            .send(newAdoption);
        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('id');
    });
});
