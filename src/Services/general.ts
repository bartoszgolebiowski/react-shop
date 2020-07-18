export const checkStatus = (errorMessage: string) => (res: Response) => {
  if (res.status < 500) {
    return res;
  }
  throw Error(errorMessage);
};
