import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getProductBySlug, products } from "@/lib/products";
import NotFound from "./NotFound";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  if (!product) {
    return <NotFound />;
  }

  const relatedProducts = products.filter((item) => item.slug !== product.slug);

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="py-24 surface-green">
          <div className="container max-w-5xl">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary mb-8 hover:opacity-80 transition-opacity"
            >
              <ArrowLeft size={16} />
              Back to Products
            </Link>

            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <product.icon className="text-primary" size={28} />
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${product.tagColor}`}>
                    {product.tag}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">{product.name}</h1>
                <p className="text-xl text-primary font-medium mb-6">{product.headline}</p>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">{product.description}</p>
                <div className="grid sm:grid-cols-3 gap-4 mt-8">
                  {product.outcomes.map((outcome) => (
                    <div key={outcome} className="rounded-2xl border border-border bg-background/70 p-5">
                      <p className="text-sm font-medium text-foreground">{outcome}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
                <h2 className="text-lg font-bold text-foreground mb-4">Why It Matters</h2>
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={product.ctaHref}
                  target={product.ctaExternal ? "_blank" : undefined}
                  rel={product.ctaExternal ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                >
                  {product.ctaLabel}
                  {product.ctaExternal ? <ArrowUpRight size={16} /> : null}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container max-w-5xl">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="rounded-3xl border border-border bg-card p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">The Problem</h2>
                <p className="text-muted-foreground leading-relaxed">{product.problem}</p>
              </div>

              <div className="rounded-3xl border border-border bg-card p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Built For</h2>
                <ul className="space-y-3">
                  {product.builtFor.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-border bg-card p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Core Capabilities</h2>
                <ul className="space-y-3">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="container max-w-5xl">
            <div className="grid lg:grid-cols-[1fr_0.9fr] gap-8">
              <div className="rounded-3xl border border-border bg-muted p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">How It Works</h2>
                <div className="space-y-4">
                  {product.workflow.map((step, index) => (
                    <div key={step} className="flex gap-4">
                      <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-muted-foreground leading-relaxed pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-border bg-card p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Explore More Products</h2>
                <div className="space-y-4">
                  {relatedProducts.map((item) => (
                    <Link
                      key={item.slug}
                      to={`/products/${item.slug}`}
                      className="block rounded-2xl bg-background border border-border p-5 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center justify-between gap-4 mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                            <item.icon className="text-primary" size={20} />
                          </div>
                          <span className="font-semibold text-foreground">{item.name}</span>
                        </div>
                        <ArrowUpRight size={16} className="text-muted-foreground" />
                      </div>
                      <p className="text-sm text-muted-foreground">{item.headline}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default ProductDetail;
