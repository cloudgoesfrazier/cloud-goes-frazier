# Cloud Goes Frazier Website V2 PRD

## 1. Executive Summary

Cloud Goes Frazier is currently a minimal single-page technical site built with Next.js, TypeScript, and Tailwind CSS. The existing site communicates the founder's focus areas clearly, loads quickly, and establishes a direct personal presence. However, it currently reads more like a simple personal landing page than a premium technical brand.

Website v2 should reposition Cloud Goes Frazier as a premium cloud infrastructure and AI engineering brand. The experience should feel closer to a modern cloud platform than a personal blog: fast, calm, technical, precise, and visually memorable. The site should make visitors feel like they are moving through layers of cloud infrastructure as they scroll, while keeping the content useful, credible, and easy to scan.

The redesign should support several future business and content directions:

- AI engineering and LLM systems
- Kubernetes and cloud infrastructure
- Automation and platform engineering
- Technical education and workshops
- Open source projects
- Personal experiments and labs
- Future consulting services

The initial v2 should prioritize brand positioning, information architecture, visual direction, content hierarchy, SEO readiness, performance, and a scalable foundation for future sections.

## 2. MVP Scope for Website V2

The MVP for Website V2 should focus on a polished, credible, premium homepage experience rather than a full content platform. It should establish the brand foundation, prove the visual direction, and create the first scalable structure for future projects, writing, labs, workshops, and consulting.

The MVP scope includes:

- Homepage redesign.
- Header and navigation.
- Hero section.
- Cloud-inspired scroll experience.
- Focus areas.
- Featured work / active labs section.
- About / founder signal.
- Contact / follow CTA.
- SEO and social metadata.
- Accessibility and performance readiness.

The MVP should not include full project-detail infrastructure, a blog engine, workshop pages, consulting pages, a CMS, newsletter automation, or implementation ticket creation unless those are explicitly prioritized later.

Rationale:
The current site is a single-page experience, so the highest-leverage v2 move is to make that page feel premium, clear, and expandable. A focused MVP protects quality while giving the brand a strong enough foundation to support future content and business directions.

## 3. Current-State Review

### 3.1 Repository Review

Observed from the repository:

- Framework: Next.js App Router
- Language: TypeScript
- UI framework: React
- Styling: Tailwind CSS
- Hosting target: Vercel
- Current structure: single-page landing experience under `src/app/page.tsx`
- Global styles: `src/app/globals.css`
- App metadata: still uses default Create Next App title and description
- Static assets: logo image plus default Next/Vercel SVG assets
- Docs directory: present, but currently empty files for architecture, roadmap, and this PRD

Package observations:

- The project uses Next.js 16.1.3 and React 19.2.3.
- Tailwind CSS 4 is present.
- The Next config enables `reactCompiler: true`.
- The WSL system Node version available during review was 18.19.1, while Next 16 requires Node >=20.9.0. The repository should standardize on Node 20+ for local development and CI.

### 3.2 Current Landing Page Strengths

The current landing page has several strong fundamentals:

- Clear name and purpose: "Cloud Goes Frazier" is immediately visible.
- Focused messaging: the site quickly states cloud, automation, AI, Kubernetes, GPU platforms, and AI tooling.
- Minimal layout: the page is simple, readable, and low-friction.
- Good initial trust cues: GitHub and LinkedIn are exposed directly.
- Strong signal of practitioner identity: the copy emphasizes building real systems rather than abstract commentary.
- Fast implementation surface: the current single-page structure is easy to evolve.
- Existing logo asset: the brand has a visual identity starter that can be refined or incorporated.

### 3.3 Current Landing Page Weaknesses

The current landing page also has limitations that v2 should address:

- It feels like a personal developer profile rather than a premium technical brand.
- It uses a mostly black background, which does not align with the requested white, blue, gray cloud-platform direction.
- The content is sparse and lacks a deeper narrative arc.
- There is no navigation, sitemap, or scalable information architecture.
- The page does not yet create a sense of motion, atmosphere, cloud infrastructure, or spatial depth.
- The focus areas are presented as static cards with limited differentiation.
- There is limited proof: no project highlights, case-study framing, open source work, talks, workshops, demos, writing, metrics, or featured systems.
- Metadata is still generic and should be replaced for SEO and social sharing.
- The design does not yet express AI engineering, Kubernetes, infrastructure automation, or platform engineering visually.
- The site lacks clear conversion paths for future consulting, workshops, newsletter, or project discovery.
- Accessibility and responsive behavior are not documented as product requirements yet.

### 3.4 Current Technical Structure

The current application is intentionally simple:

- `src/app/layout.tsx`: global layout and metadata.
- `src/app/page.tsx`: entire landing page.
- `src/app/globals.css`: Tailwind import, theme variables, body styles.
- `public/logo.png`: primary custom image asset.
- `public/*.svg`: default scaffold assets.

This simplicity is a useful starting point. V2 should preserve the performance and maintainability benefits while introducing a more deliberate system for content, sections, visual language, and future expansion.

## 4. Vision Statement

Cloud Goes Frazier should become a premium technical brand for engineers, leaders, and builders working at the edge of cloud infrastructure and AI systems.

The site should feel like entering a calm, high-performance cloud platform: bright, precise, layered, and quietly powerful. As visitors scroll, they should feel like they are moving through the clouds, revealing layers of infrastructure, automation, intelligence, education, and experimentation.

