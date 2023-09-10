export const prerender = true;

export const load = async ({ params }) => {
  const markdown = await import(`../../../lib/blogs/${params.slug}.md`);
  let content = markdown.default;
  let metadata = markdown.metadata;

  return { ...metadata, content };
};
