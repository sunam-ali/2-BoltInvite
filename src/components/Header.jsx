import Logo from "../assets/logo.svg";
import UserIcon from "../assets/user-icon.svg";

export default function Header() {
  return (
    <nav className="bg-navbg rounded-full mt-4 px-8 py-3 flex justify-between items-center">
      <div className="flex items-center ">
        <div className="text-primary mr-2">
          <img src={Logo} />
        </div>
        <h1 className="text-2xl font-bold">
          <span className="text-primary">Bolt</span>Invite
        </h1>
      </div>
      <div className="flex items-center gap-1">
        <img src={UserIcon} className="h-10" />
        <span className="text-2xl font-bold hidden sm:inline">Sunam</span>
      </div>
    </nav>
  );
}