The brand should communicate:

- This is built by a practitioner.
- The work is technical and credible.
- The systems are modern and production-minded.
- The writing and projects are useful, not performative.
- The brand can grow into education, open source, tools, and consulting.

## 5. Business Goals

### 5.1 Near-Term Goals

- Establish Cloud Goes Frazier as a premium technical brand.
- Communicate expertise in AI engineering, Kubernetes, automation, and cloud infrastructure.
- Create a polished landing page that can support future content sections.
- Improve trust, memorability, and perceived professionalism.
- Provide clear paths to GitHub, LinkedIn, featured work, and future contact.
- Improve SEO foundation for cloud infrastructure, AI engineering, Kubernetes, and platform engineering topics.
- Make the site feel intentional enough to support future consulting and education offers.

### 5.2 Medium-Term Goals

- Publish technical writing and architecture notes.
- Showcase projects, experiments, and open source work.
- Create a durable content model for project pages and technical articles.
- Add newsletter or update capture if audience-building becomes a priority.
- Add workshop and technical education pages.
- Add contact or inquiry flows for consulting opportunities.

### 5.3 Long-Term Goals

- Support consulting offers around AI infrastructure, Kubernetes, platform engineering, automation, and developer productivity.
- Host tools, calculators, demos, and labs.
- Become a recognizable technical education and infrastructure brand.
- Build an archive of credible open source and project work.
- Create a platform for workshops, talks, demos, and field notes.

## 6. Non-Goals For Initial V2

The initial v2 should not attempt to solve every future business line at once.

Non-goals:

- Full e-commerce.
- Paid course platform.
- Complex CMS migration unless content volume requires it.
- User accounts or authentication.
- Heavy animation that harms performance or accessibility.
- A generic personal blog template.
- A consulting funnel that feels premature or sales-heavy.
- A large design system before core brand and IA are validated.

## 7. Assumptions

The following assumptions should be validated before final design and implementation:

- Cloud Goes Frazier is primarily associated with Zachary Frazier as the founder/operator.
- The brand should be personal but not casual; it should feel founder-led and expert-driven.
- Consulting is a future direction, not the dominant initial offer.
- The site should initially remain easy to maintain by one person.
- GitHub and LinkedIn are primary external trust channels.
- Future writing will include deep technical material, not short generic posts.
- Future projects may include demos, labs, tools, open source repositories, and experiments.
- No final brand typography, logo refresh, or photography system has been approved yet.

## 8. Open Questions

Questions to resolve before design execution:

- Should the brand remain strictly "Cloud Goes Frazier" or use "CloudGoesFrazier" in some contexts?
- Should the homepage use first-person voice, brand voice, or a hybrid?
- Which candidate featured work items are ready enough to show in the MVP?
- Will writing be authored only by Zach, or could collaborators appear later?
- Should consulting have a visible launch CTA now or remain soft until services are defined?
- Is the current logo final, or should it be refreshed for v2?
- Should the site include newsletter capture in the initial launch, or defer it beyond MVP?
- What analytics tool should be used?
- Should content be filesystem-based MDX or managed through a CMS later?
- What domain should be canonical: `cloudgoesfrazier.com` or the Vercel URL?

## 9. Target Audience

### 9.1 Primary Audiences

- Cloud engineers and platform engineers.
- DevOps and infrastructure automation practitioners.
- Kubernetes operators and architects.
- AI engineers building practical LLM or inference workflows.
- Engineering managers and technical leaders evaluating expertise.
- Developers learning cloud-native systems.

### 9.2 Secondary Audiences

- Recruiters or hiring managers evaluating technical depth.
- Potential consulting clients.
- Workshop or training participants.
- Open source collaborators.
- Technical community members.
- Founders or teams looking for infrastructure guidance.

## 10. User Personas

### 10.1 The Platform Engineer

Profile:
An engineer responsible for internal developer platforms, Kubernetes clusters, CI/CD, infrastructure automation, and production reliability.

Needs:

- Quickly understand whether Cloud Goes Frazier has real technical depth.
- Find practical content, tools, and examples.
- Discover projects related to Kubernetes, automation, and platform engineering.

Success criteria:

- Can identify relevant expertise within 10 seconds.
- Can access GitHub or project details quickly.
- Feels the brand is credible and not generic.

### 10.2 The AI Infrastructure Builder

Profile:
A technical builder working on LLM tooling, GPU platforms, inference, AI automation, or internal AI workflows.

Needs:

- See AI engineering positioned as practical systems work.
- Find experiments, architectures, and tooling examples.
- Understand how AI connects to infrastructure and platform work.

Success criteria:

- Sees AI as a first-class brand pillar.
- Finds project or writing paths related to AI tooling.
- Understands that the brand emphasizes production-minded AI, not hype.

### 10.3 The Technical Leader

Profile:
An engineering manager, director, founder, or decision-maker looking for credible infrastructure thinking or future consulting support.

Needs:

- Quickly assess credibility, clarity, and scope of expertise.
- Understand what problems Cloud Goes Frazier can help with.
- Find a low-friction way to contact or follow the work.

Success criteria:

- Perceives the site as professional and premium.
- Understands future consulting fit without being pushed into a hard sell.
- Finds evidence of judgment, communication ability, and technical execution.

