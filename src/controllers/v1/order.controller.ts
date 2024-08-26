import { orderService } from "@/services";
import { Prisma } from "@prisma/client";
import { BaseController } from "../base.controller";

export class OrderController extends BaseController {
  private service;
  constructor() {
    super();
    this.service = orderService;
  }

  getList(options: Prisma.OrderFindManyArgs) {
    return this.service.getList(options);
  }

  getItem(options: Prisma.OrderFindUniqueArgs) {
    return this.service.getItem(options);
  }

  create(params: any) {
    return this.service.create(params);
  }

  update(params: any, options: Prisma.OrderWhereUniqueInput) {
    return this.service.update(params, options);
  }

  delete(options: Prisma.OrderWhereUniqueInput) {
    return this.service.delete(options);
  }
}
