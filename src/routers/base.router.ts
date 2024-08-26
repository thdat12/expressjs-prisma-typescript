import { Request, Response, Router } from "express";

export class BaseRouter {
  router: Router;

  constructor() {
    this.router = Router();
    this.defaultRouting();
  }
  onError(req: Request, res: Response, error: any) {
    res.status(error?.code || 500).json({
      code: error?.code || 500,
      message: error?.message,
    });
  }

  onSuccess(req: Request, res: Response, result: any) {
    res.status(result?.code || 200).json({
      code: result?.code || 200,
      object: result,
    });
  }

  onSuccessAsList(req: Request, res: Response, result: any) {
    res.status(result?.code || 200).json({
      code: result?.code || 200,
      rows: result.rows,
      count: result.count,
    });
  }

  defaultRouting() {}

  getListMiddlewares(): any[] {
    return [];
  }

  getItemMiddlewares(): any[] {
    return [];
  }

  createMiddlewares(): any[] {
    return [];
  }

  updateMiddlewares(): any[] {
    return [];
  }

  deleteMiddlewares(): any[] {
    return [];
  }
}
