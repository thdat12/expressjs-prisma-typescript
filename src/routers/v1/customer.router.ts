import { customerController } from "@/controllers";
import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import { BaseRouter } from "../base.router";
import { validateData } from "@/middlewares/validation.middleware";
import {
  createCustomerSchema,
  updateCustomerSchema,
} from "@/schema/customer.schema";

export class CustomerRouter extends BaseRouter {
  private controller;

  constructor() {
    super();
    this.controller = customerController;
  }

  defaultRouting() {
    this.router.get(
      "/",
      this.getListMiddlewares(),
      (req: Request, res: Response) =>
        this.getList
          .bind(this)(req, res)
          .catch((error: any) => {
            this.onError(req, res, error);
          })
    );
    this.router.get(
      "/:id",
      this.getItemMiddlewares(),
      (req: Request, res: Response) =>
        this.getItem
          .bind(this)(req, res)
          .catch((error: any) => {
            this.onError(req, res, error);
          })
    );
    this.router.post(
      "/",
      this.createMiddlewares(),
      (req: Request, res: Response) =>
        this.create
          .bind(this)(req, res)
          .catch((error: any) => {
            this.onError(req, res, error);
          })
    );
    this.router.put(
      "/:id",
      this.updateMiddlewares(),
      (req: Request, res: Response) =>
        this.update
          .bind(this)(req, res)
          .catch((error: any) => {
            this.onError(req, res, error);
          })
    );
    this.router.delete(
      "/:id",
      this.deleteMiddlewares(),
      (req: Request, res: Response) =>
        this.delete
          .bind(this)(req, res)
          .catch((error: any) => {
            this.onError(req, res, error);
          })
    );
  }

  async getList(req: Request, res: Response) {
    const options: Prisma.CustomerFindManyArgs = {
      where: {},
      include: { order: true },
    };
    const result = await this.controller.getList(options);
    this.onSuccessAsList(req, res, result);
  }

  async getItem(req: Request, res: Response) {
    const options: Prisma.CustomerFindUniqueArgs = {
      where: {
        id: +req.params.id,
      },
      include: { order: true },
    };
    const result = await this.controller.getItem(options);
    this.onSuccess(req, res, result);
  }

  async create(req: Request, res: Response) {
    const result = await this.controller.create(req.body);
    this.onSuccess(req, res, result);
  }

  async update(req: Request, res: Response) {
    const options: Prisma.CustomerWhereUniqueInput = {
      id: +req.params.id,
    };
    const result = await this.controller.update(req.body, options);
    this.onSuccess(req, res, result);
  }

  async delete(req: Request, res: Response) {
    const options: Prisma.CustomerWhereUniqueInput = {
      id: +req.params.id,
    };
    const result = await this.controller.delete(options);
    this.onSuccess(req, res, result);
  }

  createMiddlewares(): any[] {
    return [validateData(createCustomerSchema)];
  }

  updateMiddlewares(): any[] {
    return [validateData(updateCustomerSchema)];
  }
}
