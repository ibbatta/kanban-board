import { useCallback, useState } from "react";

import { UserMenu } from "$components/Menu";

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

      {isMenuOpen && (
        <span onMouseLeave={toggleMenu}>
          <UserMenu />
        </span>
      )}
    </div>
  );
}

export default HeaderUser;
