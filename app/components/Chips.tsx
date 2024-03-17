import { ReactElement } from "react";

type chipsTypes = {
  text?: string;
  className?: string;
};
const InProgressChip = ({
  text = "In Progress",
  className = "",
}: chipsTypes): ReactElement => {
  return (
    <span
      className={`rounded-full bg-primary-10 px-2 text-xs/5 font-medium normal-case text-primary ${className}`}
    >
      {text}
    </span>
  );
};
const CompletedChip = ({
  className = "",
  text = "Completed",
}: chipsTypes): ReactElement => {
  return (
    <span
      className={`rounded-full bg-emerald-950 px-2 text-xs/5 font-medium normal-case text-emerald-500 ${className}`}
    >
      {text}
    </span>
  );
};
const FailedChip = ({
  className = "",
  text = "Failed",
}: chipsTypes): ReactElement => {
  return (
    <span
      className={`rounded-full bg-red-950 px-2 text-xs/5 font-medium normal-case text-red-400 ${className}`}
    >
      {text}
    </span>
  );
};
const DefaultChip = ({
  className = "",
  text = "",
}: {
  text: string;
  className?: string;
}): ReactElement => {
  return (
    <span
      className={`rounded-full bg-gray-600 px-2 text-xs/5 font-medium normal-case text-white ${className}`}
    >
      {text}
    </span>
  );
};
export { InProgressChip, CompletedChip, FailedChip, DefaultChip };
