import path from "path";
import dotenv from "dotenv";
import moduleAlias from "module-alias";

dotenv.config();

const IS_DEV = process.env.NODE_ENV === "development";

const rootPath = path.resolve(__dirname, ".", "..");
const rootPathDev = path.resolve(rootPath, "src");
const rootPathProd = path.resolve(rootPath, "build");

moduleAlias.addAliases({
  "@": IS_DEV ? rootPathDev : rootPathProd,
});
