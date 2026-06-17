export const translations = {
  en: {
    nav: {
      brands: "Brands",
      founders: "Founders",
      operations: "Operations",
      about: "About",
      langLabel: "Language",
    },
    home: {
      exploreLabel: "Navigate",
      exploreHeading: "Where would you like to go?",
      links: [
        { to: "/brands", label: "Brands", desc: "Three companies, one standard." },
        { to: "/founders", label: "Founders", desc: "The people behind Charlotte." },
        { to: "/operations", label: "Operations", desc: "Always on, across time zones." },
        { to: "/about", label: "About", desc: "A Kentucky LLC, operating worldwide." },
      ],
    },
    hero: {
      badge: "Kentucky, USA · Operating outside EMEA",
      title: "Charlotte LLC",
      subtitle:
        "A holding company building and operating performant tech infrastructure. Telecom, hosting, and connectivity — engineered with intent, run by engineers.",
      ctaBrands: "Explore the brands",
      ctaAbout: "About the company",
      scroll: "Scroll",
    },
    brands: {
      label: "Portfolio",
      heading: "Three companies. One standard.",
      subheading:
        "Each brand operates independently with its own mission, yet shares a single conviction: serious infrastructure, honestly priced.",
      visit: "Visit",
      items: [
        {
          key: "telecom",
          index: "01",
          name: "Charlotte Telecommunications",
          tagline: "B2B telecom operator.",
          description:
            "3CX telephony, dedicated pro FTTH fiber and business mobile plans. A unified infrastructure, operated by engineers.",
          stats: [
            { label: "SLA", value: "99.99%" },
            { label: "Support", value: "24/7 EN/FR" },
            { label: "Fiber", value: "10 Gb/s" },
          ],
          domainLabel: "charlottetelecom.com",
          url: "https://charlottetelecom.com",
        },
        {
          key: "spy",
          index: "02",
          name: "spy.lu",
          tagline: "Offshore shared hosting.",
          description:
            "Full cPanel, Cyprus jurisdiction. Built for those who host what they want, the way they want. Reliable, fast, private.",
          stats: [
            { label: "Panel", value: "Full cPanel" },
            { label: "Location", value: "Nicosia, CY" },
            { label: "Privacy", value: "Absolute" },
          ],
          domainLabel: "spy.lu",
          url: "https://spy.lu",
        },
        {
          key: "snow",
          index: "03",
          name: "snow.gg",
          tagline: "Performant hosting, fair prices.",
          description:
            "Born from the passion of two Strasbourg students for technology. The mission: never overpay for disappointing performance.",
          stats: [
            { label: "Origin", value: "Strasbourg" },
            { label: "Focus", value: "Performance" },
            { label: "Support", value: "Human" },
          ],
          domainLabel: "snow.gg",
          url: "https://snow.gg",
        },
      ],
    },
    about: {
      label: "The Company",
      heading: "Registered in Kentucky. Operating worldwide, outside EMEA.",
      body: [
        "Charlotte LLC is a United States limited liability company registered in the Commonwealth of Kentucky. We own and operate a portfolio of independent technology brands spanning telecommunications and hosting.",
        "Our companies serve customers across the globe outside the EMEA region. We believe infrastructure should be fast, transparently priced, and supported by real people who understand the systems they run.",
        "Within Europe, our operations are handled by our sister company FLYX Ltd — ensuring local presence and compliance across the EMEA region, while Charlotte LLC operates everywhere else.",
      ],
      stats: [
        { value: "03", label: "Operating brands" },
        { value: "USA", label: "Kentucky LLC" },
        { value: "24/7", label: "Engineering support" },
      ],
    },
    founders: {
      label: "The founders",
      heading: "Built by two builders.",
      subheading:
        "Charlotte's hosting was born in Strasbourg, from two students who refused to accept the status quo of modern hosting.",
      quoteLabel: "In their words",
      members: [
        {
          name: "Pierre",
          role: "Founder of Charlotte & PIERREMGMT Ventures",
          bio: "A student and prodigious computing enthusiast, Pierre set himself a mission: to give clients fair value for their money — whether through his expertise in domain reselling (domaining) or in operating critical infrastructure.",
          quote: "Charlotte is my end goal: to build a fair, sustainable and high-quality internet. We must remove the barriers to web creation and hand the keys to online success to anyone, even without prior knowledge.",
        },
        {
          name: "Emeric",
          role: "Co-founder of Charlotte",
          bio: "Specialising in server and infrastructure management, Emeric puts his skills at the service of an ambitious project: offering a fairer alternative in the world of modern hosting. Breaking the mould is his motto.",
          quote: "A Schiltigheim student passionate about computing from a young age, I have one goal: to give the world a service that is high-quality, honest and transparent. That quest now takes shape with Charlotte, co-founded with my brilliant colleague and best friend Pierre — a project that starts small but thinks big, set to revolutionise modern hosting, break the codes, and finally restore an honest, pleasant business in a world where monopolistic giants inflate their prices and neglect customer satisfaction.",
        },
      ],
    },
    ticker: [
      "All systems operational",
      "SLA 99.99%",
      "Fiber 10 Gb/s",
      "Full cPanel",
      "Three brands · One standard",
      "Operating outside EMEA",
      "Human support, 24/7",
    ],
    ops: {
      label: "Global operations",
      heading: "Always on. Across time zones.",
      subheading:
        "From our Kentucky headquarters to our hosting and engineering hubs — a distributed operation that never sleeps.",
      live: "Live",
      cities: [
        { city: "Louisville", flag: "🇺🇸", region: "Kentucky, US", tz: "America/Kentucky/Louisville", role: "Headquarters", reason: "Our US base — a business-friendly Kentucky registration and central time-zone coverage for operations outside EMEA." },
        { city: "Saint Peter Port", flag: "🇬🇬", region: "Guernsey", tz: "Europe/Guernsey", role: "Infrastructure", reason: "A stable, self-governing jurisdiction with a strong privacy and data-protection regime, tax neutrality and resilient fibre links to the UK and mainland Europe." },
        { city: "Luxembourg", flag: "🇱🇺", region: "Luxembourg", tz: "Europe/Luxembourg", role: "Data center", reason: "A premier European data-centre hub: Tier IV facilities, dense carrier connectivity, political stability and one of the EU's most robust legal frameworks." },
        { city: "Nicosia", flag: "🇨🇾", region: "Cyprus", tz: "Asia/Nicosia", role: "Hosting · spy.lu", reason: "Cyprus jurisdiction for offshore hosting — discretion, favourable regulation and a gateway between Europe and the wider region." },
        { city: "Strasbourg", flag: "🇫🇷", region: "France", tz: "Europe/Paris", role: "Engineering · snow.gg", reason: "Home of our engineering team, on the Franco-German border with excellent European network backbones." },
      ],
    },
    footer: {
      tagline: "Infrastructure, engineered with intent.",
      brands: "Brands",
      company: "Company",
      aboutLink: "About",
      brandsLink: "Brands",
      legal:
        "Charlotte LLC is a limited liability company registered in the Commonwealth of Kentucky, United States.",
      rights: "All rights reserved.",
    },
  },
  fr: {
    nav: {
      brands: "Marques",
      founders: "Fondateurs",
      operations: "Opérations",
      about: "À propos",
      langLabel: "Langue",
    },
    home: {
      exploreLabel: "Naviguer",
      exploreHeading: "Où souhaitez-vous aller ?",
      links: [
        { to: "/brands", label: "Marques", desc: "Trois entreprises, une exigence." },
        { to: "/founders", label: "Fondateurs", desc: "Les personnes derrière Charlotte." },
        { to: "/about", label: "À propos", desc: "Une LLC du Kentucky, opérant mondialement." },
      ],
    },
    hero: {
      badge: "Kentucky, USA · Hors EMEA",
      title: "Charlotte LLC",
      subtitle:
        "Une holding qui construit et opère des infrastructures technologiques performantes. Télécoms, hébergement et connectivité — pensés avec exigence, opérés par des ingénieurs.",
      ctaBrands: "Découvrir les marques",
      ctaAbout: "À propos de l'entreprise",
      scroll: "Défiler",
    },
    brands: {
      label: "Portfolio",
      heading: "Trois entreprises. Une seule exigence.",
      subheading:
        "Chaque marque opère de façon indépendante avec sa propre mission, mais partage une conviction : une infrastructure sérieuse, à prix juste.",
      visit: "Visiter",
      items: [
        {
          key: "telecom",
          index: "01",
          name: "Charlotte Telecommunications",
          tagline: "Opérateur télécoms B2B.",
          description:
            "Téléphonie 3CX, fibre FTTH pro dédiée et forfaits mobiles entreprise. Une infrastructure unifiée, opérée par des ingénieurs.",
          stats: [
            { label: "SLA", value: "99,99 %" },
            { label: "Support", value: "24/7 EN/FR" },
            { label: "Fibre", value: "10 Gb/s" },
          ],
          domainLabel: "charlottetelecom.com",
          url: "https://charlottetelecom.com",
        },
        {
          key: "spy",
          index: "02",
          name: "spy.lu",
          tagline: "Hébergement mutualisé offshore.",
          description:
            "cPanel complet, juridiction de Chypre. Pensé pour ceux qui hébergent ce qu'ils veulent, comme ils veulent. Fiable, rapide, confidentiel.",
          stats: [
            { label: "Panel", value: "cPanel complet" },
            { label: "Lieu", value: "Nicosia, CY" },
            { label: "Discrétion", value: "Absolue" },
          ],
          domainLabel: "spy.lu",
          url: "https://spy.lu",
        },
        {
          key: "snow",
          index: "03",
          name: "snow.gg",
          tagline: "Hébergement performant, prix justes.",
          description:
            "Projet né de la passion de deux étudiants strasbourgeois pour la technologie. La mission : éviter de payer trop cher pour des performances décevantes.",
          stats: [
            { label: "Origine", value: "Strasbourg" },
            { label: "Priorité", value: "Performance" },
            { label: "Support", value: "Humain" },
          ],
          domainLabel: "snow.gg",
          url: "https://snow.gg",
        },
      ],
    },
    about: {
      label: "L'entreprise",
      heading: "Enregistrée au Kentucky. Opérant dans le monde entier, hors EMEA.",
      body: [
        "Charlotte LLC est une société à responsabilité limitée américaine enregistrée dans le Commonwealth du Kentucky. Nous détenons et opérons un portefeuille de marques technologiques indépendantes couvrant les télécoms et l'hébergement.",
        "Nos entreprises servent des clients partout dans le monde, hors région EMEA. Nous pensons qu'une infrastructure doit être rapide, à prix transparent, et soutenue par de vraies personnes qui comprennent les systèmes qu'elles opèrent.",
        "En Europe, nos opérations sont gérées par notre société sœur FLYX Ltd — garantissant une présence locale et la conformité dans la région EMEA, tandis que Charlotte LLC opère partout ailleurs.",
      ],
      stats: [
        { value: "03", label: "Marques opérées" },
        { value: "USA", label: "LLC Kentucky" },
        { value: "24/7", label: "Support ingénierie" },
      ],
    },
    founders: {
      label: "Les fondateurs",
      heading: "Construit par deux bâtisseurs.",
      subheading:
        "L'hébergement de Charlotte est né à Strasbourg, de deux étudiants qui ont refusé d'accepter le statu quo de l'hébergement moderne.",
      quoteLabel: "Dans leurs mots",
      members: [
        {
          name: "Pierre",
          role: "Fondateur de Charlotte & PIERREMGMT Ventures",
          bio: "Pierre, étudiant et passionné prodige en informatique, s'est donné pour mission de donner à ses clients la valeur juste pour leur argent. Que ce soit dans son expertise dans la revente de noms de domaines (domaining) ou dans la gestion d'infrastructures critiques.",
          quote: "Charlotte est mon objectif final pour créer un internet juste, écologique et qualitatif. Il faut enlever les barrières à la création web et donner les clés du succès sur internet à quiconque, même sans connaissances.",
        },
        {
          name: "Emeric",
          role: "Co-fondateur de Charlotte",
          bio: "Emeric se spécialise dans la gestion de serveurs et d'infrastructures, et met ses compétences au service d'un projet ambitieux : proposer une alternative plus juste dans le monde de l'hébergement moderne. Casser les codes est sa devise.",
          quote: "Étudiant schilikois passionné d'informatique dès son plus jeune âge, j'ai un objectif que je veux remplir : faire profiter au monde d'un service qualitatif, honnête et transparent. Cette quête se concrétise maintenant avec Charlotte, cofondée avec mon brillant collègue et meilleur ami Pierre. C'est l'avènement d'un projet qui commence petit mais qui voit grand et compte bien révolutionner le monde de l'hébergement moderne pour casser les codes et enfin rétablir une activité honnête et la plus agréable possible dans un monde où les grandes entreprises qui ont le monopole gonflent leurs prix et délaissent la satisfaction client.",
        },
      ],
    },
    ticker: [
      "Tous les systèmes opérationnels",
      "SLA 99,99 %",
      "Fibre 10 Gb/s",
      "cPanel complet",
      "Trois marques · Une exigence",
      "Hors région EMEA",
      "Support humain, 24/7",
    ],
    ops: {
      label: "Opérations mondiales",
      heading: "Toujours actif. À travers les fuseaux.",
      subheading:
        "De notre siège du Kentucky à nos pôles d'hébergement et d'ingénierie — une opération distribuée qui ne dort jamais.",
      live: "En direct",
      cities: [
        { city: "Louisville", flag: "🇺🇸", region: "Kentucky, US", tz: "America/Kentucky/Louisville", role: "Siège", reason: "Notre base américaine — une immatriculation au Kentucky favorable aux entreprises et une couverture horaire centrale pour les opérations hors EMEA." },
        { city: "Saint-Pierre-Port", flag: "🇬🇬", region: "Guernesey", tz: "Europe/Guernsey", role: "Infrastructure", reason: "Une juridiction stable et autonome, dotée d'un solide régime de confidentialité et de protection des données, d'une neutralité fiscale et de liaisons fibre résilientes vers le Royaume-Uni et l'Europe continentale." },
        { city: "Luxembourg", flag: "🇱🇺", region: "Luxembourg", tz: "Europe/Luxembourg", role: "Datacenter", reason: "Un hub de datacenters européen de premier plan : installations Tier IV, connectivité opérateurs dense, stabilité politique et l'un des cadres juridiques les plus solides de l'UE." },
        { city: "Nicosia", flag: "🇨🇾", region: "Chypre", tz: "Asia/Nicosia", role: "Hébergement · spy.lu", reason: "Juridiction chypriote pour l'hébergement offshore — discrétion, réglementation favorable et passerelle entre l'Europe et la région élargie." },
        { city: "Strasbourg", flag: "🇫🇷", region: "France", tz: "Europe/Paris", role: "Ingénierie · snow.gg", reason: "Le siège de notre équipe d'ingénierie, à la frontière franco-allemande, avec d'excellentes dorsales réseau européennes." },
      ],
    },
    footer: {
      tagline: "L'infrastructure, pensée avec exigence.",
      brands: "Marques",
      company: "Entreprise",
      aboutLink: "À propos",
      brandsLink: "Marques",
      legal:
        "Charlotte LLC est une société à responsabilité limitée enregistrée dans le Commonwealth du Kentucky, États-Unis. Les opérations européennes (EMEA) sont gérées par FLYX Ltd.",
      rights: "Tous droits réservés.",
    },
  },
};
