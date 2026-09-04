import React from "react";

const ScoreBadge = ({ score }: { score: number }) => {
    let text = "Need Work";
    let style = "bg-badge-red text-red-600";

    if (score > 70) {
        text = "Strong";
        style = "bg-badge-green text-green-600";
    } else if (score > 49) {
        text = "Good Start";
        style = "bg-badge-yellow text-yellow-600";
    }

    return (
        <div className={`px-3 py-1 rounded-full ${style}`}>
            <p className="text-sm font-medium">{text}</p>
        </div>
    );
};

export default ScoreBadge;