### 10.4 The Learner

Profile:
A developer or engineer growing into cloud, Kubernetes, automation, AI engineering, or platform engineering.

Needs:

- Find approachable but serious educational material.
- Understand what topics the site covers.
- Follow projects and experiments as learning paths.

Success criteria:

- Can navigate to learning resources easily.
- Feels the tone is confident but not gatekeeping.
- Finds concrete projects and explainers.

### 10.5 The Open Source Collaborator

Profile:
An engineer who discovers the brand through GitHub, social links, or technical content and may contribute to projects.

Needs:

- See active or featured repositories.
- Understand project purpose and status.
- Find links to issues, demos, documentation, or contribution paths.

Success criteria:

- Can reach source code quickly.
- Understands which projects matter most.
- Finds contribution opportunities when available.

## 11. Brand Personality

Cloud Goes Frazier should feel:

- Premium but not pretentious.
- Technical but not cold.
- Calm but not dull.
- Confident but not loud.
- Minimal but not empty.
- Personal but not amateur.
- Experimental but not chaotic.
- Educational but not basic.

Avoid:

- Hype-heavy AI language.
- Dense enterprise jargon.
- Dark-only hacker aesthetics.
- Generic SaaS gradients.
- Overly playful clouds or cartoon-like visuals.
- Blog-first layouts that bury the brand.
- Excessive cards, badges, and decorative effects.

## 12. Core Messaging

### 12.1 Positioning Statement

Cloud Goes Frazier is a premium technical lab for AI engineering, Kubernetes, cloud infrastructure, automation, and platform engineering, built by a practitioner focused on real systems.

### 12.2 Homepage Message

Primary message:

"Practical AI and cloud infrastructure for modern engineering teams."

Alternate directions to test:

- "AI engineering, Kubernetes, and cloud infrastructure, built from the field."
- "A technical lab for cloud platforms, automation, and practical AI systems."
- "Modern infrastructure thinking for AI, Kubernetes, and platform engineering."

### 12.3 Supporting Message Pillars

AI Engineering:

- Practical AI systems, LLM workflows, inference tooling, and automation.
- Emphasis on production use, not hype.

Kubernetes and Cloud Infrastructure:

- Clusters, platforms, networking, deployment patterns, and operating models.
- Emphasis on reliability, clarity, and scale.

Automation and Platform Engineering:

- Developer productivity, infrastructure automation, repeatable systems, and internal platforms.
- Emphasis on reducing operational drag.

Technical Education:

- Labs, writeups, workshops, and field notes.
- Emphasis on teaching through real implementation.

Open Source and Experiments:

- Projects, prototypes, tools, and public learning.
- Emphasis on visible execution.

Consulting:

- Future advisory and implementation support.
- Emphasis on calm, expert problem-solving for teams.

## 13. Information Architecture

V2 should introduce a scalable site structure while keeping the initial implementation focused.

### 13.1 Primary Navigation

Recommended initial nav:

- Work
- Writing
- Projects
- About
- Contact

Alternative if content is still sparse:

- Focus
- Projects
- Writing
- About
- Contact

Rationale:

- "Work" can encompass proof, project highlights, experiments, and future case studies.
- "Writing" should become the technical education and field-notes entry point.
- "Projects" should expose concrete artifacts, tools, labs, and open source work.
- "About" preserves the founder-led identity.
- "Contact" creates a future consulting path without making consulting the whole site.

### 13.2 Content Model

Core content types:

- Homepage sections.
- Project detail pages.
- Writing/articles.
- Labs or experiments.
- Open source repository references.
- Workshop pages.
- Consulting overview page.
- About page.
- Contact page.

### 13.3 Page Templates

Homepage:

- Premium brand introduction.
- Focus areas.
- Featured work.
- Cloud scrolling narrative.
- Education and writing preview.
- About/founder credibility.
- Contact/follow CTA.

Project page:

- Project title.
- Problem.
- Technical stack.
- Architecture overview.
- Screenshots or diagrams.
- GitHub/demo links.
- Lessons learned.
- Status.

Article page:

- Title and summary.
- Topic tags.
- Reading time.
- Technical diagrams where useful.
- Related projects or follow-up links.

Consulting page:

- Problem areas.
- Engagement types.
- Ideal clients.
- Proof points.
- Contact CTA.

Workshop page:

- Audience.
- Outcomes.
- Topics.
- Format.
- Prerequisites.
- Inquiry CTA.

## 14. Complete Sitemap

### 14.1 Initial V2 Sitemap

- `/`
  - Premium landing page
- `/about`
  - Founder story, technical background, brand mission
- `/projects`
  - Project index
- `/projects/[slug]`
  - Project detail
- `/writing`
  - Writing index
- `/writing/[slug]`
  - Technical article
- `/contact`
  - Contact and follow links

### 14.2 Near-Future Sitemap

- `/labs`
  - Experiments, prototypes, demos, and technical playgrounds
- `/tools`
  - Public tools, calculators, templates, or utilities
- `/open-source`
  - Repository highlights and contribution paths
- `/workshops`
  - Education and workshop offerings
- `/consulting`
  - Future consulting overview

### 14.3 Long-Term Sitemap

- `/case-studies`
  - Consulting or implementation stories
