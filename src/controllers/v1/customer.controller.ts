import { customerService } from "@/services";
import { Prisma } from "@prisma/client";
import { BaseController } from "../base.controller";

export class CustomerController extends BaseController {
  private service;
  constructor() {
    super();
    this.service = customerService;
  }

  getList(options: Prisma.CustomerFindManyArgs) {
    return this.service.getList(options);
  }

  getItem(options: Prisma.CustomerFindUniqueArgs) {
    return this.service.getItem(options);
  }

  create(params: any) {
    return this.service.create(params);
  }

  update(params: any, options: Prisma.CustomerWhereUniqueInput) {
    return this.service.update(params, options);
  }

  delete(options: Prisma.CustomerWhereUniqueInput) {
    return this.service.delete(options);
  }
}
