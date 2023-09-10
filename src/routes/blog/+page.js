export const prerender = true;

export const load = async ({ parent }) => {
  let result = [];

  result = await parent()

  return { blogs: result.blogs };
};
