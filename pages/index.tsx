import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/customers", {
        method: "POST",
        body: JSON.stringify({
          limit: 100,
        }),
      });

      return response.json();
    };

    fetchData().then((res) => {
      console.log('res :>> ', res);
      setData(JSON.parse(res));
    });
  }, []);

  return (
    <div>
      <h1>Hello World!</h1>

      <div className="flex border rounded border-gray-700">
        <table className="min-w-full rounded-md text-gray-900 md:table">
          <thead className="rounded-md bg-gray-900 text-slate-200 text-left text-sm font-normal">
            <tr>
              <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                No.
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Name
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="rounded-md bg-gray-700 text-slate-50 text-left text-sm font-normal">
            {data && data?.map((row) => (
              <tr key={row.poolAddress}>
                <td
                  scope="col"
                  className="px-4 py-5 font-medium sm:pl-6 cursor-pointer"
                >
                  {row.index}
                </td>
                <td scope="col" className="px-3 py-5 font-medium">
                  {row.name}
                </td>
                <td scope="col" className="px-3 py-5 font-medium">
                  {row.birthdate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
