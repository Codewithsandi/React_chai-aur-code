import { useLoaderData } from "react-router-dom";

export default function Github() {
  const data = useLoaderData();
  //   const [data, setdata] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/codewithsandi")
  //       .then((res) => res.json())
  //       .then((res) => setdata(res));
  //   }, [data]);

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-20 text-gray-200 text-3xl">
      <div> User Name: {data.name}</div>
      <img src={data.avatar_url} width={200} alt="" />
    </div>
  );
}

export const GithubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/codewithsandi");
  return response;
};
