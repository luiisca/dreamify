import { Twitter, type Icon as LucideIcon } from "lucide-react";
import type { LucideProps } from "lucide-react";
import { cn } from "@/utils/cn";

export type Icon = LucideIcon;

export const Icons = {
  twitter: Twitter,
  logo: ({
    icon,
    theme,
    ...props
  }: LucideProps & { icon?: boolean; theme: "dark" | "light" }) =>
    icon ? (
      <svg viewBox="0 0 24 25" {...props}>
        {/* icon */}
        <g
          transform="matrix(0.2377939879441144,0,0,0.2377939879441144,0.86008339956458,1.810449611629833)"
          className={cn(
            theme === "dark" ? "fill-neutral-50" : "fill-slate-900"
          )}
        >
          <g xmlns="http://www.w3.org/2000/svg">
            <path d="M51.753,41.878c-0.323-1.414-1.731-2.298-3.146-1.974l-28.491,6.539c-1.414,0.324-2.296,1.734-1.971,3.148l6.466,28.172   c-1.06-0.151-2.174-0.116-3.295,0.141c-4.542,1.043-7.442,5.301-6.475,9.513c0.966,4.21,5.433,6.777,9.975,5.734   c4.315-0.989,7.142-4.881,6.586-8.878c0.004-0.214-0.007-0.428-0.057-0.645l-5.307-23.122l23.372-5.364l3.693,16.099   c-1.074-0.159-2.209-0.126-3.348,0.136c-4.542,1.043-7.442,5.301-6.476,9.512c0.967,4.212,5.433,6.779,9.976,5.736   c4.233-0.972,7.035-4.735,6.617-8.649c0.034-0.288,0.031-0.586-0.038-0.887L51.753,41.878z M24.909,55.587l-1.058-4.611   l23.371-5.363l1.058,4.61L24.909,55.587z"></path>
            <path d="M85.322,11.82c0.156-0.953-0.487-1.854-1.442-2.012L64.652,6.64c-0.954-0.158-1.854,0.489-2.012,1.442l-3.134,19.012   c-0.616-0.361-1.313-0.622-2.068-0.747c-3.065-0.505-5.93,1.39-6.398,4.23c-0.469,2.842,1.637,5.555,4.702,6.06   c2.913,0.48,5.64-1.205,6.308-3.812c0.057-0.13,0.104-0.266,0.127-0.412l2.572-15.604l15.773,2.601l-1.791,10.864   c-0.625-0.371-1.331-0.637-2.1-0.764c-3.066-0.505-5.932,1.389-6.4,4.23c-0.468,2.841,1.638,5.555,4.704,6.06   c2.855,0.471,5.537-1.142,6.269-3.662c0.093-0.168,0.168-0.354,0.201-0.556L85.322,11.82z M65.297,13.49l0.513-3.112l15.773,2.601   l-0.514,3.111L65.297,13.49z"></path>
          </g>
        </g>
      </svg>
    ) : (
      <svg viewBox="0 0 410.50000000000006 147" {...props}>
        {/* icon */}
        <g
          transform="matrix(1.2377939879441144,0,0,1.2377939879441144,1.86008339956458,11.810449611629833)"
          className={cn(
            theme === "dark" ? "fill-neutral-50" : "fill-slate-900"
          )}
        >
          <g xmlns="http://www.w3.org/2000/svg">
            <path d="M51.753,41.878c-0.323-1.414-1.731-2.298-3.146-1.974l-28.491,6.539c-1.414,0.324-2.296,1.734-1.971,3.148l6.466,28.172   c-1.06-0.151-2.174-0.116-3.295,0.141c-4.542,1.043-7.442,5.301-6.475,9.513c0.966,4.21,5.433,6.777,9.975,5.734   c4.315-0.989,7.142-4.881,6.586-8.878c0.004-0.214-0.007-0.428-0.057-0.645l-5.307-23.122l23.372-5.364l3.693,16.099   c-1.074-0.159-2.209-0.126-3.348,0.136c-4.542,1.043-7.442,5.301-6.476,9.512c0.967,4.212,5.433,6.779,9.976,5.736   c4.233-0.972,7.035-4.735,6.617-8.649c0.034-0.288,0.031-0.586-0.038-0.887L51.753,41.878z M24.909,55.587l-1.058-4.611   l23.371-5.363l1.058,4.61L24.909,55.587z"></path>
            <path d="M85.322,11.82c0.156-0.953-0.487-1.854-1.442-2.012L64.652,6.64c-0.954-0.158-1.854,0.489-2.012,1.442l-3.134,19.012   c-0.616-0.361-1.313-0.622-2.068-0.747c-3.065-0.505-5.93,1.39-6.398,4.23c-0.469,2.842,1.637,5.555,4.702,6.06   c2.913,0.48,5.64-1.205,6.308-3.812c0.057-0.13,0.104-0.266,0.127-0.412l2.572-15.604l15.773,2.601l-1.791,10.864   c-0.625-0.371-1.331-0.637-2.1-0.764c-3.066-0.505-5.932,1.389-6.4,4.23c-0.468,2.841,1.638,5.555,4.704,6.06   c2.855,0.471,5.537-1.142,6.269-3.662c0.093-0.168,0.168-0.354,0.201-0.556L85.322,11.82z M65.297,13.49l0.513-3.112l15.773,2.601   l-0.514,3.111L65.297,13.49z"></path>
          </g>
        </g>
        {/* text */}
        <g
          transform="matrix(4.605263466099754,0,0,4.605263466099754,148.46052652503178,12.355260011121512)"
          className={cn(theme === "dark" ? "fill-gray-100" : "fill-slate-700")}
        >
          <path d="M7.04 10 q0.12 0.56 0.12 1.12 t-0.12 1.1 l-2.38 -0.04 l0 4.6 q0 0.94 0.88 0.94 l1.12 0 q0.26 0.72 0.26 1.32 t-0.08 0.86 q-1.48 0.2 -2.72 0.2 q-2.52 0 -2.52 -2.78 l0 -5.12 l-1.56 0.02 q-0.14 -0.5 -0.14 -1.09 t0.14 -1.13 l1.56 0.04 l0 -1.16 q0 -1.02 0.39 -1.45 t1.31 -0.43 l1.22 0 l0.14 0.14 l0 2.9 z M8.64 16.62 l0 -4.1 q0 -1.3 -0.48 -2 q0.74 -0.66 1.8 -0.66 t1.44 0.48 t0.38 1.46 l0 4.24 q0 0.7 0.16 1.02 t0.84 0.32 q0.66 0 1.34 -0.68 l0 -6.68 q0.66 -0.12 1.54 -0.12 t1.58 0.12 l0 7.12 q0 1.08 0.56 1.46 q-0.1 0.4 -0.38 0.87 t-0.58 0.69 q-1.64 -0.06 -2.36 -1.4 q-1.58 1.42 -2.98 1.42 t-2.13 -0.97 t-0.73 -2.59 z M28.28 13.4 l0 4.1 q0 1.32 0.48 1.98 q-0.76 0.68 -1.82 0.68 q-1.04 0 -1.42 -0.48 t-0.38 -1.46 l0 -4.26 q0 -0.68 -0.18 -1 t-0.7 -0.32 q-0.3 0 -0.68 0.16 t-0.78 0.52 l0 6.68 q-0.34 0.06 -0.74 0.09 t-0.82 0.03 t-0.82 -0.03 t-0.74 -0.09 l0 -9.98 l0.14 -0.14 l1.18 0 q1.22 0 1.64 1.2 q1.4 -1.24 2.78 -1.24 q1.4 0 2.13 0.97 t0.73 2.59 z M38.400000000000006 16.02 l-5.22 0 q0.04 0.9 0.46 1.4 t1.38 0.5 q0.48 0 1.11 -0.14 t1.45 -0.46 q0.66 0.68 0.82 1.84 q-1.6 1.14 -3.92 1.14 q-1.26 0 -2.11 -0.4 t-1.38 -1.12 t-0.75 -1.7 t-0.22 -2.14 q0 -1.12 0.27 -2.07 t0.82 -1.65 t1.4 -1.1 t1.99 -0.4 q0.96 0 1.73 0.32 t1.31 0.88 t0.83 1.34 t0.29 1.7 q0 1.22 -0.26 2.06 z M33.160000000000004 13.86 l2.64 0 l0 -0.22 q0 -0.74 -0.33 -1.22 t-0.99 -0.48 q-0.64 0 -0.95 0.45 t-0.37 1.47 z M44.2 17.14 q-0.54 0 -0.8 -0.02 l-0.86 2.9 q-0.48 0.12 -1.34 0.12 q-0.96 0 -1.56 -0.22 l-0.1 -0.16 l4.4 -13.42 q0.78 -0.12 1.82 -0.12 q1.18 0 1.88 0.14 l4.32 13.44 q-0.7 0.38 -1.58 0.38 q-1.04 0 -1.46 -0.36 t-0.72 -1.38 l-0.38 -1.32 q-0.26 0.02 -0.78 0.02 l-2.84 0 z M44.14 14.620000000000001 l0.8 -0.02 l1.46 0 q0.1 0 0.35 0.01 t0.37 0.01 l-0.34 -1.24 q-0.48 -1.68 -1.1 -4.12 l-0.12 0 q-0.16 0.86 -0.96 3.82 z M53.68 20 l0 -13.66 q0.62 -0.12 1.6 -0.12 t1.62 0.12 l0 13.66 q-0.64 0.12 -1.62 0.12 t-1.6 -0.12 z"></path>
        </g>
      </svg>
    ),
  gitHub: (props: LucideProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  spotify: (props: LucideProps) => (
    <svg viewBox="0 0 256 256" {...props}>
      <path
        d="M127.999236,0 C57.3087105,0 0,57.3085507 0,128.000764 C0,198.696035 57.3087105,256 127.999236,256 C198.697403,256 256,198.696035 256,128.000764 C256,57.3131363 198.697403,0.00611405337 127.997707,0.00611405337 L127.999236,0 Z M186.69886,184.613841 C184.406145,188.373984 179.48445,189.566225 175.724397,187.258169 C145.671485,168.900724 107.838626,164.743168 63.2835265,174.923067 C58.990035,175.901315 54.7102999,173.211132 53.7320747,168.916009 C52.7492641,164.620887 55.428684,160.34105 59.7328748,159.362801 C108.491286,148.222996 150.314998,153.019471 184.054595,173.639116 C187.814648,175.947171 189.00686,180.853699 186.69886,184.613841 L186.69886,184.613841 Z M202.365748,149.76068 C199.476927,154.456273 193.33245,155.938931 188.640026,153.050041 C154.234012,131.90153 101.787386,125.776777 61.0916907,138.130222 C55.8138602,139.724462 50.2395052,136.749975 48.6376614,131.481189 C47.0480455,126.203233 50.0239899,120.639444 55.2926496,119.034505 C101.778216,104.929384 159.568396,111.761839 199.079523,136.042273 C203.771946,138.931163 205.254569,145.075787 202.365748,149.762209 L202.365748,149.76068 Z M203.710807,113.467659 C162.457218,88.964062 94.394144,86.7110334 55.0068244,98.6655362 C48.6819873,100.58382 41.9933726,97.0132133 40.0766627,90.6882251 C38.1599527,84.3601798 41.7274177,77.675991 48.0568402,75.7531212 C93.2707135,62.0270714 168.433562,64.6790421 215.929451,92.8755277 C221.63067,96.2520136 223.495412,103.599577 220.117478,109.281061 C216.754829,114.970188 209.38757,116.845674 203.716921,113.467659 L203.710807,113.467659 Z"
        fill="#1ED760"
      />
    </svg>
  ),
};
