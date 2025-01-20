import request from 'supertest'
import { server } from "../lib/socket.js";

jest.setTimeout(60000)

describe("User signup load test", () => {
    it('Should handle 100 concurrent user signups', async () => {
        const numUsers = 100
        const signupRequests = []

        for (let i = 0; i < numUsers; i++){
            signupRequests.push(
                request("http://localhost:5002")
                    .post('/api/auth/signup')
                    .send({
                        email: `user${i}@email.test`,
                        fullName: `Test${i}`,
                        password: "Test112233@"

                    })
            )
        }

        const responses = await Promise.all(signupRequests)

        responses.forEach(response => {
            expect(response.statusCode).toBe(201);
        })
    })
})