import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {remarkKroki} from 'remark-kroki';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: 'Influentia',
    tagline: 'Your smartest customer success manager, Scaled 1:1 for every user',
    favicon: 'img/favicon.svg',

    // Set the production url of your site here
    url: 'https://influentia.ai',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',
    stylesheets: [
        {
            href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
            type: 'text/css',
        },
    ],

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'Influentia-ai', // Usually your GitHub org/user name.
    projectName: 'docs', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },
    markdown: {
        mermaid: true,
    },
    themes: ['@docusaurus/theme-mermaid'],
    presets: [
        [
            'classic',
            {
                docs: false,
                //     {
                //     remarkPlugins: [
                //         [
                //             remarkKroki,
                //             {
                //                 // ...options here
                //                 alias: ['plantuml'],
                //                 target: 'mdx3'
                //             }
                //         ]
                //     ],
                //     sidebarPath: './sidebars.ts',
                //     // Please change this to your repo.
                //     // Remove this to remove the "edit this page" links.
                //     editUrl:
                //         'https://github.com/Influentia-ai/docs',
                // },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/Influentia-ai/docs',
                    // Useful options to enforce blogging best practices
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],
    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'system-design',
                path: 'system-design',
                routeBasePath: 'system-design',
                sidebarPath:  undefined,
                editUrl: "https://github.com/Influentia-ai/docs",
            },
        ],
    ],
    themeConfig: {
        colorMode: {
            defaultMode: 'light',
            disableSwitch: true,
            respectPrefersColorScheme: false,
        },
        // Replace with your project's social card
        image: 'img/social-card.png',
        navbar: {
            // title: 'Influentia',
            logo: {
                alt: 'Influentia Logo',
                src: 'img/logo.svg',
            },
            items: [
                // {
                //     type: 'docSidebar',
                //     sidebarId: 'tutorialSidebar',
                //     position: 'left',
                //     label: 'Docs',
                // },
                // {to: '/blog', label: 'Blog', position: 'left'},
                {to: '/system-design', label: 'System Design', position: 'left'},
                {to: '/roadmap', label: 'Road Map', position: 'left'},
                {
                    href: 'https://github.com/Influentia-ai/docs',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                // {
                //   title: 'Docs',
                //   items: [
                //     {
                //       label: 'Docs',
                //       to: '/docs/intro',
                //     },
                //   ],
                // },
                // {
                //   title: 'Community',
                //   items: [
                //     {
                //       label: 'Stack Overflow',
                //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                //     },
                //     {
                //       label: 'Discord',
                //       href: 'https://discordapp.com/invite/docusaurus',
                //     },
                //     {
                //       label: 'X',
                //       href: 'https://x.com/docusaurus',
                //     },
                //   ],
                // },
                // {
                //   title: 'More',
                //   items: [
                //     {
                //       label: 'Blog',
                //       to: '/blog',
                //     },
                //     {
                //       label: 'GitHub',
                //       href: 'https://github.com/facebook/docusaurus',
                //     },
                //   ],
                // },
            ],
            copyright: `<strong>Copyright © ${new Date().getFullYear()} Influentia.</strong>`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
