
export const load = async ({ params, parent }) => {

  let data = await parent()
  let blog = data.blogs.find(blog => {
    return blog.slug == params.slug
  })

  if (blog) {
    return { ...blog };
  }

  return {};
};
