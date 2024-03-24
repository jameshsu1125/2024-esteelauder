const config = {
  enabled: true,
  baseURL: '',
};

export const install = ({
  baseURL,
  enabled,
}: {
  baseURL: string;
  enabled?: boolean | undefined;
}) => {
  config.baseURL = baseURL;
  config.enabled = enabled === undefined ? true : enabled;
};

export const path = (url: string) => {
  if (config.enabled) {
    return `${config.baseURL}${url.split('/').slice(-1)[0]}`;
  }
  return url;
};
