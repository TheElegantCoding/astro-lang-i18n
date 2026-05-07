const removeTrailingSlash = (url: URL | string) => {
  return url.toString().replace(/\/$/v, '');
};

export { removeTrailingSlash };