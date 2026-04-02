<template>
  <div>
    <AppNav />

    <!-- Hero -->
    <section class="news-hero">
      <div class="news-orb news-orb1"></div>
      <div class="news-orb news-orb2"></div>
      <div class="sec">
        <div class="eyebrow">Insights & News</div>
        <h1 class="news-title">
          Stay Up To Date On The<br />Latest Industry News
        </h1>
        <p class="news-lead">
          Insights, guides, and thought leadership from the Proxima Systems team
          — covering AI, cloud computing, cybersecurity, and the future of
          enterprise IT.
        </p>

        <!-- Filter bar -->
        <div class="news-filters">
          <button
            v-for="cat in categories"
            :key="cat"
            :class="['filter-btn', { active: activeCategory === cat }]"
            @click="activeCategory = cat"
          >
            {{ cat }}
          </button>
        </div>
      </div>
    </section>

    <!-- Articles Grid -->
    <section class="news-body">
      <div class="sec">
        <!-- Featured article -->
        <div
          class="news-featured"
          v-if="featuredArticle && activeCategory === 'All'"
        >
          <div class="feat-meta">
            <span class="feat-cat">{{ featuredArticle.category }}</span>
            <span class="feat-date">{{ featuredArticle.date }}</span>
          </div>
          <h2 class="feat-title">{{ featuredArticle.title }}</h2>
          <p class="feat-desc">{{ featuredArticle.excerpt }}</p>
          <a
            :href="featuredArticle.url"
            target="_blank"
            rel="noopener"
            class="feat-link"
          >
            Read Article →
          </a>
        </div>

        <!-- Articles grid -->
        <div class="news-grid">
          <a
            v-for="article in filteredArticles"
            :key="article.title"
            :href="article.url"
            target="_blank"
            rel="noopener"
            class="article-card"
          >
            <div class="article-img-wrap">
              <div :class="['article-img-placeholder', article.imgClass]">
                <span class="article-img-icon">{{ article.icon }}</span>
              </div>
            </div>
            <div class="article-body">
              <div class="article-meta">
                <span class="article-cat">{{ article.category }}</span>
                <span class="article-date">{{ article.date }}</span>
              </div>
              <h3 class="article-title">{{ article.title }}</h3>
              <p class="article-excerpt">{{ article.excerpt }}</p>
              <span class="article-read">Read more →</span>
            </div>
          </a>
        </div>

        <!-- Empty state -->
        <div v-if="filteredArticles.length === 0" class="news-empty">
          <div class="empty-icon">📭</div>
          <p>No articles in this category yet. Check back soon.</p>
        </div>
      </div>
    </section>

    <!-- Newsletter CTA -->
    <section class="news-cta-sec">
      <div class="sec">
        <div class="news-cta-box">
          <div class="news-cta-left">
            <div class="eyebrow">Stay Informed</div>
            <h3>Get the latest insights<br />delivered to your inbox</h3>
            <p>
              Industry news, AI trends, and cloud best practices — curated by
              the Proxima team.
            </p>
          </div>
          <div class="news-cta-right">
            <a href="mailto:contact@proximabiz.com" class="btn-p">
              Contact Us →
            </a>
            <a
              href="https://www.linkedin.com/company/proxima-biz"
              target="_blank"
              rel="noopener"
              class="btn-g"
            >
              Follow on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script setup>
useSeoMeta({
  title: "News & Insights – Proxima Systems",
  description:
    "Industry insights, AI and cloud news, and thought leadership from the Proxima Systems team.",
});

const activeCategory = ref("All");

const categories = [
  "All",
  "AI & Cloud",
  "Cybersecurity",
  "Cloud Computing",
  "Multicloud",
];

const featuredArticle = {
  category: "Cybersecurity",
  date: "October 19, 2023",
  title: "Are You Ready For Cyber Threats?",
  excerpt:
    "Cybersecurity is an ever-expanding discipline, where every move is crucial, and the risks are unparalleled. Businesses must adapt to an increasingly hostile digital landscape — here is how Proxima helps enterprises stay ahead.",
  url: "https://www.proximabiz.com/are-you-ready-for-cyber-threats-2/",
};

