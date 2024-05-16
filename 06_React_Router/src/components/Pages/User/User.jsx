import { useParams } from "react-router-dom";

export default function User() {
  const { id } = useParams();

  return <div className="text-center py-20 text-gray-200 text-3xl">User: {id}</div>;
}
