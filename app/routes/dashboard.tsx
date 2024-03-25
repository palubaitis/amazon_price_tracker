import { authenticator } from "~/services/auth.server";
import { LoaderArgs } from "@remix-run/node";
import Header from "~/components/layout/Header";
import { getSession } from "~/services/session.server";
import { getUserById } from "~/models/user.server";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { scrapeAmazonProductPrice } from "~/services/scrapeAmazonProduct"

export default function () {
  const user = useLoaderData<typeof loader>();
  let isPaid = user.subscription_price && user.subscription_price > 0;

  return (
    <>
      <Header />
      <main className="max-w-6xl m-auto mt-10">
        <h1 className="text-5xl font-semibold">Dashboard</h1>
        {isPaid ? (
          <>
            <input
              placeholder="Some input"
              type="text"
              className="border border-gray-200 border-1 bg-slate-100 text-black rounded-md px-2 py-1"
            ></input>
            <button className="bg-primary px-4 py-2 text-white rounded-md">
              Some button
            </button>
          </>
        ) : (
          <>
            <h1>Visit the pricing page to buy a paid plan.</h1>
          </>
        )}
      </main>
    </>
  );
}

export async function loader({ request }: LoaderArgs) {
  await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });

  const session = await getSession(request.headers.get("cookie"));
  const userId = session.get("user").id;
  const user = await getUserById(userId);

  const amazonProductUrl = "https://www.amazon.com/BENGOO-G9000-Controller-Cancelling-Headphones/dp/B01H6GUCCQ/ref=sr_1_1_sspa?_encoding=UTF8&content-id=amzn1.sym.12129333-2117-4490-9c17-6d31baf0582a&dib=eyJ2IjoiMSJ9.LzA2u5MEtzOJYnnhfYifOZF03L02bnVOQQ7KexwWTOTO8pEy-MsB9UBcp4zBiOuPrVM64KhjXtaMqXW8Sv_uDglhXacF_yWckAJtJyVCaoHSIpYtd9yGN4bVy_IiuFHUO_dowrNRBCXItB1iZh8B0Xk0us67ap4I8D1cDsiF0UYVxY5VVIEh_JzfxVeUNh7E6dLtGdqDzyzPk_r18Irhq9CtgdIWQahDIIxMKicYdjQ.QMWMlQHixcVHmdEo7Pr1okyY6BXhYIJU-ni21Z3PO2k&dib_tag=se&keywords=gaming%2Bheadsets&pd_rd_r=45915236-de2f-4fbf-a451-260f114f79db&pd_rd_w=Ab88c&pd_rd_wg=FAV4a&pf_rd_p=12129333-2117-4490-9c17-6d31baf0582a&pf_rd_r=QP7C3PYEB8BARBDGHY67&qid=1711375535&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1";
  const amazonProductPrice = await scrapeAmazonProductPrice(amazonProductUrl);
  
  return json(user);
}