const articles = [
  {
    category: "Cybersecurity",
    date: "October 17, 2023",
    title: "What is Cloud Endpoint Protection?",
    excerpt:
      "In today's rapidly evolving digital landscape, the concept of endpoint has significantly extended beyond traditional workstations and servers to encompass a broad range of devices.",
    url: "https://www.proximabiz.com/what-is-cloud-endpoint-protection/",
    icon: "🛡️",
    imgClass: "img-security",
  },
  {
    category: "Cybersecurity",
    date: "October 17, 2023",
    title: "Are You Ready For Cyber Threats?",
    excerpt:
      "Cybersecurity is an ever-expanding discipline, where every move is crucial, and the risks are unparalleled. Businesses must adapt to the new threat landscape.",
    url: "https://www.proximabiz.com/are-you-ready-for-cyber-threats/",
    icon: "⚠️",
    imgClass: "img-threat",
  },
  {
    category: "Cloud Computing",
    date: "September 21, 2023",
    title: "Principle of Cloud Management: Ideal Balance",
    excerpt:
      "While the cloud can be useful for some things, it is not the ideal match for every application and workload. Finding the right balance is key to cost-effective operations.",
    url: "https://www.proximabiz.com/principle-of-cloud-management-ideal-balance/",
    icon: "☁️",
    imgClass: "img-cloud",
  },
  {
    category: "Cybersecurity",
    date: "September 11, 2023",
    title:
      "Enhancing Cybersecurity: Implementing Our Endpoint Security Solution",
    excerpt:
      "In today's digital era, where technology is an integral part of both our personal and professional lives, cybersecurity has never been more critical.",
    url: "https://www.proximabiz.com/enhancing-cybersecurity-implementing-our-endpoint-security-solution/",
    icon: "🔐",
    imgClass: "img-endpoint",
  },
  {
    category: "Cybersecurity",
    date: "August 30, 2023",
    title: "Threat Research: How It Affects Your Cloud Security Strategy",
    excerpt:
      "As the world has wholeheartedly embraced online-first living, our collective attack surface has expanded dramatically. Threat research is now a core pillar of cloud security strategy.",
    url: "https://www.proximabiz.com/threat-research-how-it-affects-your-cloud-security-strategy/",
    icon: "🔍",
    imgClass: "img-research",
  },
  {
    category: "Multicloud",
    date: "August 17, 2023",
    title: "Multi-cloud: Myth Versus Reality",
    excerpt:
      "Migrating to the cloud has now become the norm with the latest statistics showing that 98% of companies are using at least one cloud service. But what does multi-cloud really mean for your business?",
    url: "https://www.proximabiz.com/multi-cloud-myth-versus-reality/",
    icon: "🌐",
    imgClass: "img-multicloud",
  },
  {
    category: "Cloud Computing",
    date: "August 17, 2023",
    title: "Backup Cloud Repatriation | What Are The Best Practices?",
    excerpt:
      "Organisations are occasionally leaving cloud-based backup services to resume an on-premises workflow. There are several factors that can cause this trend — here are the best practices.",
    url: "https://www.proximabiz.com/backup-cloud-repatriation-what-are-the-best-practices/",
    icon: "💾",
    imgClass: "img-backup",
  },
  {
    category: "Cloud Computing",
    date: "August 4, 2023",
    title: "Cloud Computing: What's Trending & What To Expect?",
    excerpt:
      "If you want to stay competitive in today's fast-paced world, implementing cloud computing becomes a necessity. Here is what the industry looks like right now.",
    url: "https://www.proximabiz.com/cloud-computing-whats-trending-what-to-expect/",
    icon: "📈",
    imgClass: "img-trends",
  },
  {
    category: "Cloud Computing",
    date: "July 28, 2023",
    title: "Cloud or Premises for Your Database Strategy",
    excerpt:
      "For modern businesses, the database serves as the core of their tech stack and organisation. Hence, selecting the right deployment model is a critical strategic decision.",
    url: "https://www.proximabiz.com/cloud-or-premises-for-your-database-strategy/",
    icon: "🗄️",
    imgClass: "img-database",
  },
  {
    category: "Cloud Computing",
    date: "July 28, 2023",
    title: "What Are Cloud Computing Services Worth?",
    excerpt:
      "Value refers to the worth or usefulness that something holds for individuals or organisations. It is subjective and can vary greatly depending on context — so what is cloud actually worth?",
    url: "https://www.proximabiz.com/what-are-cloud-computing-services-worth/",
    icon: "💡",
    imgClass: "img-value",
  },
  {
    category: "Cloud Computing",
    date: "July 14, 2023",
    title: "Data Over Everything in the Cloud",
    excerpt:
      '"It\'s all about the data!" has been the battle cry for traditional systems architects. As cloud adoption accelerates, data strategy becomes the foundation of everything.',
    url: "https://www.proximabiz.com/data-over-everything-in-the-cloud/",
    icon: "📊",
    imgClass: "img-data",
  },
];