- `/case-studies/[slug]`
- `/talks`
  - Talks, videos, conference sessions, livestreams
- `/uses`
  - Tools, stack, and recommended resources
- `/newsletter`
  - Subscription page or archive
- `/now`
  - Current focus and active experiments

## 15. Homepage Section-by-Section Breakdown

### 15.1 Global Header

Purpose:
Provide orientation without adding visual noise.

Content:

- Cloud Goes Frazier wordmark or compact logo.
- Primary navigation.
- GitHub icon link.
- LinkedIn icon link.
- Optional "Contact" CTA.

Requirements:

- Sticky or gently persistent on desktop after hero scroll.
- Transparent or glass-like at top, solid subtle background after scroll.
- Must remain readable over cloud visuals.
- Must have accessible focus states and mobile menu.

Rationale:
The header should support the premium cloud-platform feel and make the site feel like a real product surface, not a one-page profile.

### 15.2 Hero Section

Purpose:
Establish brand, category, and emotional tone immediately.

Recommended content hierarchy:

- Brand name or concise category headline.
- One-sentence positioning statement.
- Supporting copy naming AI engineering, Kubernetes, cloud infrastructure, automation, and platform engineering.
- Primary CTA: "Explore the work" or "View projects."
- Secondary CTA: "Read the field notes" or "Connect."

Visual direction:

- White-to-blue atmospheric cloud field.
- Layered translucent cloud forms.
- Subtle infrastructure hints: grid lines, node paths, cluster geometry, faint terminal-like coordinates, or network arcs.
- No heavy dark hero unless used as a brief contrast layer later.

Rationale:
The hero must immediately shift perception from personal page to premium technical brand. The brand name should remain a first-viewport signal.

### 15.3 Cloud Scrolling Narrative

Purpose:
Create the signature experience: visitors feel like they are moving through clouds while discovering the brand's technical pillars.

Structure:

- Scroll from bright upper cloud layer into more defined infrastructure layers.
- Each layer introduces one pillar:
  - AI Engineering
  - Kubernetes
  - Cloud Infrastructure
  - Automation
  - Platform Engineering
  - Education and Open Source

Behavior:

- Parallax cloud layers move at different speeds.
- Fine-line diagrams fade in as scroll progresses.
- Content panels should remain anchored and readable.
- Motion should be disabled or simplified with `prefers-reduced-motion`.

Rationale:
The scrolling concept turns a broad technical portfolio into a memorable experience while reinforcing cloud infrastructure as the visual foundation.

### 15.4 Focus Areas

Purpose:
Make the brand pillars scannable and concrete.

Recommended cards or panels:

- AI Engineering
- Kubernetes
- Cloud Infrastructure
- Automation
- Platform Engineering
- Technical Education

Each item should include:

- Short title.
- One-sentence description.
- Optional icon or diagram motif.
- Link to relevant writing/projects when available.

Rationale:
The current site has three focus cards. V2 should preserve the clarity but expand to match the intended brand scope and future content paths.

### 15.5 Featured Work

Purpose:
Provide proof of execution.

Content:

- 3 to 5 featured projects, repositories, labs, or experiments.
- Each feature should describe the problem, system, and artifact.
- Include GitHub/demo links where available.

States:

- If projects are not ready, use "Active Labs" or "Coming Soon" sparingly.
- Avoid placeholder-heavy sections. It is better to feature fewer strong items.

Rationale:
Premium technical brands need evidence. The current page states expertise, but v2 should show it.

### 15.6 Technical Writing Preview

Purpose:
Introduce education and thought leadership.

Content:

- Latest or featured technical notes.
- Topic tags.
- Short excerpts.
- Link to writing index.

Suggested categories:

- AI Engineering
- Kubernetes
- Infrastructure Automation
- Platform Engineering
- Field Notes
- Tutorials

Rationale:
Writing supports SEO, education, credibility, and future workshops.

### 15.7 About / Founder Signal

Purpose:
Preserve the practitioner-led nature of the brand.

Content:

- Brief founder bio.
- Practical background in cloud engineering, Kubernetes platforms, GPU systems, and customer-facing infrastructure.
- Link to full about page.

Tone:

- First-person can be used, but should be concise and polished.
- Avoid making the homepage feel like a resume.

Rationale:
A founder-led brand benefits from personal credibility, but v2 should keep the homepage centered on the technical brand and user value.

### 15.8 Open Source and Community

Purpose:
Connect public work to technical credibility.

Content:

- GitHub link.
- Featured repositories when available.
- Contribution or collaboration framing.
- Optional stats if accurate and maintained.

Rationale:
Open source should be a visible part of the brand, especially for technical visitors.

### 15.9 Contact / Future Consulting CTA

Purpose:
Create a soft conversion path without over-selling.

Content:

- "Follow the work" links: GitHub, LinkedIn.
- "For collaborations or future consulting inquiries..." contact path.
- Optional email or contact form.

Rationale:
Consulting is a future business direction. The site should make that path possible while avoiding a premature agency feel.

### 15.10 Footer

Purpose:
Provide closure, persistent links, and site utility.

Content:

- Brand name.
- Short tagline.
- Sitemap links.
- Social links.
- Copyright.

Visual direction:

- Clean, calm, lightly technical.
- Could use a final low-contrast cloud horizon or infrastructure grid fade.

