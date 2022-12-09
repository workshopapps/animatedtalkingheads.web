import { ReactComponent as Search } from "../assets/search-normal.svg";
import { ReactComponent as YouTube } from "../assets/youtube.svg";
import { ReactComponent as Twitter } from "../assets/twitter.svg";
import { ReactComponent as FaceBook } from "../assets/facebook.svg";
import { ReactComponent as Gdrive } from "../assets/gdrive.svg";
import { ReactComponent as OneDrive } from "../assets/onedrive.svg";
import { ReactComponent as DropBox } from "../assets/dropbox.svg";
import { ReactComponent as Instagram } from "../assets/instagram.svg";
import { ReactComponent as LinkedIn } from "../assets/linkedin.svg";
import { ReactComponent as Cube } from "../assets/3dcube.svg";
import ToggleSwitch from "./ToggleSwitch";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Layout from "../../../components/UI/Layout";
import SettingsNav from "../../../components/UI/SettingsNav";
import PageTitle from '../../../components/UI/page-title';


const IntegrationAndApps = () => {

    const [youtube, setYoutube] = useState(true)
    const [twitter, setTwitter] = useState(true)
    const [facebook, setFacebook] = useState(true)
    const [googleDrive, setGoogleDrive] = useState(true)
    const [oneDrive, setOneDrive] = useState(true)
    const [dropBox, setDropBox] = useState(true)
    const [instagram, setInstagram] = useState(true)
    const [linkedIn, setLinkedin] = useState(true)

    const [error, setError] = useState()
    // const [socials, setSocials] = useState({
    //     facebook: false, youtube: false,
    //     twitter: false, googleDrive: false, oneDrive: false, dropBox: false, instagram: false,
    //     linkedIn: false
    // })


    const data =
    {
        "youtube": youtube,

        "twitter": twitter,

        "facebook": facebook,

        "googleDrive": googleDrive,

        "oneDrive": oneDrive,

        "dropBox": dropBox,

        "instagram": instagram,

        "linkedIn": linkedIn,

    }

    const postRequest = () => {
        axios.post("https://api.voxclips.hng.tech/settings/add", data, {
            headers: {
                'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRlZmF1bEBnbWFpbC5jb20iLCJpYXQiOjE2NzA0OTc5MDQsImV4cCI6MTY3MDc1NzEwNH0.gQPUwmmHuQW7f7SEXkG5p4ypYHvdT2RwqEULDRWl10k"
            }
        })
            .then(res => console.log(res))
            .catch(error => setError(error.message))
    }

    const handleClick = (item) => {
        console.log(item)
        if (item === "twitter") {
            setTwitter(!twitter)
        } else if (item === "facebook")
            setFacebook(!facebook)
        else if (item === "youtube")
            setYoutube(!youtube)
        else if (item === "googleDrive")
            setGoogleDrive(!googleDrive)
        else if (item === "oneDrive")
            setOneDrive(!oneDrive)
        else if (item === "dropBox")
            setDropBox(!dropBox)
        else if (item === "instagram")
            setInstagram(!instagram)
        else if (item === "linkedIn")
            setLinkedin(!linkedIn)


        postRequest()
    };


    // axios
    //     .post("https://api.voxclips.hng.tech/settings/add", socials)

    //     .then((res) => {
    //         if (res.data.link) {
    //             window.location.replace(res.data.link);
    //         } else {
    //             setError(res);
    //         }
    //     })
    //     .then((res) => console.log(res))
    //     .catch((err) => {
    //         console.log(err);
    //         setError('There was an error with your request');
    //     });




    return (
        <Layout>
            <PageTitle title="Settings" />
            <SettingsNav />


            <section className=" mt-16 m-auto  w-[350px] lg:w-[460px] border-b-[#D9D9D9] mb-44  grid" >

                <p className=" text-lg w-4/5">You can connect and upload all your videos to your favourite softwares directly from Voxclips</p>
                <div className="grid gap-2 md:flex md:gap-4 mt-6">
                    <p className="text-sm self-center">Connect VoxClips to</p>
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <Search className="absolute top-3 left-2" />
                            <input type="search" className="bg-[#E1E1E1] border-[#9B9D9F] border pl-10 rounded-md w-52 max-w-[259px] h-10" placeholder="Search for Apps" />
                        </div>
                        <button className="bg-[#2563EB] px-3 h-10 w-24 rounded-md text-white">Connect</button>
                    </div>
                </div>
                <div className="flex gap-x-36 mt-6">
                    <div className="grid gap-y-5">
                        <div className="border-t pt-4 flex justify-between items-center">
                            <div className="flex gap-2">
                                <YouTube className="w-6 h-6" />
                                <p className="self-center text-base">YouTube</p>
                            </div>
                            <ToggleSwitch socialName="youtube" toggledState={false} onToggle={handleClick} />
                        </div>
                        <div className="border-t pt-4 flex justify-between items-center">
                            <div className="flex gap-3">
                                <Twitter className="w-6 h-6" />
                                <p className="self-center">Twitter</p>
                            </div>
                            <ToggleSwitch socialName="twitter" toggledState={false} onToggle={handleClick} />
                        </div>
                        <div className="border-t pt-4 flex justify-between items-center">
                            <div className="flex gap-3">
                                <FaceBook className="w-6 h-6" />
                                <p className="self-center">FaceBook</p>
                            </div>
                            <ToggleSwitch socialName="facebook" toggledState={false} onToggle={handleClick} />
                        </div>
                        <div className="border-t pt-4 border-b pb-4 flex justify-between items-center">
                            <div className="flex gap-3">
                                <Gdrive className="w-6 h-6" />
                                <p className="self-center">Google Drive</p>
                            </div>
                            <ToggleSwitch socialName="googleDrive" toggledState={false} onToggle={handleClick} />
                        </div>
                    </div>
                    <div className="grid gap-y-5">
                        <div className="border-t pt-4 flex justify-center items-center">
                            <div className="flex gap-3">
                                <OneDrive className="w-6 h-6" />
                                <p className="self-center">One Drive</p>
                            </div>
                            <ToggleSwitch socialName="oneDrive" toggledState={false} onToggle={handleClick} />
                        </div>
                        <div className="border-t pt-4 flex justify-between items-center">
                            <div className="flex gap-3">
                                <DropBox className="w-6 h-6" />
                                <p className="self-center">Drop Box</p>
                            </div>
                            <ToggleSwitch socialName="dropBox" toggledState={false} onToggle={handleClick} />
                        </div>
                        <div className="border-t pt-4 flex justify-between items-center">
                            <div className="flex gap-3">
                                <Instagram className="w-6 h-6" />
                                <p className="self-center">Instagram</p>
                            </div>
                            <ToggleSwitch socialName="instagram" toggledState={false} onToggle={handleClick} />
                        </div>
                        <div className="border-t pt-4 border-b pb-4 flex justify-between items-center">
                            <div className="flex gap-3">
                                <LinkedIn className="w-6 h-6" />
                                <p className="self-center">LinkedIn</p>
                            </div>
                            <ToggleSwitch socialName="linkedin" toggledState={false} onToggle={handleClick} />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}


export default IntegrationAndApps;