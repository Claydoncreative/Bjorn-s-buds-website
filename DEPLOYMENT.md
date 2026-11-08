# Deployment preparation — no production deployment authorised

## Isolation

Source is confined to the independent `Claydoncreative/Bjorn-s-buds-website` Git repository. Do not connect this application to Claydon Creative, MyEcho or EMBA repositories, databases, authentication projects, environment variables or hosting projects. The application needs no database or environment variables.

The public business website supersedes the earlier private-application brief. No client information is stored or displayed. The GitHub repository was public when audited; commit only public source and approved assets.

## Recommended hosting option: a NEW Cloudflare Pages project

This is a recommendation, not a claim that hosting has been provisioned. No hosting account/project is connected to this checkout. Create a distinct Pages project, select only the Bjorn’s Buds repository, and prevent automatic production publishing until the owner has approved launch. Do not edit any existing Worker, Pages project, route, DNS record or zone setting.

Build command: `npm run build`. Output directory: `dist`. Repository root: `/`. Node version: 22. No environment variables. Keep production and preview publishing disabled until reviewed; previews are externally accessible unless hosting access protection is enabled. Publish no confidential material to previews.

Alternatives: a separate Netlify site (build `npm run build`, publish `dist`) or a separate GitHub Pages project with a build workflow and custom-domain configuration. Provider-specific DNS values must come from the newly created project, never from an existing Claydon Creative deployment.

## DNS — review before making changes

The exact destination cannot be verified until the separate hosting project exists. Do not guess an IP address or reuse the CAD website’s records.

For the recommended Cloudflare Pages setup, after creating the project and adding the custom domain in its dashboard, the expected record is:

| Type | Name within claydoncreative.com | Target | TTL |
|---|---|---|---|
| CNAME | bjorns-buds | The exact `<new-project>.pages.dev` hostname assigned by Cloudflare | Auto |

`<new-project>` is a placeholder, not a live DNS value. Record the actual assigned hostname and any provider-issued ownership TXT verification record before requesting launch approval. Use the exact verification name/value if required. If the DNS zone is not already managed by Cloudflare, follow its subdomain CNAME onboarding; do not move nameservers or the apex domain. Inspect any existing record at `bjorns-buds` before proposing a change. Never change `@`, `www`, MX, mail TXT records, CAD routes or nameservers.

The DNS provider and existing live hosting have not been audited in this isolated build; no access to unrelated projects is required or authorised by the latest brief. An exact ready-to-apply DNS record remains pending hosting project selection/provisioning.

## HTTPS and launch sequence

1. Review the source and build results; add approved contact details, service area, images and completed privacy notice.
2. Select a hosting provider and create only a separate, unpublished project. Record its assigned hostname and required verification records.
3. Provide the exact proposed DNS records and deployment settings to the owner for approval. Do not deploy to production or modify DNS before approval.
4. After approval, upload/build `dist`, add the custom domain through the provider and apply only approved `bjorns-buds` records.
5. Wait for the provider’s managed TLS certificate. Verify HTTPS and redirects to HTTPS on the subdomain. Do not enable a parent-domain HSTS policy or change parent-domain redirects.
6. Check all pages, navigation, images, keyboard focus, mobile menu and configured contact actions. Confirm the CAD website remains reachable and unchanged.

Rollback: restore only the approved Bjorn’s Buds DNS record to its recorded prior state or remove the newly added record, and roll back only this hosting project. The CAD, MyEcho and EMBA deployments remain outside this project’s scope.