const filteredArticles = computed(() => {
  if (activeCategory.value === "All") return articles;
  const map = {
    "AI & Cloud": ["Cloud Computing", "Multicloud"],
    Cybersecurity: ["Cybersecurity"],
    "Cloud Computing": ["Cloud Computing"],
    Multicloud: ["Multicloud"],
  };
  const cats = map[activeCategory.value] || [];
  return articles.filter((a) => cats.includes(a.category));
});
</script>

<style scoped>
/* Hero */
.news-hero {
  position: relative;
  padding: 140px 0 60px;
  overflow: hidden;
  border-bottom: 1px solid var(--border);
}

.news-orb {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}

.news-orb1 {
  width: 700px;
  height: 700px;
  background: radial-gradient(
    circle,
    rgba(0, 201, 174, 0.06) 0%,
    transparent 68%
  );
  top: -200px;
  right: -120px;
}

.news-orb2 {
  width: 400px;
  height: 400px;
  background: radial-gradient(
    circle,
    rgba(27, 114, 245, 0.05) 0%,
    transparent 68%
  );
  bottom: -80px;
  left: 0;
}

.news-title {
  font-family: "Nunito", sans-serif;
  font-size: clamp(2rem, 3.8vw, 3.2rem);
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1.08;
  margin-bottom: 1rem;
}

.news-lead {
  font-size: 1rem;
  color: var(--muted);
  max-width: 600px;
  line-height: 1.75;
  margin-bottom: 2rem;
}

/* Filter bar */
.news-filters {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.filter-btn {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 20px;
  padding: 7px 16px;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--muted);
  cursor: pointer;
  transition:
    background 0.18s,
    color 0.18s,
    border-color 0.18s;
  font-family: "Nunito Sans", sans-serif;
}

.filter-btn:hover {
  color: var(--white);
  border-color: rgba(255, 255, 255, 0.2);
}

.filter-btn.active {
  background: rgba(0, 201, 174, 0.12);
  border-color: rgba(0, 201, 174, 0.3);
  color: var(--teal);
}

/* Body */
.news-body {
  padding: 60px 0 80px;
}

/* Featured */
.news-featured {
  background: linear-gradient(
    135deg,
    var(--ink3) 0%,
    rgba(27, 114, 245, 0.08) 100%
  );
  border: 1px solid rgba(0, 201, 174, 0.2);
  border-radius: 16px;
  padding: 40px 44px;
  margin-bottom: 48px;
  position: relative;
  overflow: hidden;
}

.news-featured::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--teal), transparent);
}

.feat-meta {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 14px;
}

.feat-cat {
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--teal);
  background: rgba(0, 201, 174, 0.1);
  border: 1px solid rgba(0, 201, 174, 0.2);
  border-radius: 20px;
  padding: 3px 10px;
}

.feat-date {
  font-size: 0.78rem;
  color: var(--muted2);
}

.feat-title {
  font-family: "Nunito", sans-serif;
  font-size: clamp(1.4rem, 2.4vw, 2rem);
  font-weight: 900;
  letter-spacing: -0.025em;
  margin-bottom: 12px;
  line-height: 1.2;
}

.feat-desc {
  font-size: 0.94rem;
  color: var(--muted);
  line-height: 1.72;
  max-width: 680px;
  margin-bottom: 20px;
}

.feat-link {
  font-size: 0.88rem;
  font-weight: 700;
  color: var(--teal);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  transition: gap 0.18s;
}

.feat-link:hover {
  gap: 9px;
}

