import md5 from "md5";

export const generateMD5 = (
  method: string | undefined,
  url: string | undefined,
  secret: string | null,
  body?: string | object
) => {
  return md5(`${method?.toUpperCase()}${url}${body}${secret}`);
};