## 16. Candidate Featured Work

The MVP should include a Featured Work / Active Labs section that provides early proof without requiring a full project-detail system. Candidate items should be treated as proof modules, not implementation tickets.

Potential initial proof items:

- `cloud-goes-frazier website`
  - Positioning: the redesigned site itself as a public brand and platform-engineering artifact.
  - Proof angle: modern Next.js, performance discipline, accessibility readiness, visual system development, and cloud-inspired interaction design.
  - MVP treatment: feature as "Building the brand platform" or "Website v2 lab" if the redesign process is documented.

- `homelab-gitops`
  - Positioning: infrastructure automation and GitOps practice in a personal lab environment.
  - Proof angle: Kubernetes operations, declarative infrastructure, automation patterns, and platform thinking.
  - MVP treatment: feature as an active lab with GitHub link, short problem statement, and system diagram if available.

- `RUN-Hackfest-2025`
  - Positioning: event, challenge, or hackfest work that demonstrates execution under constraints.
  - Proof angle: applied engineering, rapid prototyping, collaboration, AI/cloud experimentation, or technical storytelling depending on the final project context.
  - MVP treatment: feature only if the public artifact, repo, writeup, or outcome is ready to share.

- Future AI/Kubernetes lab
  - Positioning: upcoming practical lab connecting AI engineering with Kubernetes or cloud-native infrastructure.
  - Proof angle: LLM workflows, inference patterns, cluster deployment, observability, automation, or platform enablement.
  - MVP treatment: include as "In progress" only if it has a clear description and does not feel like filler.

Selection guidance:

- Prefer 2 to 4 strong proof items over a larger list of weak placeholders.
- Each item should answer: what problem it explores, what system or artifact exists, and why it matters to the brand.
- Use "Active Labs" language when an item is real but still evolving.
- Avoid over-promising consulting outcomes or production claims unless they are backed by public artifacts.

Rationale:
The current site states expertise but does not show enough proof. These candidate items can make the MVP feel concrete while preserving honesty about work that is still evolving.

## 17. UX Goals

Primary UX goals:

- Visitors understand the brand within 10 seconds.
- Visitors can identify the core technical pillars without reading long paragraphs.
- Visitors can reach GitHub, LinkedIn, projects, writing, or contact within one click from the homepage.
- The homepage tells a coherent story from brand to proof to follow/contact.
- The experience feels premium and fast on desktop and mobile.
- Motion supports comprehension and atmosphere without interfering with reading.
- The site can scale from one page to a content platform without redesigning the foundation.

UX principles:

- Lead with clarity.
- Show proof early.
- Keep interaction predictable.
- Use motion to reveal structure, not to decorate.
- Keep page sections visually distinct without excessive cards.
- Make technical depth visible but not overwhelming.

## 18. Visual Design Direction

### 18.1 Overall Direction

The design should evoke a premium cloud platform:

- Bright atmospheric backgrounds.
- White, blue, and gray palette.
- Subtle depth and translucency.
- Crisp technical linework.
- Spacious but information-dense layouts.
- High-quality typography.
- Precise micro-interactions.

The visual system should combine two ideas:

- Cloud atmosphere: softness, depth, movement, light.
- Infrastructure systems: grids, nodes, diagrams, topology, precision.

### 18.2 Layout

Recommended layout characteristics:

- Full-width atmospheric sections with constrained content.
- Strong hero with layered visual field.
- Alternating narrative layers as the user scrolls.
- Fewer, stronger content modules rather than many small generic cards.
- Clear page rhythm: hero, pillars, proof, writing, about, contact.

Avoid:

- Generic marketing SaaS landing page composition.
- Overuse of floating cards.
- Dark-only sections.
- Heavy gradients that make text hard to read.
- Decorative clouds that feel cartoonish.

### 18.3 Imagery and Graphic Language

Recommended motifs:

- Cloud layers.
- Faint distributed systems diagrams.
- Kubernetes-like node topology, without copying official branding.
- Network paths and routing lines.
- Terminal-grid coordinates.
- Abstract infrastructure planes.
- Soft atmospheric depth.

Use:

- CSS and canvas/WebGL where appropriate for subtle cloud motion.
- Static optimized raster or vector assets for performance-sensitive backgrounds.
- Real screenshots and diagrams for projects when available.

Avoid:

- Stock cloud photography that feels generic.
- Cartoon cloud icons.
- Overly futuristic neon visuals.
- Busy network graphics behind body copy.

## 19. Color Palette Recommendations

The palette should be white, blue, and gray led, with restrained accents.

### 19.1 Core Palette

- Cloud White: `#FFFFFF`
- Ice White: `#F7FAFC`
- Mist Gray: `#EEF3F8`
- Cool Gray: `#CBD5E1`
- Slate Gray: `#475569`
- Deep Slate: `#0F172A`
- Sky Blue: `#38BDF8`
- Platform Blue: `#2563EB`
- Deep Cloud Blue: `#1E40AF`

### 19.2 Accent Palette

Use accents sparingly:

- Signal Cyan: `#06B6D4`
- Success Green: `#10B981`
- Warning Amber: `#F59E0B`

### 19.3 Usage Guidance

