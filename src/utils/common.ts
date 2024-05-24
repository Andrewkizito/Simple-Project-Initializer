import { colorize } from "colorize-node";

export const showLoader = () => {
  let loader = "#";
  let times = 1;
  const loaderId = setInterval(() => {
    handlerloader(loader, times);
    times++;
  }, 1000);

  return loaderId;
};

const handlerloader = (loader: string, times: number) => {
  loader = loader.repeat(times);
  process.stdout.write("\r" + colorize.blue(loader));
};
