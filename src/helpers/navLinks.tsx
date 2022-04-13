export const navLinks: ListNav[] = [
  {
    text: "Projects",
    path: "/home",
  },
  {
    text: "About",
    path: "/about",
  },
  {
    text: "Contact",
    path: "/contact",
  },
];
export interface ListNav {
  text: string;
  path: string;
  children?: ChildNode;
}
