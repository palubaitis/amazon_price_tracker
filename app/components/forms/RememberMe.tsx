import { Checkbox } from "~/components/ui/checkbox"

export default function RememberMe() {
  return (
   <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-gray-500 text-gray-600"
      >
      Remember me
      </label>
    </div>
  );
}

