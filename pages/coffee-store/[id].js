import { useRouter } from "next/router";

const CoffeeStore = () => {
  const router = useRouter();
  console.log(router);

  return <div>COFFEE STORE {router.query.id}</div>;
};

export default CoffeeStore;
