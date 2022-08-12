import { app, sequelize} from '../express';
import request from 'supertest';
import CreateProductUseCase from '../../../usecase/product/create/create.product.usecase';
import ProductRepository from '../../product/repository/sequelize/product.repository';

describe("E2E test for product", () => {


    beforeEach(async () => {
        await sequelize.sync({ force: true });
    });

    afterAll(async () => {
        await sequelize.close();
    });

    it("should create a product", async () => {
        
        const response = await request(app)
            .post("/product")
            .send({
                name: "Nootboot",
                price: 100
            });

        // expect(response.status).toBe(200);
        // expect(response.body.name).toBe("Nootboot");        
    });
});
