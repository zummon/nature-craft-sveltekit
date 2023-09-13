export const prerender = true;

export const load = async ({ parent }) => {

  let data = await parent()

  return { ...data, };
};
