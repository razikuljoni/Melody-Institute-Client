import { BiSelectMultiple } from "react-icons/bi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { SiGoogleclassroom } from "react-icons/si";
import { NavLink } from "react-router-dom";

export const studentNavigation = (
    <ul className="pt-2 pb-4 space-y-1 text-lg">
        <li className="text-gray-900 bg-gray-100">
            <NavLink
                to="/dashboard/selected-classes"
                className="flex items-center p-2 space-x-3 rounded-md"
            >
                <BiSelectMultiple />
                <span>Selected Classes</span>
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/dashboard/enrolled-classes"
                className="flex items-center p-2 space-x-3 rounded-md"
            >
                <SiGoogleclassroom />
                <span>Enrolled Classes</span>
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/dashboard/"
                className="flex items-center p-2 space-x-3 rounded-md"
            >
                <RiSecurePaymentLine />
                <span>Payment History</span>
            </NavLink>
        </li>
    </ul>
);

export const instructorNavigation = (
    <ul className="pt-2 pb-4 space-y-1 text-lg">
        <li className="text-gray-900 bg-gray-100">
            <NavLink
                to="/dashboard/selected-classes"
                className="flex items-center p-2 space-x-3 rounded-md"
            >
                <BiSelectMultiple />
                <span>My Classes</span>
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/dashboard/enrolled-classes"
                className="flex items-center p-2 space-x-3 rounded-md"
            >
                <SiGoogleclassroom />
                <span>Add Class</span>
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/dashboard/"
                className="flex items-center p-2 space-x-3 rounded-md"
            >
                <RiSecurePaymentLine />
                <span>My Classes</span>
            </NavLink>
        </li>
    </ul>
);

export const adminNavigation = (
    <ul className="pt-2 pb-4 space-y-1 text-lg">
        <li className="text-gray-900 bg-gray-100">
            <NavLink
                to="/dashboard/manage-classes"
                className="flex items-center p-2 space-x-3 rounded-md"
            >
                <BiSelectMultiple />
                <span>Manage Classes</span>
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/dashboard/manage-users"
                className="flex items-center p-2 space-x-3 rounded-md"
            >
                <SiGoogleclassroom />
                <span>Manage Users</span>
            </NavLink>
        </li>
    </ul>
);
