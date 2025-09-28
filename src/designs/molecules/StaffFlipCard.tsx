"use client";
import Image from "next/image";
import { Badge } from "../atoms/Badge";
import { StaffsItems } from "../organisms/StaffsGrid";

interface StaffFlipCardProps {
  staff: StaffsItems;
  onViewMore: (staff: StaffsItems) => void;
}

export const StaffFlipCard: React.FC<StaffFlipCardProps> = ({ staff, onViewMore }) => {
  const staffName = staff.name || staff.title;

  return (
    <div className="group h-96 w-full [perspective:1000px]">
      <div className="relative h-full w-full  shadow-xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <Image
            src={staff.image || "/icons/dummyStaff.svg"}
            alt={staffName}
            fill
            className=" object-cover"
          />
          <Badge>{staffName}</Badge>
        </div>

        <div className="absolute inset-0 bg-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex h-full flex-col justify-between">
            <div className="bg-green-700 p-4 text-center">
              <h3 className="text-lg font-bold text-white">{staffName}</h3>
            </div>
            <div className="flex-grow p-4 text-sm space-y-2 text-gray-700 overflow-y-auto">
              <p>
                <strong>Designation:</strong> {staff.designation || "N/A"}
              </p>
              <p>
                <strong>ICAR E-mail:</strong> {staff.icarEmail || "N/A"}
              </p>
              {staff.altEmail && (
                <p>
                  <strong>Alternate E-mail:</strong> {staff.altEmail}
                </p>
              )}
              <p>
                <strong>Specialization:</strong> {staff.specialization || "N/A"}
              </p>
              <p>
                <strong>Joining Date:</strong> {staff.joiningDate || "N/A"}
              </p>
              <p>
                <strong>M.Sc. From:</strong> {staff.mscInstitute || "N/A"}
              </p>
              <p>
                <strong>Ph.D. From:</strong> {staff.phdInstitute || "N/A"}
              </p>
            </div>

            <div className="border-t p-3 text-center">
              <button
                onClick={(e) => {
                  e.stopPropagation(); // ✅ prevent parent flip/card capturing the click
                  onViewMore(staff);
                }}
                className="text-green-600 font-semibold hover:underline cursor-pointer flex items-center justify-center gap-2 w-full relative z-10"
              >
                VIEW MORE →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