- Use white and ice white as dominant backgrounds.
- Use mist gray and cool gray for section depth, borders, and atmospheric layers.
- Use platform blue for primary actions, active states, and key brand moments.
- Use deep slate for text and high-contrast sections.
- Use sky blue and cyan for technical highlights, diagrams, and motion accents.
- Avoid making every element blue. The premium feel depends on restraint.

### 19.4 Rationale

White, blue, and gray directly support the cloud-platform vision. A brighter palette also distinguishes the redesign from the current black landing page and makes the brand feel more open, premium, and productized.

## 20. Typography Recommendations

### 20.1 Current State

The application already loads Geist and Geist Mono through Next font integration. These are strong defaults for a technical brand.

### 20.2 Recommended Direction

Primary sans:

- Geist Sans, Inter, or IBM Plex Sans.

Monospace:

- Geist Mono, IBM Plex Mono, or JetBrains Mono.

Suggested hierarchy:

- Hero headline: large, confident, tight but not cramped.
- Section headings: clear, restrained, technical.
- Body copy: highly readable, generous line height.
- Technical labels: monospace, small, low-contrast, used sparingly.
- Navigation: medium weight, compact, clear.

### 20.3 Typography Principles

- Keep letter spacing neutral.
- Avoid oversized type inside dense modules.
- Use monospace as a technical accent, not as the whole brand voice.
- Prioritize readability for long-form technical articles.
- Maintain strong contrast across cloud backgrounds.

### 20.4 Rationale

Geist aligns well with modern developer tools and technical platforms. Pairing sans typography with selective monospace details can communicate precision without making the whole site feel like a terminal.

## 21. Animation and Motion Concepts

### 21.1 Motion Principles

Motion should be:

- Subtle.
- Purposeful.
- Responsive.
- Optional for accessibility.
- Performance-safe.

Motion should not:

- Distract from reading.
- Trigger layout shifts.
- Consume excessive CPU/GPU on mobile.
- Become the primary content.

### 21.2 Recommended Motion Patterns

- Slow parallax cloud drift.
- Scroll-linked opacity and depth transitions.
- Fine-line infrastructure diagrams drawing in subtly.
- Hover states that feel precise and quick.
- Small CTA transitions.
- Section entrance fades with slight vertical movement.
- Header background transition after scroll.

### 21.3 Avoid

- Constant large animations.
- Excessive particle fields.
- Heavy 3D scenes on every viewport.
- Auto-playing motion that cannot be reduced.
- Scroll hijacking.

### 21.4 Technical Considerations

- Use CSS transforms and opacity where possible.
- Use `prefers-reduced-motion` to disable parallax and animated drawing.
- Consider Framer Motion only if the added dependency is justified.
- Consider CSS-only motion for v2 launch to protect performance.
- If canvas/WebGL is used for the cloud field, provide static fallbacks.

## 22. Cloud Scrolling Concept

### 22.1 Concept Summary

The signature homepage interaction should make the visitor feel as if they are descending through layers of modern cloud infrastructure.

The scroll journey:

1. Upper atmosphere: brand introduction and calm cloud field.
2. Cloud layer: AI engineering and automation emerge through light motion.
3. Infrastructure layer: Kubernetes, networks, and platform systems become visible.
4. Build layer: projects, tools, and labs provide proof.
5. Knowledge layer: writing, education, workshops, and open source.
6. Horizon layer: contact, collaboration, and future consulting.

### 22.2 Visual Behavior

- Clouds move at different depths.
- Background shifts from bright white to pale blue and back to clean white.
- Diagram lines appear and disappear with scroll progress.
- Content remains in stable, readable positions.
- The experience feels spatial but not theatrical.

### 22.3 Content Behavior

Each scroll layer should map to a content layer. The visual experience should never be separate from the message.

Examples:

- AI layer: faint inference graph or prompt/tool chain diagram.
- Kubernetes layer: node and cluster topology.
- Automation layer: pipeline, event, and workflow paths.
- Platform layer: service catalog or control plane motif.
- Education layer: notes, diagrams, and lab references.

### 22.4 Rationale

This gives the site a memorable brand signature while reinforcing the core idea: Cloud Goes Frazier operates across layers of cloud, automation, and AI infrastructure.

## 23. Technology Stack Recommendations

### 23.1 Keep

- Next.js App Router.
- TypeScript.
- Tailwind CSS.
- Vercel hosting.
- Next font optimization.

Rationale:
The existing stack is modern, fast, familiar, and well-suited to a premium content and brand site.

### 23.2 Add or Consider

Content:

- MDX for technical articles and project pages.
- Contentlayer, Velite, or a simple filesystem-based content layer if content volume grows.
- Frontmatter for title, summary, tags, publish date, canonical URL, and featured image.

Design and UI:

- A small internal component library for sections, buttons, typography, project cards, and article previews.
- `lucide-react` for icons if icons are needed.
- CSS custom properties for theme tokens.

Motion:

- CSS transitions and scroll-driven classes for initial launch.
- Framer Motion only if the team needs coordinated animation states.
- Canvas or WebGL only for the cloud field if static/CSS options cannot achieve the desired feel.

SEO:

- Next metadata API.
- Open Graph image generation.
- Sitemap generation.
- RSS feed when writing launches.

Analytics:

- Vercel Analytics or Plausible.
- Avoid invasive tracking.

### 23.3 Runtime Requirements

