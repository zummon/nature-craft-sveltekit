export const load = async ({ url, params }) => {
  let title = "Nature Craft";
  let description = "Lorem ipsum dolor sit amet consectetur.";
  let result = [];
  const markdowns = import.meta.glob('../lib/blogs/*.md');

  for (const path in markdowns) {
    await markdowns[path]().then((markdown) => {
      let content = markdown.default;
      let metadata = markdown.metadata;
      let slug = path.split('/').pop().slice(0, -3);

      result.push({
        ...metadata,
        date: new Date(metadata.date).toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' }),
        content,
        slug,
      });
    });
  }

  if (url.pathname == '/blog') {
    title = "Blogs"
    description = "Fugit quasi ullam reiciendis totam culpa."
  }

  let blog = result.find(blog => {
    return blog.slug == params.slug
  })

  if (blog) {
    return { ...blog };
  }

  return { title, description, blogs: result, pathname: url.pathname };
};
