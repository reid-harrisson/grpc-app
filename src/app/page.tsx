import { RoundButton } from "@/components/ui/round-button";
import { TextInput } from "@/components/ui/text-input";

export default function Home() {
  return (
    <div className="p-8 bg-white w-80 flex flex-col gap-3">
      <TextInput label="First Name" name="firstname" />
      <TextInput label="Last Name" name="lastname" />
      <TextInput label="Email" name="email" />
      <TextInput label="City" name="city" />
      <TextInput label="Country" name="country" />
      <RoundButton label="Submit" />
    </div>
  );
}
