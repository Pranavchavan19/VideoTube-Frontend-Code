// import React, { useEffect } from "react";
// import { ChannelHeader  , ChannelNavigate} from "../../components";
// import { useDispatch, useSelector } from "react-redux";
// import { userChannelProfile } from "../../Store/Slices/userSlice.js";
// import { Outlet, useParams } from "react-router-dom";

// function Channel() {
//     const dispatch = useDispatch();
//     const { username } = useParams();

//     const channel = useSelector((state) => state.user?.profileData);
//     useEffect(() => {
//         dispatch(userChannelProfile(username));
//     }, [dispatch, username]);

//     window.scrollTo(0, 0);

//     return (
//         <>
//             {channel && (
//                 <ChannelHeader
//                     username={username}
//                     coverImage={channel?.coverImage.url}
//                     avatar={channel?.avatar.url}
//                     subscribedCount={channel?.channelsSubscribedToCount}
//                     fullName={channel?.fullName}
//                     subscribersCount={channel?.subcribersCount}
//                     isSubscribed={channel?.isSubscribed}
//                     channelId={channel?._id}
//                 />
//             )}
//             <ChannelNavigate username={username} />
//             <div className="overflow-y-scroll h-[32rem] sm:h-96 mb-20 sm:mb-0">
//                 <Outlet />
//             </div>
//         </>
//     );
// }

// export default Channel;

// import React, { useEffect } from "react";
// import { ChannelHeader, ChannelNavigate } from "../../components";
// import { useDispatch, useSelector } from "react-redux";
// import { userChannelProfile } from "../../Store/Slices/userSlice";
// import { Outlet, useParams } from "react-router-dom";

// function Channel() {
//     const dispatch = useDispatch();
//     const { username } = useParams(); // Extract username from URL parameters

//     // Get the channel profile data from the Redux store
//     const channel = useSelector((state) => state.user?.profileData);

//     useEffect(() => {
//         // Check if username is available before dispatching the action
//         if (username) {
//             dispatch(userChannelProfile(username));
//         } else {
//             console.error("Username is undefined or missing in URL parameters");
//         }
//     }, [dispatch, username]);

//     // Ensure the window scrolls to the top when the page loads
//     window.scrollTo(0, 0);

//     return (
//         <>
//             {channel && (
//                 <ChannelHeader
//                     username={username}
//                     coverImage={channel?.coverImage.url}
//                     avatar={channel?.avatar.url}
//                     subscribedCount={channel?.channelsSubscribedToCount}
//                     fullName={channel?.fullName}
//                     subscribersCount={channel?.subcribersCount}
//                     isSubscribed={channel?.isSubscribed}
//                     channelId={channel?._id}
//                 />
//             )}
//             <ChannelNavigate username={username} />
//             <div className="overflow-y-scroll h-[32rem] sm:h-96 mb-20 sm:mb-0">
//                 <Outlet />
//             </div>
//         </>
//     );
// }

// export default Channel;
import React, { useEffect } from "react";
import { ChannelHeader, ChannelNavigate } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { userChannelProfile } from "../../Store/Slices/userSlice";
import { Outlet, useParams } from "react-router-dom";

function Channel() {
    const dispatch = useDispatch();
    const { username } = useParams();  // Extract username from URL parameters
    const channel = useSelector((state) => state.user?.profileData);

    useEffect(() => {
        if (username) {
            dispatch(userChannelProfile(username));  // Dispatch action to get channel profile data
        } else {
            console.error("Username is undefined or missing in URL parameters");
        }
    }, [dispatch, username]);

    window.scrollTo(0, 0);

    return (
        <>
            {channel && (
                <ChannelHeader
                    username={username}
                    coverImage={channel?.coverImage.url}
                    avatar={channel?.avatar.url}
                    subscribedCount={channel?.channelsSubscribedToCount}
                    fullName={channel?.fullName}
                    subscribersCount={channel?.subscribersCount}
                    isSubscribed={channel?.isSubscribed}
                    channelId={channel?._id}
                />
            )}
            <ChannelNavigate username={username} />
            <div className="overflow-y-scroll h-[32rem] sm:h-96 mb-20 sm:mb-0">
                <Outlet />
            </div>
        </>
    );
}

export default Channel;
