import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "../components/Container.jsx";

function SettingPage() {
    const navigate = useNavigate();

    const goToSettingPage = () => {
        navigate("/setting");
    };

    return (
        <Container>
            <div className="text-white bg-gray-900 p-4 max-w-screen-lg mx-auto">
                <h1 className="text-2xl font-bold mb-6">Settings</h1>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Account</h2>
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-3">
                            <span>Profile</span>
                            <button 
                                className="text-blue-500" 
                                onClick={goToSettingPage}
                            >
                                Edit
                            </button>
                        </div>
                        <div className="flex justify-between items-center">
                            <span>Change Password</span>
                            <button 
                                className="text-blue-500" 
                                onClick={goToSettingPage}
                            >
                                Change
                            </button>
                        </div>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Notifications</h2>
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <div className="flex items-center mb-3">
                            <input type="checkbox" id="emailNotifications" className="mr-3" />
                            <label htmlFor="emailNotifications">Email Notifications</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" id="pushNotifications" className="mr-3" />
                            <label htmlFor="pushNotifications">Push Notifications</label>
                        </div>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Privacy</h2>
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-3">
                            <span>Ad Preferences</span>
                            <button 
                                className="text-blue-500" 
                                onClick={goToSettingPage}
                            >
                                Manage
                            </button>
                        </div>
                        <div className="flex justify-between items-center">
                            <span>Blocked Users</span>
                            <button 
                                className="text-blue-500" 
                                onClick={goToSettingPage}
                            >
                                View
                            </button>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4">Advanced Settings</h2>
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <div className="flex justify-between items-center">
                            <span>Delete Account</span>
                            <button 
                                className="text-red-500" 
                                onClick={goToSettingPage}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </Container>
    );
}

export default SettingPage;
