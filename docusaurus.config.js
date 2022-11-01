// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Speak_',
  tagline: 'Prepare for technical interviews with a free cohort-based course.',
  url: 'https://.pages.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'speakcareers', // Usually your GitHub org/user name.
  // projectName: 'tech-interview-prep.github.io', // Usually your repo name.
  // deploymentBranch: 'gh-pages',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/speakcareers/tech-interview-prep/tree/main/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/speakcareers/tech-interview-prep/tree/main/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        // title: 'Speak_',
        logo: {
          alt: 'Speak_ Logo',
          src: 'img/speak-logomark-256.jpeg',
        },
        items: [
          {
            type: 'doc',
            docId: 'welcome/about-speak_',
            position: 'left',
            label: 'Tech Interview Prep',
          },
          {
            href: 'https://discord.gg/wjnAEVjbCu',
            label: 'Discord',
            position: 'right',
          },
          {
            href: 'https://github.com/speakcareers/tech-interview-prep',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://speak.careers',
            label: 'Speak_',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Guide',
            items: [
              {
                label: 'Tech Interview Prep',
                to: '/docs/welcome/about-speak_',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/school/speakcareers/',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/wjnAEVjbCu',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/speakcareers',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://speak.careers/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/speakcareers/tech-interview-prep',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Speak_. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
