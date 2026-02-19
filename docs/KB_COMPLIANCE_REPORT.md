# KB COMPLIANCE REPORT - UMANG HOSPITAL

## Claims Verification (Source: UMANG_HOSPITAL_MASTER_CONTENT_BIBLE.md)

| Claim | KB Value | Site Value | Status | Location |
|:---|:---|:---|:---|:---|
| Bed Capacity | 150-bedded | 150 beds | ✅ Verified | siteConfig.stats.beds |
| ICU Bed Count (Marketing) | 52 ICU beds | 52 | ✅ Verified | siteConfig.stats.icuBedsMarketing |
| ICU Breakdown | 28 General, 8 SICU, 7 CCU | 43 Total | ✅ Verified | siteConfig.stats.icuBreakdown |
| Years of Experience | 15+ years | 15+ | ✅ Verified | siteConfig.stats.experience |
| Number of Superspecialists | 15+ | 15+ | ✅ Verified | siteConfig.stats.superspecialists |
| Emergency Helpline | +91 89297 33550 | Matches | ✅ Verified | siteConfig.contacts.main |
| Emergency Secondary | +91 89297 33551 | Matches | ✅ Verified | siteConfig.contacts.emergency |
| NABH Status | Accredited | Accredited | ✅ Verified | Header, Home, About |

## Compliance Notes:
- All hardcoded phone numbers and bed counts have been redirected to `siteConfig.js`.
- "150-bedded" terminology enforced across all copy.
- Address consistency maintained between Main Campus and Heart Centre.
- Marketing messages (Affordability) synced with `siteConfig.marketingMessage`.
