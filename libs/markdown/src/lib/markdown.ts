import { readFileSync } from 'fs';
import { join } from 'path';
import * as matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize'

export function getParsedFileContentBySlug(
  filename: string,
  postsPath: string
) {
  const postFilePath = join(postsPath, `${filename}.mdx`);
  const fileContent = readFileSync(postFilePath);

  const { data, content } = matter(fileContent);

  return {
    frontMatter: data,
    content,
  };
}

export function renderMarkdown(markdownContent: string) {
  return serialize(markdownContent || '');
}
