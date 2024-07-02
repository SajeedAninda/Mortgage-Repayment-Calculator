import React, { useState } from 'react';
import calcImage from "../assets/icon-calculator.svg"

const Calculator = () => {
    let [selectedOption, setSelectedOption] = useState('');

    let handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    return (
        <div className='bg-[#e3f3fd] h-screen flex items-center w-full mx-auto rounded-l-2xl'>
            <div className='w-[70%] mx-auto flex items-center bg-white rounded-l-2xl '>
                <div className='calcDiv w-[50%] h-full bg-white rounded-l-2xl p-8'>
                    <div className='w-full flex justify-between items-center'>
                        <h2 className='text-[20px] text-[#122f37] font-bold'>Mortgage Calculator</h2>
                        <p className='text-[#4E6E7E] text-[13px] underline hover:text-[#122f37] cursor-pointer'>Clear All</p>
                    </div>


                    <div className='mt-5'>
                        <form>
                            <div>
                                <label className='text-[16px] text-[#4E6E7E]' htmlFor="mortgageAmount">Mortgage Amount</label>
                                <div className='relative mt-2'>
                                    <label className='absolute inset-y-0 left-[1px] h-fit flex items-center px-3 py-3 bg-[#e3f3fd] text-[#4E6E7E] text-[16px] font-bold rounded-l-lg top-[1px]'>
                                        £
                                    </label>
                                    <input
                                        className='block w-full pl-10 pr-3 py-3 text-[16px] font-bold text-[#4E6E7E] bg-transparent border border-[#122f37] rounded-lg focus:outline-none focus:border-[#D7DA2F]'
                                        type="number"
                                        name="mortgageAmount"
                                        id="mortgageAmount"
                                    />
                                </div>
                            </div>

                            <div className='mt-5 flex justify-between items-center gap-5'>
                                <div className='flex-1'>
                                    <label className='text-[16px] text-[#4E6E7E]' htmlFor="mortgageTerm">Mortgage Term</label>
                                    <div className='relative mt-2'>
                                        <label className='absolute inset-y-0 right-[1px] h-fit flex items-center px-3 py-3 bg-[#e3f3fd] text-[#4E6E7E] text-[16px] font-bold rounded-r-lg top-[1px]'>
                                            years
                                        </label>
                                        <input
                                            className='block w-full pl-10 pr-3 py-3 text-[16px] font-bold text-[#4E6E7E] bg-transparent border border-[#122f37] rounded-lg focus:outline-none focus:border-[#D7DA2F]'
                                            type="number"
                                            name="mortgageTerm"
                                            id="mortgageTerm"
                                        />
                                    </div>
                                </div>


                                <div className='flex-1'>
                                    <label className='text-[16px] text-[#4E6E7E]' htmlFor="interestRate">Interest Rate</label>
                                    <div className='relative mt-2'>
                                        <label className='absolute inset-y-0 right-[1px] h-fit flex items-center px-3 py-3 bg-[#e3f3fd] text-[#4E6E7E] text-[16px] font-bold rounded-r-lg top-[1px]'>
                                            %
                                        </label>
                                        <input
                                            className='block w-full pl-10 pr-3 py-3 text-[16px] font-bold text-[#4E6E7E] bg-transparent border border-[#122f37] rounded-lg focus:outline-none focus:border-[#D7DA2F]'
                                            type="number"
                                            name="interestRate"
                                            id="interestRate"
                                        />
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
                                </div>
                            </div>

                            <button className='mt-8 py-3 w-[70%] rounded-[45px] text-[16px] font-bold text-[#122f37] flex justify-center items-center gap-3 bg-[#D7DA2F] hover:bg-[#DFE08A]'>
                                <img src={calcImage} alt="" />
                                Calculate Repayments
                            </button>
                        </form>
                    </div>
                </div>

                <div className='resultDiv w-[50%] h-full bg-[#122f37]'>
                    hi
                </div>
            </div>
        </div>
    );
};

export default Calculator;