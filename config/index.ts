import { moldRemediationConfig } from "./sites/mold-remediation";

const SITE_CONFIGS_BY_SLUG = {
  "mold-remediation": moldRemediationConfig,
} as const;

const SITE_CONFIGS_BY_HOST: Record<string, typeof moldRemediationConfig> = {
  "usa-mold-remediation-quote.com": moldRemediationConfig,
  "www.usa-mold-remediation-quote.com": moldRemediationConfig,
  "localhost:3000": moldRemediationConfig,
};

export type SiteConfig = typeof moldRemediationConfig;

export function getSiteConfig(hostname: string): SiteConfig {
  return SITE_CONFIGS_BY_HOST[hostname] ?? moldRemediationConfig;
}

export function getSiteConfigBySlug(slug: string): SiteConfig {
  return SITE_CONFIGS_BY_SLUG[slug as keyof typeof SITE_CONFIGS_BY_SLUG] ?? moldRemediationConfig;
}
