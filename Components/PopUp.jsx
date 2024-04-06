import React, { useState, useEffect } from "react";

const PupUp = ({ setOpenModel, donate, donateFunction, getDonations }) => {
  const [amount, setAmount] = useState("");
  const [allDonationData, setAllDonationData] = useState([]);

  const createDonation = async () => {
    try {
      const data = await donateFunction(donate.pId, amount);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchDonations = async () => {
      const donationData = await getDonations(donate.pId);
      setAllDonationData(donationData);
    };
    fetchDonations();
  }, [donate.pId, getDonations]);

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/* Content */}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/* Header */}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">{donate.title}</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setOpenModel(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">X</span>
              </button>
            </div>
            {/* Body */}
            <div className="relative p-6 flex-auto">
              <p className="text-lg leading-relaxed">{donate.description}</p>
              <input
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Amount"
                required
                type="text"
                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                id="amount"
                name="amount"
              />
              {allDonationData.map((donation, i) => (
                <p key={i} className="my-4 text-slate-500 text-lg leading-relaxed">
                  {i + 1}: {donation.donation} - {donation.donator.slice(0, 35)}
                </p>
              ))}
            </div>
            {/* Footer */}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setOpenModel(false)}
              >
                Close
              </button>
              <button
                className="background text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => createDonation()}
              >
                Donate
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default PupUp;