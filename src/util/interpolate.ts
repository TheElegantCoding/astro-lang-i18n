const interpolate = (text: string, parameters: Record<string, string | number>) => {
  return text.replaceAll(/{{(\w+)}}/g, (match, key: string) => {
    return parameters[key]?.toString() ?? match;
  });
};

export { interpolate };