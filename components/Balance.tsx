import getUserBalance from "@/app/actions/getUserBalance";
import { addCommas } from "@/lib/utils";

const Balance = async () => {
  const { balance } = await getUserBalance();
  const sign = Number(balance) < 0 ? "-" : "";

  return (
    <>
      <h4>Your balance</h4>
      <h1>
        {sign}${addCommas(Number(Math.abs(Number(balance))?.toFixed(2) ?? 0))}
      </h1>
    </>
  );
};

export default Balance;
