import { CustomerController } from "./v1/customer.controller";
import { OrderController } from "./v1/order.controller";

const customerController = new CustomerController();
const orderController = new OrderController();

export { customerController, orderController };
