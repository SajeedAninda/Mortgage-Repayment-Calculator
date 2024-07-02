import React from 'react';

const Calculator = () => {
    return (
        <div className='bg-[#e3f3fd] h-screen flex items-center w-full mx-auto rounded-l-2xl'>
            <div className='w-[70%] mx-auto flex items-center bg-white rounded-l-2xl '>
                <div className='calcDiv w-[50%] h-full bg-white rounded-l-2xl p-8'>
                    <div className='w-full flex justify-between items-center'>
                        <h2 className='text-[20px] text-[#122f37] font-bold'>Mortgage Calculator</h2>
                        <p className='text-[#4E6E7E] text-[13px] underline hover:text-[#122f37]'>Clear All</p>
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