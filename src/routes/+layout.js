export const prerender = true;

export const load = async ({ }) => {
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
        content,
        slug,
      });
    });
  }

  return { title, description, blogs: result };
};
