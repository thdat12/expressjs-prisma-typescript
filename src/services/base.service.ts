import { config } from "@/config";

export class BaseService {
  constructor() {}

  async exec(promise: any) {
    try {
      const result = await promise;

      if (result === undefined || result === null) {
        throw {
          code: 404,
          message: "Record not found!",
        };
      }

      return result;
    } catch (err) {
      if (config.server.debug) {
        if (err.name) {
          throw {
            code: 500,
            message: err.name,
          };
        } else {
          throw {
            code: 500,
            message: "Some thing went wrong!",
          };
        }
      } else {
        throw {
          code: 500,
          message: "Some thing went wrong!",
        };
      }
    }
  }
}
