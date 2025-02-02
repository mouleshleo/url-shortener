import React, { useEffect } from "react";
import { useState } from 'react';
import axios from "axios";

function Url({ longUrl, setShortUrl }) {
    useEffect(() => {
        const shortenUrl = async() => {
            if (!longUrl) return;

            try {
                const response = await axios.post(
                    "https://api.tinyurl.com/create",
                    { url : longUrl },
                    {
                        headers: {
                            Authorization: `Bearer ${import.meta.env.VITE_TINYURL_API_KEY}`,
                            "Content-Type": "application/json",
                        },
                    }
                );
                console.log(response);

                setShortUrl(response.data.data.tiny_url);
            } catch (error) {
                console.error("Error : ", error);
                setShortUrl(error.response.data.errors);
            }

        };
        

        shortenUrl();
    }, [longUrl, setShortUrl]);

    return (
        <p>Shortening: {longUrl}</p>
    );
};

export default Url;