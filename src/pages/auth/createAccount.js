import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { newAccount } from '../../state/slices/auth/Signup';
import { SelectPicker, toaster, Message } from 'rsuite';

const Signup = () => {
    const dispatch = useDispatch();
    const [confPass, setConfPass] = useState();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        register_as: null,
        register_id: '',
        password: '',
    });
    let newValue = {};
    function updateValue(newVal, variable) {
        variable === 'name' && (newValue = { name: newVal });
        variable === 'email' && (newValue = { email: newVal });
        variable === 'regAs' && (newValue = { register_as: newVal });
        variable === 'regId' && (newValue = { register_id: newVal });
        variable === 'password' && (newValue = { password: newVal });
        setFormData({
            ...formData,
            ...newValue,
        });
    }

    const RegType = [
        { value: 'Driver', label: 'Driver' },
        { value: 'Passenger', label: 'Passenger' },
    ];

    const signupHandler = (e) => {
        e.preventDefault();
        if (formData.password === confPass) {
            newAccount(formData, dispatch);
        } else {
            toaster.push(<Message type="error">Password not match</Message>, {
                placement: 'topCenter',
            });
        }
    };

    const fixedStyle =
        'border focus:border-red-100 w-full mb-4 bg-transparent rounded-md w-full h-9 px-4 py-1 ';

    return (
        <div className="website-main-bg-image h-full w-full absolute">
            <div className="absolute h-full w-full bg-slate-500 opacity-80"></div>
            <div className="flex items-center justify-center h-full w-full absolute top-0 left-0">
                <div className="flex items-center border border-slate-200 p-6 mx-1 md:w-[370px] bg-gray-100 rounded justify-center flex-col">
                    <h1 className="font-bold">AAUA Shuttle Sign up</h1>
                    <div>
                        <form className="">
                            <input
                                className={fixedStyle}
                                placeholder="Name"
                                type="text"
                                onChange={(e) =>
                                    updateValue(e.target.value, 'name')
                                }
                            />

                            <input
                                className={fixedStyle}
                                placeholder="email"
                                type="text"
                                onChange={(e) =>
                                    updateValue(e.target.value, 'email')
                                }
                            />

                            <SelectPicker
                                data={RegType}
                                className="w-full mb-4"
                                size="md"
                                placeholder="Register as"
                                onChange={(e) => updateValue(e, 'regAs')}
                            />

                            <input
                                className={`${fixedStyle} ${
                                    formData.register_as === 'Driver'
                                        ? ' block'
                                        : ' hidden'
                                }`}
                                placeholder="Enter your car number"
                                type="text"
                                onChange={(e) =>
                                    updateValue(e.target.value, 'regId')
                                }
                            />

                            <div className="w-full flex px-2 text-xs justify-end items-center">
                                <i className="fa fa-eye hover:text-blue-200 text-blue-100"></i>
                            </div>
                            <input
                                className={fixedStyle}
                                placeholder="password"
                                type="password"
                                onChange={(e) =>
                                    updateValue(e.target.value, 'password')
                                }
                            />

                            <div className="w-full flex px-2 text-xs justify-end items-center">
                                <i className="fa fa-eye hover:text-blue-200 text-blue-100"></i>
                            </div>
                            <input
                                className={fixedStyle}
                                placeholder="confirm password"
                                type="password"
                                onChange={(e) => setConfPass(e.target.value)}
                            />

                            <button
                                onClick={(e) => signupHandler(e)}
                                className="font-bold h-8 w-full bg-blue-500 text-white rounded-md shadow-lg"
                            >
                                Sign up
                            </button>

                            <div className="w-full flex px-2 font-bold text-xs justify-between mt-2 items-center">
                                <p className="text-sm text-blue-500">
                                    Already have account{' '}
                                </p>
                                <Link
                                    to="/signin"
                                    className="text-sm cursor-pointer hover:text-blue-700 text-blue-600"
                                >
                                    Sign in
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