- Standardize local development on Node.js 20.9.0 or newer.
- Add `.nvmrc`, `.node-version`, or Volta configuration.
- Ensure CI and Vercel use the same supported Node version.

### 23.4 Rationale

The project does not need a heavy application framework beyond Next.js. The main technical challenge is creating a premium, performant visual experience while supporting future content growth.

## 24. Accessibility Goals

Accessibility requirements:

- Meet WCAG 2.2 AA where practical.
- Maintain strong color contrast across cloud backgrounds.
- Provide visible keyboard focus states.
- Support full keyboard navigation.
- Use semantic HTML landmarks.
- Provide descriptive alt text for meaningful images.
- Mark decorative cloud visuals as hidden from assistive technology.
- Respect `prefers-reduced-motion`.
- Ensure mobile menu is keyboard and screen-reader accessible.
- Avoid text over busy backgrounds unless contrast is guaranteed.
- Ensure touch targets are at least 44px where applicable.

Rationale:
A premium technical brand should feel polished for every visitor. Accessibility also improves SEO, performance discipline, and implementation quality.

## 25. Performance Goals

Performance targets:

- Lighthouse Performance: 95+ on desktop, 90+ on mobile.
- Lighthouse Accessibility: 95+.
- Lighthouse SEO: 95+.
- Largest Contentful Paint: under 2.5s on mobile.
- Cumulative Layout Shift: under 0.1.
- Interaction to Next Paint: under 200ms.
- Initial JS should remain minimal.
- Avoid loading heavy animation libraries unless justified.
- Optimize and preload only critical assets.
- Use responsive image sizing for project visuals.

Implementation guidelines:

- Prefer static rendering for content pages.
- Use server components by default.
- Keep client components limited to motion or interaction needs.
- Use CSS-first visuals where possible.
- Lazy-load below-the-fold media and animation.
- Provide static fallbacks for any advanced effects.

Rationale:
The site's brand promise includes speed and technical excellence. Performance is part of the product experience, not just an engineering metric.

## 26. SEO Strategy

### 26.1 SEO Positioning

Cloud Goes Frazier should target technical authority around:

- AI engineering
- Kubernetes
- Cloud infrastructure
- Platform engineering
- Infrastructure automation
- LLM tooling
- GPU platforms
- DevOps and developer productivity
- Technical education

### 26.2 Metadata Requirements

Replace default metadata with:

- Site title.
- Site description.
- Open Graph title and description.
- Open Graph image.
- Twitter/X card metadata.
- Canonical URL.
- Favicon and app icons.
- Structured metadata for articles when writing launches.

### 26.3 Content SEO

Recommended content categories:

- AI Engineering Notes.
- Kubernetes Field Notes.
- Platform Engineering Patterns.
- Automation Labs.
- Infrastructure Architecture.
- Open Source Builds.
- Workshop Notes.

Each article should include:

- Clear title.
- Meta description.
- Publish and updated dates.
- Tags.
- Internal links.
- Related project links.
- Diagrams or visuals when useful.

### 26.4 Technical SEO

Requirements:

- Generate `sitemap.xml`.
- Generate `robots.txt`.
- Use semantic headings.
- Use clean URLs.
- Avoid duplicate content.
- Add RSS feed when writing launches.
- Ensure good social previews.

### 26.5 Rationale

The future value of the brand depends heavily on discoverable technical content. SEO should be designed into the IA from the beginning rather than added later.

## 27. Mobile Experience

Mobile should not be a reduced version of desktop. It should feel designed for small screens.

Requirements:

- Hero must communicate brand and category without requiring scroll.
- Cloud visuals must be lighter and less CPU-intensive on mobile.
- Navigation should collapse into a simple accessible menu.
- CTAs should remain thumb-friendly.
- Section rhythm should avoid long walls of text.
- Project and writing previews should stack cleanly.
- Motion should be reduced by default on lower-power devices if needed.
- Text must never overlap visuals.
- Footer links should remain easy to tap.

Rationale:
Many visitors will arrive from social links, GitHub, LinkedIn, or mobile search. The premium impression must hold on mobile.

## 28. Content Requirements

### 28.1 Homepage Copy Requirements

The homepage should answer:

- What is Cloud Goes Frazier?
- What technical domains does it cover?
- Why should I trust it?
- What can I explore now?
- How can I follow, contact, or collaborate?

### 28.2 Proof Requirements

At launch, the site should include at least one of:

- Featured projects.
- Featured GitHub repositories.
- Technical diagrams.
- Writing previews.
- Project screenshots.
- Short field notes.

If proof assets are not ready, the launch should still include a clear "Active Labs" or "Building in public" section that frames the roadmap honestly.

### 28.3 Voice and Tone

Recommended voice:

- Direct.
- Technical.
- Calm.
- Specific.
- Practitioner-led.
- Curious.

Avoid:

- "Revolutionary AI" language.
- Generic "unlock the power" language.
- Buzzword stacking.
- Over-explaining simple concepts.
- Resume-style self-description on the homepage.

## 29. Rationale for Major Design Decisions

### 29.1 Shift From Dark Personal Page to Bright Cloud Platform

Rationale:
The current black design is clean, but it does not support the requested cloud-inspired premium platform feel. A bright white, blue, and gray palette better communicates cloud infrastructure, clarity, and confidence.

### 29.2 Lead With Brand and System-Level Expertise

