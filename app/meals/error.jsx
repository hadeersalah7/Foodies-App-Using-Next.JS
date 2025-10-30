"use client"
import React from "react";

const error = ({ error }) => {
    return (
        <main className="error">
            <h1>An Error Occured!</h1>
            <p style={{ color: "#de1010" }}>Failed To Fetch Meal Data. Please Try Again Later.</p>
        </main>
    );
};

export default error;
