import { useCallback, useState } from "react";

const Menu = () => {
  return (
    <div
      id="userDropdown"
      className="absolute right-0 top-12 z-10 w-44 divide-y divide-gray-100 rounded-lg border-2 border-slate-600 bg-white shadow-xl"
    >
      <div className="px-4 py-3 text-sm text-gray-900">
        <div>Bonnie Green</div>
        <div className="truncate font-medium">name@flowbite.com</div>
      </div>
      <ul className="py-2 text-sm text-gray-700" aria-labelledby="avatarButton">
        <li>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">
            Settings
          </a>
        </li>
        <li>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">
            Earnings
          </a>
        </li>
      </ul>
      <div className="py-1">
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Sign out
        </a>
      </div>
    </div>
  );
};

function HeaderUser() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  return (
    <div className="relative">
      <div
        className="relative cursor-pointer rounded-full border-2 border-slate-600 drop-shadow-xl"
        onClick={toggleMenu}
      >
        <img
          className="h-10 w-10 border-spacing-2 rounded"
          src="https://avatar.iran.liara.run/public"
          alt="user avatar"
        />
        <span className="absolute bottom-0 left-7 h-3.5 w-3.5 translate-y-1/4 transform rounded-full border-2 border-white bg-green-400"></span>
      </div>

      {isMenuOpen && <Menu />}
    </div>
  );
}

export default HeaderUser;
