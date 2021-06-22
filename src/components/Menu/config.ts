import { MenuEntry } from '@zoeswap/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://zoeswap.finance/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    status: {
      text: 'MIGRATE',
      color: 'warning',
    },
    items: [
      {
        label: 'LP Migration',
        href: '/migrate',
      },
      {
        label: 'Exchange',
        href: 'https://exchange.zoeswap.finance/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.zoeswap.finance/#/pool',
      },
      {
        label: 'V1 Liquidity (Old)',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://zoeswap.finance/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://zoeswap.finance/pools',
  },
  {
    label: 'Prediction (BETA)',
    icon: 'PredictionsIcon',
    href: 'https://zoeswap.finance/prediction',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'https://zoeswap.finance/lottery',
  },
  {
    label: 'Collectibles',
    icon: 'NftIcon',
    href: 'https://zoeswap.finance/nft',
  },
  {
    label: 'Team Battle',
    icon: 'TeamBattleIcon',
    href: 'https://zoeswap.finance/competition',
  },
  {
    label: 'Teams & Profile',
    icon: 'GroupsIcon',
    items: [
      {
        label: 'Leaderboard',
        href: 'https://zoeswap.finance/teams',
      },
      {
        label: 'Task Center',
        href: 'https://zoeswap.finance/profile/tasks',
      },
      {
        label: 'Your Profile',
        href: 'https://zoeswap.finance/profile',
      },
    ],
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://zoeswap.info',
      },
      {
        label: 'Tokens',
        href: 'https://zoeswap.info/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://zoeswap.info/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://zoeswap.info/accounts',
      },
    ],
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: 'https://zoeswap.finance/ifo',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Contact',
        href: 'https://docs.zoeswap.finance/contact-us',
      },
      {
        label: 'Voting',
        href: 'https://voting.zoeswap.finance',
      },
      {
        label: 'Github',
        href: 'https://github.com/pancakeswap',
      },
      {
        label: 'Docs',
        href: 'https://docs.zoeswap.finance',
      },
      {
        label: 'Blog',
        href: 'https://pancakeswap.medium.com',
      },
      {
        label: 'Merch',
        href: 'https://pancakeswap.creator-spring.com/',
      },
    ],
  },
]

export default config
