import { useQuery } from "@tanstack/react-query";

const fetchData = async () => {
  const res = await fetch(
    "https://gist.githubusercontent.com/vinicyuscueto/b17f784e6c7eec209c1f468ceed4917d/raw/portfolio.json",
    {
      cache: "no-store",
    },
  );
  if (!res) throw new Error("error");
  return res.json();
};

export const useData = () => {
  return useQuery({
    queryKey: ["data"],
    queryFn: fetchData,
    refetchOnWindowFocus: false
  });
};
