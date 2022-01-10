import {
  PaperAirplaneIcon,
  CreditCardIcon,
  DocumentReportIcon,
} from '@heroicons/react/outline';

export default function ActionButtons() {
  return (
    <div className="space-y-3">
      <button
        rounded-lg
        type="button"
        className="w-full flex justify-between items-center px-4 py-3 shadow text-sm font-medium rounded-lg bg-white hover:bg-black hover:text-white focus:outline-none"
      >
        <p>Send a Payment</p>
        <PaperAirplaneIcon className="h-5 w-5" />
      </button>

      <button
        rounded-lg
        type="button"
        className="w-full flex justify-between items-center px-4 py-3 shadow text-sm font-medium rounded-lg bg-white hover:bg-black hover:text-white focus:outline-none"
      >
        <p>Issue New Card</p>
        <CreditCardIcon className="h-5 w-5" />
      </button>

      <button
        rounded-lg
        type="button"
        className="w-full flex justify-between items-center px-4 py-3 shadow text-sm font-medium rounded-lg bg-white hover:bg-black hover:text-white focus:outline-none"
      >
        <p>Generate Bank Statement</p>
        <DocumentReportIcon className="h-5 w-5" />
      </button>
    </div>
  );
}
