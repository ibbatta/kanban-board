import { useCallback, useState, useEffect } from "react";
import { useGoogleLogin, googleLogout } from "@react-oauth/google";
import axios from "axios";

import { GOOGLE_AUTH_HEADER, GOOGLE_AUTH_URI } from "$configs/constants";
import { UserMenu } from "$components/Menu";

import { useUserStore } from "$states/store";

import userAvatarPlaceholder from "$assets/user-avatar-placeholder.svg";
import googleLogoSvg from "$assets/google-logo.svg";

function User() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [userToken, setUserToken] = useState<string | null>(null);
  const [hasImgError, setHasImgError] = useState<boolean>(false);

  const { user, setUser, clearUser } = useUserStore();

  const toggleMenu = useCallback(() => setMenuOpen(!isMenuOpen), [isMenuOpen]);

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: ({ access_token }) => {
      setUserToken(access_token);
    },
    onError: (error) => console.error("Login Failed:", error),
  });

  const handleGoogleLogout = useCallback(() => {
    googleLogout();
    clearUser();
  }, [clearUser]);

  useEffect(() => {
    if (userToken && !user) {
      axios
        .get(GOOGLE_AUTH_URI(userToken), {
          headers: GOOGLE_AUTH_HEADER(userToken),
        })
        .then((res) => setUser(res.data))
        .catch((err) => console.log(err));
    }
  }, [userToken, setUser, user]);

  return (
    <div className="relative">
      {user ? (
        <>
          <div
            className="relative cursor-pointer rounded-full border-2 border-slate-600 drop-shadow-xl"
            onClick={toggleMenu}
          >
            <img
              className="h-10 w-10 border-spacing-2 overflow-hidden rounded-full"
              src={hasImgError ? userAvatarPlaceholder : user.picture}
              alt="user avatar"
              onError={() => setHasImgError(true)}
            />

            <span className="absolute bottom-0 left-7 z-10 h-3.5 w-3.5 translate-y-1/4 transform rounded-full border-2 border-white bg-green-400"></span>
          </div>

          {user && isMenuOpen && (
            <span onMouseLeave={toggleMenu}>
              <UserMenu data={user} onLogout={handleGoogleLogout} />
            </span>
          )}
        </>
      ) : (
        <button
          role="button"
          title="google login"
          aria-label="google login"
          className="inline-flex cursor-pointer items-center rounded bg-[#4285F4] px-4 py-2 text-center text-xs font-medium text-white hover:bg-[#4285F4]/90"
          type="button"
          onClick={() => handleGoogleLogin()}
        >
          <img className="me-2 h-4 w-4" src={googleLogoSvg} alt="google logo" />
          Sign in with Google
        </button>
      )}
    </div>
  );
}

export default User;
