import { prisma } from "@/utils";
import { Prisma } from "@prisma/client";
import { BaseService } from "../base.service";

export class OrderService extends BaseService {
  private repository;
  constructor() {
    super();
    this.repository = prisma.order;
  }

  async getList(options: Prisma.OrderFindManyArgs) {
    const rows = await this.exec(this.repository.findMany(options));
    const count = await this.exec(
      this.repository.count({ where: options.where })
    );
    return { rows, count };
  }

  getItem(options: Prisma.OrderFindUniqueArgs) {
    return this.exec(this.repository.findUnique(options));
  }

  create(params: any) {
    return this.exec(
      this.repository.create({
        data: params,
      })
    );
  }

  update(params: any, options: Prisma.OrderWhereUniqueInput) {
    return this.exec(
      this.repository.update({
        data: params,
        where: options,
      })
    );
  }

  delete(options: Prisma.OrderWhereUniqueInput) {
    return this.exec(
      this.repository.delete({
        where: options,
      })
    );
  }
}
