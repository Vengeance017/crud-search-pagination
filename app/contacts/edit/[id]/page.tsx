import UpdateForm from "@/components/edit-form";
import { getConstactsById } from "@/lib/data";
import { notFound } from "next/navigation";

const UpdateContactPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const contact = await getConstactsById(id);

  if (!contact) {
    notFound();
  }
  return (
    <div className="max-w-md mx-auto mt-5">
      <h1 className="text-2xl text-center mb-2 ">Update Conctact</h1>
      <UpdateForm contact={contact} />
    </div>
  );
};

export default UpdateContactPage;
