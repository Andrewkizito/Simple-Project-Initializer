import { colorize } from "colorize-node";

export const executeInInterval = async (
  fn: (i: number) => void,
  interval: number,
  times: number = 1
) => {
  for (let i = 0; i < times; i++) {
    await fn(i);
    await new Promise((resolve) => setTimeout(resolve, interval));
  }
};

export const showLoader = () => {
  let loader = "#";
  let times = 1;
  setInterval(() => {
    handlerloader(loader, times);
    times++;
  }, 1000);
};

const handlerloader = (loader: string, times: number) => {
  loader = loader.repeat(times);
  process.stdout.write("\r" + colorize.blue(loader));
};
