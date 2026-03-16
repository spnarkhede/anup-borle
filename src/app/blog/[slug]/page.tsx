import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts } from '@/data/blog';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

/* ── Minimal markdown → HTML transformer ── */
function renderMarkdown(md: string): string {
  const escaped = md
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  const lines = escaped.split('\n');
  const output: string[] = [];
  let inList = false;
  let listTag = '';

  const closeList = () => {
    if (inList) {
      output.push(`</${listTag}>`);
      inList = false;
      listTag = '';
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Headings
    if (line.startsWith('### ')) {
      closeList();
      output.push(`<h3>${inline(line.slice(4))}</h3>`);
      continue;
    }
    if (line.startsWith('## ')) {
      closeList();
      output.push(`<h2>${inline(line.slice(3))}</h2>`);
      continue;
    }
    if (line.startsWith('# ')) {
      closeList();
      output.push(`<h1>${inline(line.slice(2))}</h1>`);
      continue;
    }

    // Ordered list item: "1. text"
    const olMatch = line.match(/^\d+\.\s+(.+)/);
    if (olMatch) {
      if (!inList || listTag !== 'ol') {
        closeList();
        output.push('<ol>');
        inList = true;
        listTag = 'ol';
      }
      output.push(`<li>${inline(olMatch[1])}</li>`);
      continue;
    }

    // Unordered list item
    if (line.startsWith('- ') || line.startsWith('* ')) {
      if (!inList || listTag !== 'ul') {
        closeList();
        output.push('<ul>');
        inList = true;
        listTag = 'ul';
      }
      output.push(`<li>${inline(line.slice(2))}</li>`);
      continue;
    }

    // Empty line → close list or paragraph break
    if (line.trim() === '') {
      closeList();
      output.push('<br />');
      continue;
    }

    // Regular paragraph text
    closeList();
    output.push(`<p>${inline(line)}</p>`);
  }

  closeList();
  return output.join('');
}

function inline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code>$1</code>');
}

const categoryColors: Record<string, string> = {
  Strategy: '#1a2b4a',
  Execution: '#0ea5a0',
  Leadership: '#7c3aed',
  Trends: '#d4af37',
};

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const related = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  const html = renderMarkdown(post.content.trim());
  const accentColor = categoryColors[post.category] ?? '#0ea5a0';

  return (
    <div className="pt-16 md:pt-18">
      {/* Hero / header */}
      <section
        className="py-16 md:py-24 relative overflow-hidden"
        style={{ backgroundColor: accentColor }}
        aria-label="Article header"
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium mb-8 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold tracking-wider uppercase">
              {post.category}
            </span>
            <span className="text-white/70 text-sm">{post.readTime}</span>
            {post.featured && (
              <span className="px-3 py-1 rounded-full bg-[#d4af37]/30 text-[#d4af37] text-xs font-semibold">
                Featured
              </span>
            )}
          </div>

          <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-6">
            {post.title}
          </h1>

          <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-2xl">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-white/70">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-white text-xs font-bold">AB</span>
              </div>
              <span>Anup Borle</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tags strip */}
      <div className="bg-white dark:bg-[#0f172a] border-b border-[#e5e7eb] dark:border-[#334155]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-[#f9fafb] dark:bg-[#1e293b] border border-[#e5e7eb] dark:border-[#334155] text-xs font-medium text-[#6b7280] dark:text-[#94a3b8]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Article body */}
      <article className="py-16 bg-white dark:bg-[#0f172a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="prose-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </article>

      {/* Author card */}
      <section className="py-12 bg-[#f9fafb] dark:bg-[#1e293b]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-5 p-6 bg-white dark:bg-[#0f172a] rounded-2xl border border-[#e5e7eb] dark:border-[#334155]">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1a2b4a] to-[#0ea5a0] dark:from-[#3b82f6] dark:to-[#14b8a6] flex items-center justify-center flex-shrink-0">
              <span className="font-heading font-bold text-white text-xl">AB</span>
            </div>
            <div>
              <p className="font-heading font-bold text-[#1f2937] dark:text-[#f8fafc] mb-1">Anup Borle</p>
              <p className="text-sm text-[#6b7280] dark:text-[#94a3b8] mb-3">
                SRE Engineer – AVP · 12+ years in SRE, CI/CD automation, and DevOps engineering at Deutsche Bank, Credit Suisse, and Nokia
              </p>
              <Link
                href="/about"
                className="text-sm font-semibold text-[#0ea5a0] dark:text-[#14b8a6] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ea5a0] rounded"
              >
                About Anup →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="py-16 bg-white dark:bg-[#0f172a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-2xl font-bold text-[#1f2937] dark:text-[#f8fafc] mb-8">
              More in {post.category}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/blog/${rel.slug}`}
                  className="group block bg-[#f9fafb] dark:bg-[#1e293b] rounded-xl border border-[#e5e7eb] dark:border-[#334155] overflow-hidden card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ea5a0] focus-visible:ring-offset-2"
                >
                  <div className="h-1.5" style={{ backgroundColor: rel.coverColor }} />
                  <div className="p-5">
                    <p className="text-xs text-[#6b7280] dark:text-[#94a3b8] mb-2">{rel.readTime}</p>
                    <h3 className="font-heading font-semibold text-sm text-[#1f2937] dark:text-[#f8fafc] line-clamp-2 group-hover:text-[#0ea5a0] dark:group-hover:text-[#14b8a6] transition-colors duration-200">
                      {rel.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#1a2b4a] to-[#0ea5a0] dark:from-[#1e293b] dark:to-[#0f172a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3">
            Want to work together?
          </h2>
          <p className="text-white/80 mb-8">
            I'm available for consulting, advisory, and select full-time roles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-[#1a2b4a] font-bold rounded-xl hover:bg-white/90 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-[#1a2b4a] focus-visible:ring-offset-2"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-white/40 text-white font-bold rounded-xl hover:bg-white/10 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Read More Articles
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
