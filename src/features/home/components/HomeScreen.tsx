import { Logo } from "@/features/core/components/Logo";
import { Menu } from "@/features/menu/components/Menu";

interface HomeScreenProps {
  menuItems: MenuItem[];
}
export const HomeScreen = ({ menuItems }: HomeScreenProps) => {
  return (
    <div className="md:py-10 md:px-6 h-screen bg-slate-900 text-slate-300 flex">
      <div className="grow-0 basis-28">
        <Logo />
      </div>
      <div className="grow flex flex-col dbg">
        <div className="grow-0 dbg text-center">de / en</div>
        <div className="grow gap-3 flex flex-col justify-center items-center">
          <img className="w-4/5" src="https://placekitten.com/400/400" />
          <img className="w-12 " src="/rotate.png" />
        </div>
        <div className="grow-0 dbg text-center">scroll for the story</div>
      </div>
      <div className="grow-0 flex flex-col justify-between">
        <Menu items={menuItems} />
        <div className="text-xs md:text-base justify-self-center border-2 uppercase text-center w-44 px-7">
          Participate in the project
        </div>
        <div />
      </div>
    </div>
  );
};
