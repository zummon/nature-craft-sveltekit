export const prerender = true;

export const load = async ({ parent }) => {

  let data = await parent()

  return { ...data, blogs: data.blogs.slice(0, 5) };
};
