export const imports = {
  'src/docs/documentation/Home.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-docs-documentation-home" */ 'src/docs/documentation/Home.mdx'
    ),
  'src/docs/documentation/document-settings.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-docs-documentation-document-settings" */ 'src/docs/documentation/document-settings.mdx'
    ),
}
