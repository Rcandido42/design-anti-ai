# Rule 06: Content & Microcopy

## The Anti-Slop Principle
> "Design is communication. You cannot fix visual slop if the words on the page are empty AI boilerplate."

When AI generates an interface, it generates copy that sounds like a parody of enterprise marketing: *"Empower your organization to unlock infinite collaborative velocity with our AI-driven paradigm."* This hollow copy distorts layout, bloats buttons, and alienates real users.

---

## 1. The Symptoms of Sloppy Copy

1. **The Buzzword Thesaurus**:
   - Overuse of: *supercharge, unleash, unlock, seamless, next-gen, revolutionary, cutting-edge, elevate, empowered, transformative*.
2. **Vacuous Feature Bullets**:
   - *"Smart Analytics: Intelligently analyze your data with smart insights."* (Zero tangible facts, zero metrics, zero explanation).
3. **Overly Long, Ambiguous Buttons**:
   - Buttons labeled *"Get Started With Our Intelligent Cloud Journey Today"* instead of *"Start 14-day trial"* or *"Create account"*.
4. **Missing Empty & Error States**:
   - No copy written for when a list is empty, an API fails, or an input is invalid, or using generic *"Something went wrong"* without actionable remedies.
5. **Emoji Incontinence**:
   - Appending `🚀`, `✨`, `🔥`, `💡` to every single heading, table column, and link.

---

## 2. Intentional Copywriting Rules

### 2.1 The Specificity Test
Replace vague adjectives with specific verbs and measurable facts:
- **Bad**: *"Ultra-fast data processing for modern businesses."*
- **Good**: *"Ingests 250,000 events/sec with sub-5ms p99 latency."*

### 2.2 Functional Button Labels (Verb + Noun)
Buttons must declare their direct consequence:
- **Bad**: *"Click Here"*, *"Get Started"*, *"Explore Possibilities"*
- **Good**: *"Deploy to AWS"*, *"Download CSV"*, *"Invite team member"*, *"Save changes"*

### 2.3 Respectful, Actionable Error Copy
Every error message must state:
1. What happened.
2. Why it happened.
3. How to fix it.
- **Bad**: *"Error: An unexpected issue occurred."*
- **Good**: *"Invalid webhook URL: The endpoint must support HTTPS and return a 200 status code."*

---

## 3. Direct Code Transformations

### Anti-Pattern: Vague AI Marketing Copy
```html
<!-- BAD: Hollow buzzwords, vague CTA, zero domain substance -->
<div class="text-center py-12">
  <h2 class="text-3xl font-bold">Unleash Next-Gen AI Power ✨</h2>
  <p class="text-gray-500 mt-2">
    Seamlessly supercharge your business workflow with our revolutionary smart platform.
  </p>
  <button class="mt-4 px-6 py-3 bg-purple-600 text-white rounded-xl">
    Unlock Your Future 🚀
  </button>
</div>
```

### Remediated: Concise, Concrete, Product-Driven Copy
```html
<!-- GOOD: Factual, clear value proposition, explicit action -->
<div class="py-10 max-w-xl">
  <h2 class="text-2xl font-semibold tracking-tight text-foreground">
    Continuous integration for monorepos.
  </h2>
  <p class="text-sm text-muted-foreground mt-2 leading-relaxed">
    Only test what changed. Anti-Slop traces your TypeScript dependency graph and skips unchanged packages automatically.
  </p>
  <div class="mt-4 flex items-center gap-3">
    <button class="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-md hover:bg-primary/90 transition-colors">
      Connect GitHub repository
    </button>
    <a href="/docs/monorepo" class="text-sm text-muted-foreground hover:text-foreground transition-colors">
      View CI benchmarks →
    </a>
  </div>
</div>
```
