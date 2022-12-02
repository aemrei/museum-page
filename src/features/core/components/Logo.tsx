import clsx from "clsx";

interface LogoProps {
  className?: string;
}
export const Logo = ({ className }: LogoProps) => {
  return (
    <div className={clsx(className)}>
      <div className={"relative border border-dashed border-red-400 min-h-[150px]"}>
        <div className="absolute border w-28 h-28 p-2 border-slate-300" />
        <div className="absolute mt-2 -ml-2 bg-slate-800 items-center">
          <div className="border w-28 h-28 p-2 border-slate-300 ">
            <div className="md:text-2xl font-bold">Next.js</div>
            <div className="text-sm">with Tailwind CSS</div>
          </div>
          <div className="text-xs text-end bg-slate-900 justify-self-end">
            by <a href="#">@aemrei</a>
          </div>
        </div>
      </div>
    </div>
  );
};
