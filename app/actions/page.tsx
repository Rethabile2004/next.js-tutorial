import Form from "@/components/Form";
import UserList from "@/components/UserList";

export default function Actions() {
  return (
    <section className="grid md:grid-cols-2 gap-3 p-3">
      <Form />
      <UserList />
    </section>
  )
}
