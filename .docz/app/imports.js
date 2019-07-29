export const imports = {
  'src/docs/documentation/challenge.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-docs-documentation-challenge" */ 'src/docs/documentation/challenge.mdx'
    ),
  'src/docs/documentation/document-settings.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-docs-documentation-document-settings" */ 'src/docs/documentation/document-settings.mdx'
    ),
  'src/docs/documentation/projects.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-docs-documentation-projects" */ 'src/docs/documentation/projects.mdx'
    ),
}
