export const imports = {
  'src/components/Button/button.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-components-button-button" */ 'src/components/Button/button.mdx'
    ),
  'src/docs/developers/git.md': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-docs-developers-git" */ 'src/docs/developers/git.md'
    ),
  'src/docs/developers/java.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-docs-developers-java" */ 'src/docs/developers/java.mdx'
    ),
  'src/docs/developers/react-native.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-docs-developers-react-native" */ 'src/docs/developers/react-native.mdx'
    ),
  'src/docs/developers/reactjs.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-docs-developers-reactjs" */ 'src/docs/developers/reactjs.mdx'
    ),
  'src/docs/documentation/challenge.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-docs-documentation-challenge" */ 'src/docs/documentation/challenge.mdx'
    ),
  'src/docs/documentation/document-settings.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-docs-documentation-document-settings" */ 'src/docs/documentation/document-settings.mdx'
    ),
  'src/docs/documentation/pfin.md': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-docs-documentation-pfin" */ 'src/docs/documentation/pfin.md'
    ),
  'src/docs/documentation/projects.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-docs-documentation-projects" */ 'src/docs/documentation/projects.mdx'
    ),
  'src/docs/documentation/sprint 8.md': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-docs-documentation-sprint-8" */ 'src/docs/documentation/sprint 8.md'
    ),
  'src/docs/structure/projects.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-docs-structure-projects" */ 'src/docs/structure/projects.mdx'
    ),
}
