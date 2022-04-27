export interface ProjectslDataProps {
  toggle?: any;
  month?: any;
  role?: any;
  location?: any;
  city?: any;
  title?: any;
  height?: any;
  event?: any;
  description?: any;
  css?: any;
  imgProject?: any;
  bgpos?: any;
  color?: any;
  maximized?: any;
}
export interface cardProps {
  size?: any;
  opacity?: any;
  rest?: any;
}

export const proyectsData: ProjectslDataProps[] = [
  {
    title: "Graphic Gallery",
    month: "Roles",
    role: "04",
    location: "Grandsport Speedway",
    city: "Hitchcock, TX 77563",
    description: "#a8edea → #fed6e3",
    css: "linear-gradient(135deg, #195788 0%, #fed6e3 100%)",
    imgProject: "url(./graphicGallery.png)",
    bgpos: "right",
    color: "#7f90b1",
    event: "HoustonAUG",
    height: 400,
  },
  {
    title: "Rick and Morty",
    month: "Roles",
    role: "UX Research, Data Base, Design, Development ",
    location: "Location",
    city: "TBA",
    description: "#f6d365 → #fda085",
    css: "linear-gradient(160deg, #f6d365 0%, #f5576c 100%)",
    imgProject: "url(./rickAndMorty.png)",
    bgpos: "bottom",
    color: "#f6d365",
    event: "SowelaAUG",
    height: 400,
  },
  {
    title: "Bici Mad",
    month: "SEP",
    role: "08",
    location: "Zephyr Stadium",
    city: "Metairie, LA 70003",
    description: "#e0c3fc → #8ec5fc",
    css: "linear-gradient(120deg, #e0c3fc 0%, #8095ff 100%)",
    imgProject: "url(./biciMad.png)",
    bgpos: "center",
    color: "#8095ff",
    event: "DeltaSEP",
    height: 400,
  },
  {
    title: "Yoga Flow Asthanga",
    month: "SEP",
    role: "??",
    location: "Location",
    city: "TBA",
    description: "#f6d365 → #fda085",
    css: "linear-gradient(160deg, #f6d365 0%, #f5576c 100%)",
    imgProject: "url(./yogaFlow.png)",
    bgpos: "bottom",
    color: "#f6d365",
    event: "SowelaSEP",
    height: 400,
  },
  {
    title: "Graphic Gallery",
    month: "SEP",
    role: "22",
    location: "Lamar Dixon Expo Center",
    city: "Gonzales, LA 70737",
    description: "#f093fb → #f5576c",
    css: "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)",
    imgProject: "url(./graphicGallery.png)",
    bgpos: "bottom right",
    color: "#f279bc",
    event: "CenlaSEP",
    height: 400,
  },
  {
    title: "Rick and Morty API",
    month: "OCT",
    role: "05",
    location: "Houston Police Academy",
    city: "Hitchcock, TX 77563",
    description: "#a8edea → #fed6e3",
    css: "linear-gradient(135deg, #195788 0%, #fed6e3 100%)",
    imgProject: "url(./rickAndMorty.png)",
    bgpos: "right",
    color: `#7f90b1`,
    event: "HoustonOCT1",
    height: 400,
  },
];
