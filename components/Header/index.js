import HeaderStyles from "@styles/Header.module.css";
import Link from "next/link";
import SocialLinks from "@components/SocialLinks";
import { useRouter } from "next/router";
import { Config } from "@utils/Config";
import Logo from "./svg/Logo";
import "tailwindcss/tailwind.css";

export default function Header() {
  const router = useRouter();

  return (
    <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
      <nav
        className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
        aria-label="Global"
      >
        <div className="flex items-center flex-1">
          <div className="flex items-center justify-between w-full md:w-auto">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
              />
            </a>
          </div>
          <div className="hidden md:block md:ml-10 md:space-x-10">
            {/* {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-medium text-gray-500 hover:text-gray-900"
            >
              {item.name}
            </a>
          ))} */}
            {Config.menuLinks.map((link) => {
              const onBlogPost =
                router.pathname === Config.pageMeta.post.slug &&
                link.path === Config.pageMeta.blogIndex.slug;

              const onBlogIndexPage =
                router.pathname === Config.pageMeta.blogIndexPage.slug &&
                link.path === Config.pageMeta.blogIndex.slug;

              const isActive =
                onBlogPost || onBlogIndexPage || router.pathname === link.path;
              const isActiveClass = isActive
                ? ` ${HeaderStyles.header__navListItem__active}`
                : "";

              return (
                <Link href={link.path} key={link.displayName}>
                  <a className="font-medium text-gray-500 hover:text-gray-900">
                    {link.displayName}
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="hidden md:block text-right space-x-3">
          <button className="bg-blue-500 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
            <svg
              className="w-5 h-5 fill-current"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span>Facebook</span>
          </button>
          <button className="bg-blue-300 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
            <svg
              className="w-5 h-5 fill-current"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
            <span>Twitter</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
