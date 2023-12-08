// middleware.ts
import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/"], // Make the root route accessible to both signed-in and signed-out users
  ignoredRoutes: ["/((?!api|trpc))(_next.*|.+\\.[\\w]+$)"], // Exclude certain routes from Clerk authentication
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
