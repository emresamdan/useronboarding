import Popup from "./Popup";
export default function PopupGrid({ popups, filters }) {
  return (
    <section
      aria-labelledby="products-heading"
      className="max-w-2xl mx-auto pt-12 pb-16 sm:pt-16 sm:pb-24 lg:max-w-7xl"
    >
      <h2 id="products-heading" className="sr-only">
        Popups
      </h2>

      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
        {popups.map((popup) => (
          <Popup key={popup.title} popup={popup} filters={filters} />
        ))}
      </div>
    </section>
  );
}
