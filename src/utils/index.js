// NAVIGATION
export const nav = [
  { url: "/", id: "inicio", text: "Inicio" },
  { url: "/servicos", id: "servicos", text: "Serviços" },
  { url: "/albuns", id: "albuns", text: "Albuns" },
  { url: "/contacto", id: "contacto ", text: "Contacto" },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: "Conheça-nos",
    links: [
      {
        text: "Sobre Iris Amarelo",
        site: "/sobre",
      },
      { text: "Albuns", site: "/albuns" },
      {
        text: "Emprego",
        site: "/emprego",
      },
      { text: "Privacy Policy", site: "/privacypolicy" },
      { text: "Fale Conosco!", site: "/contacto" },
    ],
  },
  {
    title: "Os nossos serviços",
    links: [
      {
        text: "Construção de raiz",
        site: "/servicos",
      },
      {
        text: "Remodelação",
        site: "/servicos",
      },
      {
        text: "Canalização",
        site: "/servicos",
      },
    ],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "Contactos",
  links: [
    { label: "Telemóvel", value: "{+351} 917 077 799" },
    { label: "Email", value: "irisamarelo@gmail.com" },
  ],
};

export const SERVICES = [
  {
    title: "Construção de Raiz",
    icon: "/crane.svg",
    variant: "green",
    description: "Construção de raiz...",
  },
  {
    title: "Canalização",
    icon: "/pipe.svg",
    variant: "green",
    description: "Canalização...",
  },
  {
    title: "Remodelações",
    icon: "/hammer.svg",
    variant: "green",
    description: "Remodelações",
  },
  {
    title: "Pintura",
    icon: "/pincel.svg",
    variant: "orange",
    description: "Pintura...",
  },
];

export const SOCIALS = {
  title: "Redes Sociais",
  links: [
    {
      image: "/facebook.svg",
      site: "https://www.facebook.com/irisamarelo",
    },

    {
      image: "/instagram.svg",
      site: "",
    },
  ],
};
