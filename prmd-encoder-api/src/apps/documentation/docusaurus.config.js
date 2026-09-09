/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Documentación',
  tagline: 'Documentación API Promed Encoder',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://app.kboxsalestools.com/favicon.ico',
  organizationName: 'Kbox Sales Tools', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Documentación Promed Encoder',
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Empezemos',
        },
        {
          type: 'doc',
          docId: 'api/clientes/crear',
          position: 'left',
          label: 'Api',
        },
        {
          type: 'doc',
          docId: 'desarrollo',
          position: 'left',
          label: 'Desarrollo',
        },
        {
          href: 'https://github.com/Kbox-Sales-Tools',
          label: 'GitHub Repo',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Promed SA, Inc. Built by KBOX SalesTools.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
