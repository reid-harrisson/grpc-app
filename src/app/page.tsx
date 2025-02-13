import { TextInput } from "@/components/ui/text-input";

export default function Home() {
  return (
    <div className="p-6 bg-white w-80 flex flex-col gap-2">
      <TextInput label="Email" name="email" />
      <TextInput label="Password" name="password" />
    </div>
  );
}
