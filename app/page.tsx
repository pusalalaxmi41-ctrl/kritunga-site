const heroFrames = [
  {
    kicker: 'The first spark',
    title: 'A table set before the spice arrives.',
    copy: 'Warm wood, woven chairs, soft lamps, and the hush before a family meal begins.',
    image: '/assets/dining-calm.png',
  },
  {
    kicker: 'The Palegar note',
    title: 'Regional fire, served with polish.',
    copy: 'Kritunga keeps the meal rooted in Telugu appetite: deep masala, banana leaf, rice, ghee, and heat that lingers.',
    image: '/assets/kebab.png',
  },
  {
    kicker: 'The settle',
    title: 'Biryani lands at the center.',
    copy: 'Fragrant rice, spice-stained meat, bright onion, lemon, and the quiet pause before the first bite.',
    image: '/assets/biryani-plate.png',
  },
];

const business = {
  name: 'Kritunga Restaurant',
  teluguName: 'క్రితుంగా రెస్టారెంట్',
  tagline: "THE PALEGAR'S CUISINE",
  rating: '4.2 rating',
  reviews: '2,034 reviews',
  price: '₹200-₹600 per person',
  phoneDisplay: '088864 91011',
  phoneHref: 'tel:08886491011',
  address:
    'Plot No. 45A, 45B, 46, Pragathi Nagar Road, Opp. Indian Bank, Hyderabad, Telangana 500090.',
  services:
    'Dine-in, takeaway, no-contact delivery, table reservation, and online ordering.',
};

const dishes = [
  ['Kodi Biryani', 'Chicken Dum Biryani, Natukodi Biryani, Avakai Chicken Biryani'],
  ['Mamsam Biryani', 'Nalligosht, Mutton Dum, Mutton Kheema, mixed non-veg packs'],
  ['Rayalaseema Starters', 'Kodi Vepudu, Chicken Lollypop, Kurnool Fried Wings'],
  ['Curries & Roti', 'Paneer tikka masala, rich gravies, naan, roti, family table sides'],
];

const omniPrompts = [
  {
    label: 'Hero video',
    text: "Create a cinematic 8 second restaurant hero video for Kritunga Restaurant, The Palegar's Cuisine. Begin on a warm empty dining table with woven chairs and brass-toned pendant lights. Glide forward as steam and spice smoke reveal Telugu regional dishes on banana leaves: biryani rice, red chicken fry, charred kebab, lemon, onion, coriander. Premium South Indian family restaurant, warm wood, deep maroon, banana leaf green, soft gold light, realistic food texture, elegant camera movement, no readable text, no fake people faces, no invented signage.",
  },
  {
    label: 'Food still',
    text: 'Premium food photograph for Kritunga Restaurant: Andhra style biryani served on a banana leaf with charred chicken leg, onions, lemon, coriander, deep red masala, warm restaurant table, shallow depth of field, realistic steam, rich but natural color, no text.',
  },
  {
    label: 'Ambience still',
    text: 'Premium interior photograph inspired by Kritunga Restaurant: warm wooden tables, cane chairs, golden curtains, pendant lamps, subtle Telugu regional wall motifs, family dining ambience, clean modern South Indian restaurant, soft afternoon light, no text, no visible faces.',
  },
];

export default function Home() {
  return (
    <main>
      <nav className="topbar" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Kritunga home">
          <img src="/assets/kritunga-logo.png" alt="" />
          <span>
            <strong>Kritunga</strong>
            <small>{business.tagline}</small>
          </span>
        </a>
        <div className="navlinks">
          <a href="#story">Story</a>
          <a href="#menu">Menu</a>
          <a href="#visit">Visit</a>
        </div>
        <a className="navcta" href={business.phoneHref}>Call</a>
      </nav>

      <section id="top" className="hero">
        <div className="heroMedia">
          <video
            className="heroVideo"
            poster="/assets/dining-warm.png"
            muted
            loop
            playsInline
            aria-label="Kritunga ambience video"
          >
            <source src="/assets/google-omni-hero.mp4" type="video/mp4" />
          </video>
          <img className="heroFallback" src="/assets/dining-warm.png" alt="Warm Kritunga dining room with wooden tables and pendant lights" />
          <div className="heroShade" />
        </div>
        <div className="heroCopy">
          <p className="eyebrow">Hyderabad, Pragathi Nagar</p>
          <h1>{business.name}</h1>
          <p className="telugu">{business.teluguName}</p>
          <p className="lead">
            Regional South Indian cooking with the warmth of a family table and the fire of Rayalaseema appetite.
          </p>
          <div className="heroActions">
            <a href={business.phoneHref}>Reserve a table</a>
            <a href="#menu">See signature dishes</a>
          </div>
        </div>
        <div className="quickFacts" aria-label="Restaurant details">
          <span>{business.rating}</span>
          <span>{business.reviews}</span>
          <span>{business.price}</span>
        </div>
      </section>

      <section id="story" className="story">
        <div className="sectionIntro">
          <p className="eyebrow">The website story</p>
          <h2>From quiet room to full plate.</h2>
          <p>
            The page should move like a meal arriving: the room first, the aroma next, then the biryani and starters taking over the table.
          </p>
        </div>
        <div className="frameGrid">
          {heroFrames.map((frame) => (
            <article className="frame" key={frame.title}>
              <img src={frame.image} alt="" />
              <div>
                <p>{frame.kicker}</p>
                <h3>{frame.title}</h3>
                <span>{frame.copy}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="ambience">
        <img src="/assets/booth-detail.png" alt="Kritunga booth seating with warm wooden table and patterned partition" />
        <div>
          <p className="eyebrow">Ambience</p>
          <h2>Polished, warm, and still unmistakably regional.</h2>
          <p>
            Maroon from the logo, banana-leaf green from the plate, wood from the dining room, and soft gold from the lamps become the visual language of the site.
          </p>
        </div>
      </section>

      <section id="menu" className="menu">
        <div className="sectionIntro compact">
          <p className="eyebrow">Menu highlights</p>
          <h2>Built around biryani, fire, and family portions.</h2>
        </div>
        <div className="menuGrid">
          {dishes.map(([name, copy]) => (
            <article key={name}>
              <h3>{name}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
        <div className="dishStrip">
          <img src="/assets/starter.png" alt="Crisp orange fried starter in a red serving dish" />
          <img src="/assets/curry.png" alt="Creamy curry surrounded by spices on a dark surface" />
          <img src="/assets/kebab.png" alt="Charred chicken kebab served on banana leaf" />
        </div>
      </section>

      <section className="omni">
        <div className="sectionIntro compact">
          <p className="eyebrow">Google Omni handoff</p>
          <h2>Prompts for the media you will generate.</h2>
          <p>Paste these into Google Omni or Veo, then send me the final files and I will place them into the website.</p>
        </div>
        <div className="promptGrid">
          {omniPrompts.map((prompt) => (
            <article key={prompt.label}>
              <h3>{prompt.label}</h3>
              <p>{prompt.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="visit" className="visit">
        <div>
          <p className="eyebrow">Visit</p>
          <h2>2nd Floor, Pragathi Heights, Pragathi Nagar.</h2>
          <p>
            {business.address}
          </p>
        </div>
        <div className="visitCard">
          <span>Services</span>
          <p>{business.services}</p>
          <a href={business.phoneHref}>Call {business.phoneDisplay}</a>
        </div>
      </section>
    </main>
  );
}
