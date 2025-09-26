"use client";
import Image from "next/image";
import { StaffsItems } from "../organisms/StaffsGrid";

interface StaffModalProps {
  staff: StaffsItems;
  onClose: () => void;
}

export const StaffModal: React.FC<StaffModalProps> = ({ staff, onClose }) => {
  if (!staff) return null;

  const staffName = staff.name || staff.title;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
      onClick={onClose}
    >
      <div
        className="relative mx-4 w-full max-w-3xl rounded-lg bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-800 shadow-lg hover:bg-gray-200"
          aria-label="Close modal"
        >
          &times;
        </button>

        <div className="flex flex-col md:flex-row">
          <div className="relative h-64 w-full md:h-auto md:w-1/3">
            <Image
              src={staff.image || "/icons/dummyStaff.svg"}
              alt={staffName}
              fill
              className="rounded-t-lg object-cover md:rounded-l-lg md:rounded-t-none"
            />
          </div>

          <div className="flex flex-col p-6 md:w-2/3">
            <h2 className="mb-4 text-2xl font-bold text-green-800">{staffName}</h2>
            <div className="space-y-2 overflow-y-auto text-sm text-gray-700">
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
          </div>
        </div>
      </div>
    </div>
  );
};
