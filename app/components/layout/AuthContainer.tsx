import Footer from "./Footer";
import Header from "./Header";

export default function AuthContainer({ children }: { children: any }) {
  return (
    <section className="w-full h-full bg-gray-50 p-full">
      <div className="flex flex-col items-center justify-between h-full min-h-screen mx-auto">
        <div className="w-full shadow">
          <Header />
        </div>
        <div className="flex flex-col gap-0 my-10">
          <div className="max-w-[28rem] min-w-[28rem] w-[28rem]  max-[639px]:max-w-[95%] max-[639px]:min-w-[95%] max-[639px]:w-[95%] bg-white mx-auto rounded-lg shadow my-4">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">{children}</div>
          </div>
        </div>
        <div className="w-full">
          <Footer backgroundColor="bg-gray-50" />
        </div>
      </div>
    </section>
  );
}
