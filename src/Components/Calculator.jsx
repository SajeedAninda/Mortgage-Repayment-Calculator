import React, { useState } from 'react';
import calcImage from "../assets/icon-calculator.svg";
import emptyIcon from "../assets/illustration-empty.svg";

const Calculator = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [mortgageAmount, setMortgageAmount] = useState('');
    const [mortgageTerm, setMortgageTerm] = useState('');
    const [interestRate, setInterestRate] = useState('');

    const [mortgageAmountError, setMortgageAmountError] = useState(null);
    const [mortgageTermError, setMortgageTermError] = useState(null);
    const [interestRateError, setInterestRateError] = useState(null);
    const [selectedOptionError, setSelectedOptionError] = useState(null);
    const [monthlyPayment, setMonthlyPayment] = useState(null);
    const [totalRepayment, setTotalRepayment] = useState(null);

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleCalculation = (e) => {
        e.preventDefault();
        let isError = false;

        if (!mortgageAmount) {
            setMortgageAmountError("This Field is Required");
            isError = true;
        } else {
            setMortgageAmountError(null);
        }

        if (!mortgageTerm) {
            setMortgageTermError("This Field is Required");
            isError = true;
        } else {
            setMortgageTermError(null);
        }

        if (!interestRate) {
            setInterestRateError("This Field is Required");
            isError = true;
        } else {
            setInterestRateError(null);
        }

        if (!selectedOption) {
            setSelectedOptionError("This Field is Required");
            isError = true;
        } else {
            setSelectedOptionError(null);
        }

        if (!isError) {
            const P = parseFloat(mortgageAmount);
            const r = parseFloat(interestRate) / 12;
            const n = parseInt(mortgageTerm) * 12;

            let M = 0;
            let totalRepaid = 0;

            if (selectedOption === 'repayment') {
                M = P * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
                totalRepaid = M * n;
            } else if (selectedOption === 'interestOnly') {
                M = P * r;
                totalRepaid = P;
            }

            setMonthlyPayment(M.toFixed(2));
            setTotalRepayment(totalRepaid.toFixed(2));
        }
    };

    const handleClearAll = () => {
        setSelectedOption('');
        setMortgageAmount('');
        setMortgageTerm('');
        setInterestRate('');
        setMonthlyPayment(null);
        setTotalRepayment(null);
        setMortgageAmountError(null);
        setMortgageTermError(null);
        setInterestRateError(null);
    };

    return (
        <div className='bg-[#e3f3fd] h-fit flex w-full mx-auto rounded-l-2xl py-12'>
            <div className='w-[95%] lg:w-[70%] mx-auto flex flex-col lg:flex-row bg-white rounded-l-2xl'>
                <div className='calcDiv w-full lg:w-[50%] h-full bg-white rounded-l-2xl p-8'>
                    <div className='w-full flex justify-between items-center'>
                        <h2 className='text-[20px] text-[#122f37] font-bold'>Mortgage Calculator</h2>
                        <p className='text-[#4E6E7E] text-[13px] underline hover:text-[#122f37] cursor-pointer' onClick={handleClearAll}>Clear All</p>
                    </div>
                    <div className='mt-5'>
                        <form onSubmit={handleCalculation}>
                            <div>
                                <label className='text-[16px] text-[#4E6E7E]' htmlFor="mortgageAmount">Mortgage Amount</label>
                                <div className='relative mt-2'>
                                    <label className={`absolute inset-y-0 left-[1px] h-fit flex items-center px-3 py-3 ${mortgageAmountError ? 'bg-[#D73C37] text-white' : 'bg-[#e3f3fd] text-[#4E6E7E]'} text-[16px] font-bold rounded-l-lg top-[1px]`}>
                                        £
                                    </label>
                                    <input
                                        value={mortgageAmount}
                                        onChange={(e) => { setMortgageAmount(e.target.value) }}
                                        className={`block w-full pl-10 pr-3 py-3 text-[16px] font-bold text-[#4E6E7E] bg-transparent border ${mortgageAmountError ? 'border-[#D73C37]' : 'border-[#122f37]'} rounded-lg focus:outline-none focus:border-[#D7DA2F]`}
                                        type="number"
                                        name="mortgageAmount"
                                        id="mortgageAmount"
                                    />
                                    {mortgageAmountError && <p className='text-[14px] mt-2 text-[#D73C37]'>{mortgageAmountError}</p>}
                                </div>

                            </div>
                            <div className='mt-5 flex flex-col lg:flex-row justify-between gap-5'>
                                <div className='flex-1'>
                                    <label className='text-[16px] text-[#4E6E7E]' htmlFor="mortgageTerm">Mortgage Term</label>
                                    <div className='relative mt-2'>
                                        <label className={`absolute inset-y-0 right-[1px] h-fit flex items-center px-3 py-3 ${mortgageAmountError ? 'bg-[#D73C37] text-white' : 'bg-[#e3f3fd] text-[#4E6E7E]'} text-[16px] font-bold rounded-r-lg top-[1px]`}>
                                            years
                                        </label>
                                        <input
                                            value={mortgageTerm}
                                            onChange={(e) => { setMortgageTerm(e.target.value) }}
                                            className={`block w-full pl-10 pr-3 py-3 text-[16px] font-bold text-[#4E6E7E] bg-transparent border ${mortgageTermError ? 'border-[#D73C37]' : 'border-[#122f37]'} rounded-lg focus:outline-none focus:border-[#D7DA2F]`}
                                            type="number"
                                            name="mortgageTerm"
                                            id="mortgageTerm"
                                        />
                                        {mortgageTermError && <p className='text-[14px] mt-2 text-[#D73C37]'>{mortgageTermError}</p>}
                                    </div>
                                </div>
                                <div className='flex-1'>
                                    <label className='text-[16px] text-[#4E6E7E]' htmlFor="interestRate">Interest Rate</label>
                                    <div className='relative mt-2'>
                                        <label className={`absolute inset-y-0 right-[1px] h-fit flex items-center px-3 py-3 ${mortgageAmountError ? 'bg-[#D73C37] text-white' : 'bg-[#e3f3fd] text-[#4E6E7E]'} text-[16px] font-bold rounded-r-lg top-[1px]`}>
                                            %
                                        </label>
                                        <input
                                            value={interestRate}
                                            onChange={(e) => { setInterestRate(e.target.value) }}
                                            className={`block w-full pl-10 pr-3 py-3 text-[16px] font-bold text-[#4E6E7E] bg-transparent border ${interestRateError ? 'border-[#D73C37]' : 'border-[#122f37]'} rounded-lg focus:outline-none focus:border-[#D7DA2F]`}
                                            type="number"
                                            name="interestRate"
                                            id="interestRate"
                                        />
                                        {interestRateError && <p className='text-[14px] mt-2 text-[#D73C37]'>{interestRateError}</p>}
                                    </div>
                                </div>
                            </div>
                            <div className='mt-5'>
                                <label className='text-[16px] text-[#4E6E7E]' htmlFor="mortgageType">Mortgage Type</label>
                                <div className='mt-2'>
                                    <label
                                        className={`border flex justify-start items-center border-[#122f37] rounded-lg mb-2 px-3 py-3 cursor-pointer ${selectedOption === 'repayment' ? 'bg-[#DFE08A]' : ''}`}
                                        htmlFor="repayment"
                                    >
                                        <input
                                            type="radio"
                                            id="repayment"
                                            name="mortgageType"
                                            value="repayment"
                                            checked={selectedOption === 'repayment'}
                                            onChange={handleOptionChange}
                                            className="mr-2"
                                        />
                                        <span className='text-[#4E6E7E] font-bold text-[16px]'>
                                            Repayment
                                        </span>
                                    </label>
                                    <label
                                        className={`border flex justify-start items-center border-[#122f37] rounded-lg px-3 py-3 cursor-pointer ${selectedOption === 'interestOnly' ? 'bg-[#DFE08A]' : ''}`}
                                        htmlFor="interestOnly"
                                    >
                                        <input
                                            type="radio"
                                            id="interestOnly"
                                            name="mortgageType"
                                            value="interestOnly"
                                            checked={selectedOption === 'interestOnly'}
                                            onChange={handleOptionChange}
                                            className="mr-2"
                                        />
                                        <span className='text-[#4E6E7E] font-bold text-[16px]'>
                                            Interest Only
                                        </span>
                                    </label>

                                    {selectedOptionError && <p className='text-[14px] mt-2 text-[#D73C37]'>{selectedOptionError}</p>}
                                </div>
                            </div>
                            <button type='submit' className='mt-8 py-3 w-full lg:w-[70%] rounded-[45px] text-[16px] font-bold text-[#122f37] flex justify-center items-center gap-3 bg-[#D7DA2F] hover:bg-[#DFE08A]'>
                                <img src={calcImage} alt="" />
                                Calculate Repayments
                            </button>
                        </form>
                    </div>
                </div>
                <div className='resultDiv w-full lg:w-[50%] h-full bg-[#122f37] p-8 rounded-none lg:rounded-bl-[70px]'>
                    {monthlyPayment ? (
                        <>
                            <div>
                                <h3 className='text-white text-[20px] font-bold text-left'>Your Results</h3>
                                <p className='text-[#9ABED5] mt-3'>Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.</p>

                                <div className='w-full h-fit p-8 border-t-2 rounded-lg bg-[#0d252b] border-[#D7DA2F] mt-8'>
                                    <p className='text-[#9ABED5]'>Your Monthly Repayments</p>
                                    <p className='text-[55px] font-bold text-[#D7DA2F] pb-6'>£{monthlyPayment}</p>
                                    <hr className='py-4' />
                                    <p className='text-[#9ABED5]'>Total You will repay over the term</p>
                                    <p className='text-white text-[20px] font-bold text-left'>£{totalRepayment}</p>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className='flex h-full justify-center items-center gap-5 flex-col'>
                                <img src={emptyIcon} alt="" />
                                <h3 className='text-white text-[20px] font-bold'>Results shown here</h3>
                                <p className='text-[#9ABED5] text-[16px] text-center'>
                                    Complete the form and click “calculate repayments” to see what your monthly repayments would be.
                                </p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Calculator;
