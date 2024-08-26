import { CustomerService } from "./v1/customer.service";
import { OrderService } from "./v1/order.service";

const customerService = new CustomerService();
const orderService = new OrderService();

export { customerService, orderService };
