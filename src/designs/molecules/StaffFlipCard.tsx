"use client";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../atoms/Badge";
import { StaffsItems } from "../organisms/StaffsGrid";

interface StaffFlipCardProps {
  staff: StaffsItems;
}

export const StaffFlipCard: React.FC<StaffFlipCardProps> = ({ staff }) => {
  const staffName = staff.name || staff.title; // Use title as a fallback for name

  return (
    <div className="group h-96 w-80 [perspective:1000px]">
      <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <Image
            src={staff.image || "/icons/dummyStaff.svg"}
            alt={staffName}
            fill
            className="rounded-xl object-cover"
          />
          <Badge>{staffName}</Badge>
        </div>

        <div className="absolute inset-0 rounded-xl bg-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex h-full flex-col justify-between">
            <div className="bg-green-700 p-4 rounded-t-xl text-center">
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
              <Link
                href={`/staff/member/${staff.id}`}
                className="text-green-600 font-semibold hover:underline flex items-center justify-center gap-2"
              >
                VIEW MORE <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
