import { ArrowsRightLeftIcon } from '@heroicons/react/24/solid'
import {
  changelogSection,
  documentationSection,
  recipesSection,
  guidesSection,
  referencesSection,
} from '@/shared/sections'
import { Hero } from './Hero'

export const mpl404 = {
  name: 'MPL-404',
  headline: 'Hybrid Assets',
  description: 'Framework and on-chain protocol for hybrid assets.',
  navigationMenuCatergory: 'Utility',
  path: 'mpl-404',
  icon: <ArrowsRightLeftIcon />,
  github: '',
  className: 'accent-amber',
  heroes: [{ path: '/mpl-404', component: Hero }],
  sections: [
    {
      ...documentationSection('mpl-404'),
      navigation: [
        {
          title: 'Introduction',
          links: [
            { title: 'Overview', href: '/mpl-404' },
            { title: 'Getting Started', href: '/mpl-404/getting-started' },
            { title: '', href: '/mpl-404/' },
            { title: '', href: '/mpl-404/' },
            { title: 'FAQ', href: '/mpl-404/faq' },
          ],
        },
        {
          title: 'Features',
          links: [
            { title: '', href: '/mpl-404/' },
          ],
        },
        {
          title: 'Guides',
          links: [
            { title: '', href: '/mpl-404/' },
          ],
        },
      ],
    },
  ],
}
