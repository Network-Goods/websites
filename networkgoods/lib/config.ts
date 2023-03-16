export const requireEnv = (value: string | undefined, identifier: string) => {
  // if (!value) {
  //   throw new Error(`Required env var ${identifier} does not exist`);
  // }
  return value;
};

export const PLASMIC_PROJECT_API_TOKEN = requireEnv(
  process.env.PLASMIC_PROJECT_API_TOKEN,
  "PLASMIC_PROJECT_API_TOKEN",
);

export const PLASMIC_PROJECT_ID = requireEnv(
  process.env.PLASMIC_PROJECT_ID,
  "PLASMIC_PROJECT_ID",
);