Rationale:
The v2 audience includes technical practitioners and future decision-makers. The site should establish a technical brand, not just introduce a person.

### 29.3 Use Cloud Scrolling as the Signature Interaction

Rationale:
The cloud-scrolling concept provides a memorable identity and ties directly to the brand name. It should make the homepage feel designed, not templated.

### 29.4 Build IA Before Content Volume Exists

Rationale:
Even if the site starts small, the brand needs room for writing, projects, labs, open source, workshops, and consulting. A scalable IA prevents future redesign churn.

### 29.5 Keep Consulting Soft at Launch

Rationale:
Consulting is a future direction. The site should enable inbound interest without making unsupported claims or feeling sales-led before the offering is defined.

### 29.6 Prioritize Proof Over Claims

Rationale:
Technical audiences trust artifacts. Projects, diagrams, writing, repos, and labs will carry more credibility than abstract positioning.

## 30. Measurement and Success Metrics

### 30.1 Launch Metrics

- Homepage loads quickly on desktop and mobile.
- Visitor can understand the brand within 10 seconds.
- Navigation paths to projects, writing, GitHub, LinkedIn, and contact are clear.
- Metadata and social previews render correctly.
- Lighthouse targets are met.

### 30.2 Growth Metrics

- Organic search impressions for target technical topics.
- Click-through rate from search.
- GitHub outbound clicks.
- LinkedIn outbound clicks.
- Project detail page engagement.
- Article engagement and internal link clicks.
- Contact or collaboration inquiries.
- Newsletter or update signups if added.

### 30.3 Qualitative Metrics

- Does the site feel premium?
- Does it feel technically credible?
- Does it feel like a cloud platform rather than a personal blog?
- Do visitors understand the AI plus infrastructure positioning?
- Do technical users find useful next steps?

## 31. Future Roadmap

### Phase 1: Brand Foundation and Homepage V2

- Redesign homepage.
- Establish visual system.
- Add navigation.
- Replace default metadata.
- Implement cloud-scrolling concept.
- Add focus areas and proof section.
- Add contact/follow section.
- Ensure accessibility and performance targets.

### Phase 2: Projects and Writing

- Add project index.
- Add project detail template.
- Add writing index.
- Add article template.
- Add tags and related links.
- Add RSS feed.
- Add sitemap generation.

### Phase 3: Labs, Tools, and Open Source

- Add labs index.
- Add tools section.
- Feature open source repositories.
- Add demos where practical.
- Add architecture diagrams and downloadable resources.

### Phase 4: Technical Education

- Add workshop pages.
- Add learning paths.
- Add lab guides.
- Add recommended resources.
- Add signup or inquiry path for workshops.

### Phase 5: Consulting

- Add consulting overview page.
- Define service areas:
  - AI infrastructure strategy.
  - Kubernetes platform reviews.
  - Automation and platform engineering.
  - Developer productivity systems.
  - Technical enablement and workshops.
- Add contact form or inquiry workflow.
- Add case studies when available.

### Phase 6: Brand Expansion

- Add newsletter.
- Add talks and videos.
- Add downloadable diagrams or templates.
- Add interactive infrastructure tools.
- Add community or collaboration features if demand exists.

## 32. Initial Implementation Guidance

Although this PRD does not request implementation, the eventual build should follow these principles:

- Keep the existing Next.js, TypeScript, Tailwind, and Vercel foundation.
- Start with a polished homepage and scalable IA.
- Introduce content templates only as content becomes available.
- Use static generation for content-heavy pages.
- Keep animation lightweight and accessible.
- Replace default metadata immediately.
- Standardize on Node 20+.
- Remove unused scaffold assets when no longer needed.
- Keep source structure clean as the site grows.

Recommended future structure:

- `src/app/page.tsx`
- `src/app/about/page.tsx`
- `src/app/projects/page.tsx`
- `src/app/projects/[slug]/page.tsx`
- `src/app/writing/page.tsx`
- `src/app/writing/[slug]/page.tsx`
- `src/app/contact/page.tsx`
- `src/components/`
- `src/content/`
- `src/lib/`
- `src/styles/`

## 33. Launch Readiness Checklist

- Homepage communicates premium technical brand.
- Cloud-scrolling concept works across desktop and mobile.
- Motion respects reduced-motion preferences.
- Header and navigation are accessible.
- Projects or proof section contains real content.
- GitHub and LinkedIn links are correct.
- Contact path is present.
- Metadata is complete.
- Open Graph image is ready.
- Sitemap and robots are configured.
- Lighthouse targets are met.
- Mobile layout is polished.
- No default Create Next App metadata remains.
- No unused scaffold visual assets appear in the UI.
- Content is specific, calm, and credible.

## 34. Summary

Website v2 should transform Cloud Goes Frazier from a minimal personal technical page into a premium cloud infrastructure and AI engineering brand. The redesigned experience should be bright, calm, technical, fast, and memorable. Its signature should be a cloud-scrolling narrative that connects the brand name to the work: AI engineering, Kubernetes, cloud infrastructure, automation, platform engineering, education, open source, and future consulting.

The first release should focus on brand clarity, strong information architecture, a polished homepage, performance, accessibility, and a scalable technical foundation. Future phases should expand into projects, writing, tools, labs, workshops, and consulting as the content and business model mature.
