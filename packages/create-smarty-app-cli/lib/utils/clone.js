import { promisify } from "util";
/** 克隆仓库代码 */
import download from "download-git-repo";
/** 进度条展示 */
import ora from "ora";

export default async (repo, desc) => {
  const process = ora(`下载.....${repo}`);
  process.start();
  await promisify(download)(repo, desc);
  process.succeed();
};
