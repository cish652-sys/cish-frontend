"use client";

export function ContactInfo() {
  return (
    <div>
      <h4 className="text-white font-semibold mb-3">CONTACT INFORMATION</h4>
      <ul className="text-sm text-white space-y-3">
        <li className="flex items-start gap-2">
          <img src="/icons/location.svg" alt="Map" className="w-4 h-4 mt-1" />
          Rehmankhera, P.O.Kakori,
          <br /> Lucknow UP, INDIA, 226101
        </li>
        <li className="flex items-center gap-2">
          <img src="/icons/printer.svg" alt="Fax" className="w-4 h-4" />
          Fax: 91-0522-2841025
        </li>
        <li className="flex items-center gap-2">
          <img src="/icons/phone.svg" alt="Phone" className="w-4 h-4" />
          Phone: 91-0522-2841022, 23
        </li>
        <li className="flex items-start gap-2">
          <img src="/icons/email.svg" alt="Mail" className="w-4 h-4" />
          <span>
            cish.lucknow@gmail.com <br /> cish@icar.gov.in
          </span>
        </li>
      </ul>
    </div>
  );
}
