import { executeTool } from "./tool-executor.js";

export function createTool<TArgs>(
  name: string,
  fn: (args: TArgs) => Promise<any>
) {
  return async (args: TArgs) => {
    return executeTool(name, () => fn(args));
  };
}