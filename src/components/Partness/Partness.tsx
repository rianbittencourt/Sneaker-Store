export default function Partness() {
  return (
    <div className=" py-10 border-t max-w-7xl m-auto  ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Parceiros
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            alt="Adidas"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/725px-Adidas_Logo.svg.png?20240107104015"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="Nike"
            src="https://cdn.worldvectorlogo.com/logos/nike-11.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="Jordan"
            src="https://cdn.worldvectorlogo.com/logos/jordan-2.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="Puma"
            src="https://cdn.worldvectorlogo.com/logos/puma-logo.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
          />
          <img
            alt="Under Armour"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Under_armour_logo.svg/302px-Under_armour_logo.svg.png?20220804034106"
            width={158}
            height={48}
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
          />
        </div>
      </div>
    </div>
  );
}
