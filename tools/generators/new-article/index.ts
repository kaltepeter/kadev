import { generateFiles, joinPathFragments } from '@nrwl/devkit';
import { Tree, formatFiles } from '@nrwl/devkit';
import { names } from 'nx/src/utils/command-line-utils';

interface NewArticleSchemaOptions {
  title: string;
  author: string;
  excerpt?: string;
}

export default async function (tree: Tree, schema: NewArticleSchemaOptions) {
  generateFiles(tree, joinPathFragments(__dirname, './files'), './_articles', {
    title: schema.title,
    author: schema.author,
    excerpt: schema.excerpt || '',
    normalizedTitle: names(schema.title).fileName,
    creationDate: new Date().toISOString()
  });
  await formatFiles(tree);
}
