import * as express from "express";
import * as _ from "lodash";
import { CustomerRouter } from "./v1/customer.router";
import { OrderRouter } from "./v1/order.router";

const route = express.Router();

const customerRouter = new CustomerRouter();
const orderRouter = new OrderRouter();

route.use("/v1/customer", customerRouter.router);
route.use("/v1/order", orderRouter.router);

export default route;
