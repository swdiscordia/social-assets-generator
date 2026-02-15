import { ComponentType } from 'react'
import { TemplateProps } from './shared'

import { QuoteCard } from './QuoteCard'
import { AnnouncementBanner } from './AnnouncementBanner'

import {
  ChainLaunchHero,
  ChainLaunchMinimal,
  ChainLaunchDark,
  ChainLaunchSplit,
  ChainLaunchCelebration,
  ChainSupportedBadge,
  ChainEcosystemGrid,
} from './ChainAnnouncement'

import {
  FeatureHeroBold,
  FeatureHeroMinimal,
  FeatureSpotlight,
  FeatureListCard,
  FeatureUpdateLog,
  FeatureComingSoon,
  FeatureVersionBadge,
} from './FeatureAnnouncement'

import {
  SwapTokenPair,
  SwapBestRates,
  SwapNewToken,
  SwapZeroFees,
  SwapCrossChain,
  SwapVolumeMilestone,
} from './SwapTrading'

import {
  PortfolioTrackerPromo,
  PortfolioMultichain,
  PortfolioPerformance,
  PortfolioDefiDashboard,
  PortfolioAllInOne,
} from './Portfolio'

import {
  WalletSelfCustody,
  WalletMultiWallet,
  WalletConnectPromo,
  WalletSecurity,
  WalletHardware,
} from './Wallet'

import {
  MultichainSupportedGrid,
  MultichainBridge,
  MultichainExpansion,
  MultichainComparison,
  MultichainEcosystemMap,
} from './MultiChain'

import {
  ThreadOpenerBold,
  ThreadNumberCard,
  ThreadKeyPoint,
  ThreadEndCta,
  ThreadTldr,
} from './ThreadAssets'

import {
  StatsTvlMilestone,
  StatsUsersMilestone,
  StatsVolume24h,
  StatsGrowthChart,
  StatsYearReview,
} from './StatsMetrics'

import {
  CommunityAma,
  CommunityGiveaway,
  CommunityPartnership,
  CommunityGovernance,
  CommunityMilestone,
} from './Community'

export const templateRegistry: Record<string, ComponentType<TemplateProps>> = {
  'quote-card-1': QuoteCard,
  'announcement-banner-1': AnnouncementBanner,

  'chain-launch-hero': ChainLaunchHero,
  'chain-launch-minimal': ChainLaunchMinimal,
  'chain-launch-dark': ChainLaunchDark,
  'chain-launch-split': ChainLaunchSplit,
  'chain-launch-celebration': ChainLaunchCelebration,
  'chain-supported-badge': ChainSupportedBadge,
  'chain-ecosystem-grid': ChainEcosystemGrid,

  'feature-hero-bold': FeatureHeroBold,
  'feature-hero-minimal': FeatureHeroMinimal,
  'feature-spotlight': FeatureSpotlight,
  'feature-list-card': FeatureListCard,
  'feature-update-log': FeatureUpdateLog,
  'feature-coming-soon': FeatureComingSoon,
  'feature-version-badge': FeatureVersionBadge,

  'swap-token-pair': SwapTokenPair,
  'swap-best-rates': SwapBestRates,
  'swap-new-token': SwapNewToken,
  'swap-zero-fees': SwapZeroFees,
  'swap-cross-chain': SwapCrossChain,
  'swap-volume-milestone': SwapVolumeMilestone,

  'portfolio-tracker-promo': PortfolioTrackerPromo,
  'portfolio-multichain': PortfolioMultichain,
  'portfolio-performance': PortfolioPerformance,
  'portfolio-defi-dashboard': PortfolioDefiDashboard,
  'portfolio-all-in-one': PortfolioAllInOne,

  'wallet-self-custody': WalletSelfCustody,
  'wallet-multi-wallet': WalletMultiWallet,
  'wallet-connect-promo': WalletConnectPromo,
  'wallet-security': WalletSecurity,
  'wallet-hardware': WalletHardware,

  'multichain-supported-grid': MultichainSupportedGrid,
  'multichain-bridge': MultichainBridge,
  'multichain-expansion': MultichainExpansion,
  'multichain-comparison': MultichainComparison,
  'multichain-ecosystem-map': MultichainEcosystemMap,

  'thread-opener-bold': ThreadOpenerBold,
  'thread-number-card': ThreadNumberCard,
  'thread-key-point': ThreadKeyPoint,
  'thread-end-cta': ThreadEndCta,
  'thread-tldr': ThreadTldr,

  'stats-tvl-milestone': StatsTvlMilestone,
  'stats-users-milestone': StatsUsersMilestone,
  'stats-volume-24h': StatsVolume24h,
  'stats-growth-chart': StatsGrowthChart,
  'stats-year-review': StatsYearReview,

  'community-ama': CommunityAma,
  'community-giveaway': CommunityGiveaway,
  'community-partnership': CommunityPartnership,
  'community-governance': CommunityGovernance,
  'community-milestone': CommunityMilestone,
}
