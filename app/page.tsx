'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import CategorySection from '@/components/CategorySection'
import MenuCard from '@/components/MenuCard'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import { menuItems } from '@/data/menu'

export default function Home() {
  // Group items by category
  const biscuitsRusks = menuItems.filter((item) => item.category === 'Biscuits & Rusks')
  const cakes = menuItems.filter((item) => item.category === 'Cakes')
  const desserts = menuItems.filter((item) => item.category === 'Desserts')
  const brownies = menuItems.filter((item) => item.category === 'Brownies')
  const breadsBuns = menuItems.filter((item) => item.category === 'Breads & Buns')
  const cupcakes = menuItems.filter((item) => item.category === 'Cupcakes & Tea Cakes')
  const doughnuts = menuItems.filter((item) => item.category === 'Doughnuts')
  const chocolates = menuItems.filter((item) => item.category === 'Chocolates')

  return (
    <>
      <Header />
      <main>
        <Hero />

        {/* Biscuits & Rusks Section */}
        {biscuitsRusks.length > 0 && (
          <section id="biscuits-rusks" className="bg-white scroll-mt-20">
            <CategorySection title="Biscuits & Rusks" sectionId="biscuits-rusks">
              {biscuitsRusks.map((item) => (
                <MenuCard
                  key={item.id}
                  {...item}
                />
              ))}
            </CategorySection>
          </section>
        )}

        {/* Cakes Section */}
        {cakes.length > 0 && (
          <section id="cakes" className="bg-blush scroll-mt-20">
            <CategorySection title="Cakes" sectionId="cakes">
              {cakes.map((item) => (
                <MenuCard
                  key={item.id}
                  {...item}
                />
              ))}
            </CategorySection>
          </section>
        )}

        {/* Desserts Section */}
        {desserts.length > 0 && (
          <section id="desserts" className="bg-white scroll-mt-20">
            <CategorySection title="Desserts" sectionId="desserts">
              {desserts.map((item) => (
                <MenuCard
                  key={item.id}
                  {...item}
                />
              ))}
            </CategorySection>
          </section>
        )}

        {/* Brownies Section */}
        {brownies.length > 0 && (
          <section id="brownies" className="bg-blush scroll-mt-20">
            <CategorySection title="Brownies" sectionId="brownies">
              {brownies.map((item) => (
                <MenuCard
                  key={item.id}
                  {...item}
                />
              ))}
            </CategorySection>
          </section>
        )}

        {/* Breads & Buns Section */}
        {breadsBuns.length > 0 && (
          <section id="breads-buns" className="bg-white scroll-mt-20">
            <CategorySection title="Breads & Buns" sectionId="breads-buns">
              {breadsBuns.map((item) => (
                <MenuCard
                  key={item.id}
                  {...item}
                />
              ))}
            </CategorySection>
          </section>
        )}

        {/* Cupcakes & Tea Cakes Section */}
        {cupcakes.length > 0 && (
          <section id="cupcakes-tea-cakes" className="bg-blush scroll-mt-20">
            <CategorySection title="Cupcakes & Tea Cakes" sectionId="cupcakes-tea-cakes">
              {cupcakes.map((item) => (
                <MenuCard
                  key={item.id}
                  {...item}
                />
              ))}
            </CategorySection>
          </section>
        )}

        {/* Doughnuts Section */}
        {doughnuts.length > 0 && (
          <section id="doughnuts" className="bg-white scroll-mt-20">
            <CategorySection title="Doughnuts" sectionId="doughnuts">
              {doughnuts.map((item) => (
                <MenuCard
                  key={item.id}
                  {...item}
                />
              ))}
            </CategorySection>
          </section>
        )}

        {/* Chocolates Section */}
        {chocolates.length > 0 && (
          <section id="chocolates" className="bg-blush scroll-mt-20">
            <CategorySection title="Chocolates" sectionId="chocolates">
              {chocolates.map((item) => (
                <MenuCard
                  key={item.id}
                  {...item}
                />
              ))}
            </CategorySection>
          </section>
        )}

        {/* Contact & Enquiry Section */}
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
