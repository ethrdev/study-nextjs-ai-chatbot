import { Chat } from "@/components/custom/chat";
import { generateUUID } from "@/lib/utils";

export default async function Page() {
  // generateUUID ist eine Funktion, die einen eindeutigen ID erstellt
  // Diese ID wird als Schlüssel für den Chat verwendet, um die Nachrichten zu speichern
  const id = generateUUID();
  // Der Chat wird mit der ID und den initialen Nachrichten gerendert
  return <Chat key={id} id={id} initialMessages={[]} />;
}
