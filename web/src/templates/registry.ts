import { ComponentType } from 'react'
import { TemplateProps } from './shared'
import {
  HeroDeepGradient,
  PartnershipCard,
  StatsMilestone3D,
  EventAnnouncement,
  UIShowcase,
} from './LIFIStyleTemplates'
import {
  MountainLandscape,
  FoxMoon,
  StatsMountain,
} from './ShapeShiftBranded'

export const templateRegistry: Record<string, ComponentType<TemplateProps>> = {
  'hero-deep-gradient': HeroDeepGradient,
  'partnership-card': PartnershipCard,
  'stats-milestone-3d': StatsMilestone3D,
  'event-announcement': EventAnnouncement,
  'ui-showcase': UIShowcase,
  'mountain-landscape': MountainLandscape,
  'fox-moon': FoxMoon,
  'stats-mountain': StatsMountain,
}