/* Articles grid */
.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.article-card {
  background: var(--ink2);
  border: 1px solid var(--border);
  border-radius: 14px;
  overflow: hidden;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  transition:
    border-color 0.22s,
    transform 0.18s;
}

.article-card:hover {
  border-color: rgba(0, 201, 174, 0.28);
  transform: translateY(-4px);
}

/* Image placeholder with icon */
.article-img-wrap {
  height: 140px;
  flex-shrink: 0;
}

.article-img-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.article-img-icon {
  font-size: 2.4rem;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.4));
}

/* Colour variants for placeholders */
.img-security {
  background: linear-gradient(135deg, #0a1e3a 0%, #102840 100%);
}
.img-threat {
  background: linear-gradient(135deg, #1a0e20 0%, #2a0e2a 100%);
}
.img-cloud {
  background: linear-gradient(135deg, #051828 0%, #083050 100%);
}
.img-endpoint {
  background: linear-gradient(135deg, #0e1a10 0%, #112812 100%);
}
.img-research {
  background: linear-gradient(135deg, #0e1220 0%, #141c36 100%);
}
.img-multicloud {
  background: linear-gradient(135deg, #0a1420 0%, #102030 100%);
}
.img-backup {
  background: linear-gradient(135deg, #150e20 0%, #201430 100%);
}
.img-trends {
  background: linear-gradient(135deg, #0a1428 0%, #0c1c38 100%);
}
.img-database {
  background: linear-gradient(135deg, #100e1a 0%, #181428 100%);
}
.img-value {
  background: linear-gradient(135deg, #0a1820 0%, #0e2228 100%);
}
.img-data {
  background: linear-gradient(135deg, #0a1010 0%, #0e1818 100%);
}

.article-body {
  padding: 20px 22px 22px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.article-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  flex-wrap: wrap;
}

.article-cat {
  font-size: 0.66rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--teal);
}

.article-date {
  font-size: 0.74rem;
  color: var(--muted2);
}

.article-title {
  font-family: "Nunito", sans-serif;
  font-size: 0.97rem;
  font-weight: 800;
  letter-spacing: -0.01em;
  line-height: 1.35;
  margin-bottom: 8px;
  color: var(--white);
  flex: 1;
}

.article-excerpt {
  font-size: 0.82rem;
  color: var(--muted);
  line-height: 1.68;
  margin-bottom: 14px;
  display: -webkit-box;
  line-clamp: 3;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.article-read {
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--teal);
  display: inline-flex;
  align-items: center;
  gap: 4px;
  transition: gap 0.18s;
  margin-top: auto;
}

.article-card:hover .article-read {
  gap: 8px;
}

/* Empty state */
.news-empty {
  text-align: center;
  padding: 80px 0;
  color: var(--muted);
}

.empty-icon {
  font-size: 2.5rem;
  margin-bottom: 14px;
}

.news-empty p {
  font-size: 0.9rem;
}

/* Newsletter CTA */
.news-cta-sec {
  padding: 0 0 80px;
}

.news-cta-box {
  background: linear-gradient(135deg, var(--ink3), rgba(27, 114, 245, 0.1));
  border: 1px solid rgba(0, 201, 174, 0.18);
  border-radius: 16px;
  padding: 48px 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  flex-wrap: wrap;
}

.news-cta-left h3 {
  font-family: "Nunito", sans-serif;
  font-size: clamp(1.3rem, 2.2vw, 1.8rem);
  font-weight: 900;
  letter-spacing: -0.03em;
  margin: 8px 0;
  line-height: 1.15;
}

.news-cta-left p {
  font-size: 0.9rem;
  color: var(--muted);
  max-width: 380px;
  line-height: 1.68;
  margin-top: 8px;
}

.news-cta-right {
  display: flex;
  gap: 12px;
  flex-shrink: 0;
  flex-wrap: wrap;
}

/* Responsive */
@media (max-width: 900px) {
  .news-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .news-cta-box {
    flex-direction: column;
    padding: 36px 28px;
  }
}

@media (max-width: 600px) {
  .news-grid {
    grid-template-columns: 1fr;
  }
  .news-featured {
    padding: 28px 22px;
  }
}
</style>
