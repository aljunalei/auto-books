
"use client";
import { CheckCircle } from "lucide-react";

// contract
interface ServiceCardProps
    {
        title: string,
        description: string,
        features: string[],
        icon: React.ReactNode,
        Classname?: string
    }
function ServiceCard({
title,
description,
features,
icon,
Classname
}: ServiceCardProps) {
return(
    <div className={`bg-white rounded-lg shadow-md p-6 flex flex-col items-start ${Classname} hover:shadow-xl transition-shadow duration-300 relative`}>
        {icon && (
            <div className="absolute top-4 left-4">{icon}</div>
        )}
        <div className="pt-8">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="space-y-2">
            {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    {feature}
                </li>
            ))}
        </ul>
        </div>
    </div>
)
}

export default ServiceCard;
