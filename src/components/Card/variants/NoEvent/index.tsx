import { NoEventCardProps } from "./types";

export default function NoEventCard({}: NoEventCardProps) {
  return (
    <div className="p-4 bg-gray-100 border border-gray-300 rounded-lg">
      <h3 className="mb-2 font-medium">No Event Available</h3>
      <p className="mb-3 text-sm text-gray-600">There are no events scheduled for this time.</p>
    </div>
  );
}
