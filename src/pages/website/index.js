import React from 'react';
import { useSelector } from 'react-redux';
import BookBus from '../../components/website/bookModal';
import HomeWrapper from '../../components/website/HomeWrapper';
// import AvailablePickup from './available_pickup';
const Home = () => {
    const { userData } = useSelector((state) => state.reducer.loginReducer);
    const myData = userData && userData.data ? userData.data : null;

    return (
        <HomeWrapper userData={myData}>
            <div className="flex items-center pt-10 md:pt-0 flex-col sm:flex-row justify-evenly absolute top-0 left-0 h-full w-full">
                <div className="w-full sm:w-3/4 md:w-1/2 px-6 md:px-24">
                    <h2 className="font-black text-xl sm:text-4xl text-white">
                        Now <br /> its easy to get Shuttle Bus
                    </h2>
                    <p className="text-sm text-white mt-5">
                        We give car support to all students in school opening
                        hours. AAUA students can now book a shuttle to convey
                        one or many to their lecture theaters
                    </p>
                </div>
                <div className="md:w-1/2 md:mt-10">
                    <BookBus userData={myData} />
                    {/* <AvailablePickup /> */}
                </div>
            </div>
        </HomeWrapper>
    );
};

export default Home;
